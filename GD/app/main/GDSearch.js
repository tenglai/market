/**
 * 搜索页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    Dimensions,
    ActivityIndicator,
    Modal, // 模态
    AsyncStorage, // 缓存数据库(数据持久化)
    TextInput, // 输入框组件
} from 'react-native';

// 引入 下拉刷新组件
import {PullList} from 'react-native-pull';
// 导航器
import CustomerComponents, {
    Navigator
} from 'react-native-deprecated-custom-components';

// 获取屏幕宽高
const {width, height} = Dimensions.get('window');
// 监听 键盘函数
const dismissKeyboard = require('dismissKeyboard');

// 引入自定义导航栏组件
import CommunalNavBar from '../main/GDCommunalNavBar';
// 引入 公共cell
import CommunalCell from '../main/GDCommunalCell';
// 引入 详情页 组件
import CommunalDetail from '../main/GDCommunalDetail';
// 引入 空白页组件
import NoDataView from '../main/GDNoDataView';

export default class GDSearch extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2}), // 数据源 优化
            loaded: false, // 用于判断是否显示空白页
            isModal: false, // 用于判断模态的可见性
        };
        // 全局定义一个空数组用于存储列表数据
        this.data = [];

        this.changeText = '';
        // 绑定
        this.loadData = this.loadData.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    // 加载最新数据网络请求
    loadData(resolve) {

        if (!this.changeText) return;

        let params = {
            "q" : this.changeText
        };

        HTTPBase.get('http://guangdiu.com/api/getresult.php', params)
            .then((responseData) => {

                // 情况数组(刷新时)
                this.data = [];

                // 拼接数据
                this.data = this.data.concat(responseData.data);

                // 重新渲染
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(this.data),
                    loaded:true,
                });

                // 关闭刷新动画
                if (resolve !== undefined){
                    setTimeout(() => {
                        resolve();
                    }, 1000);
                }

                // 存储数组中最后一个元素的id
                let searchLastID = responseData.data[responseData.data.length - 1].id;
                AsyncStorage.setItem('searchLastID', searchLastID.toString());
            })
            .catch((error) => {

            })
    }

    // 加载更多数据的网络请求
    loadMoreData(value) {

        let params = {
            "q" : this.changeText,
            "sinceid" : value
        };

        HTTPBase.get('http://guangdiu.com/api/getresult.php', params)
            .then((responseData) => {

                // 拼接数据
                this.data = this.data.concat(responseData.data);

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(this.data),
                    loaded:true,
                });

                // 存储数组中最后一个元素的id
                let searchLastID = responseData.data[responseData.data.length - 1].id;
                AsyncStorage.setItem('searchLastID', searchLastID.toString());
            })
            .catch((error) => {

            })
    }

    // 加载更多数据操作
    loadMore() {
        // 读取id
        AsyncStorage.getItem('searchLastID')
            .then((value) => {
                // 数据加载操作
                this.loadMoreData(value);
            })

    }

    // 返回上一页
    pop() {
        // 回收键盘
        dismissKeyboard();

        this.props.navigator.pop();
    }

    // 返回左边按钮
    renderLeftItem() {
        // 将组件返回出去
        return(
            <TouchableOpacity
                onPress={() => {this.pop()}}
            >
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image source={{uri:'back'}} style={styles.navbarLeftItemStyle} />
                    <Text>返回</Text>
                </View>
            </TouchableOpacity>
        );
    }

    // 返回中间按钮
    renderTitleItem() {
        return(
            <TouchableOpacity>
                <Text>搜索全网折扣</Text>
            </TouchableOpacity>
        );
    }

    // ListView尾部
    renderFooter() {
        return (
            <View style={{height: 100}}>
                <ActivityIndicator />
            </View>
        );
    }

    // 根据网络状态决定是否渲染 listView
    renderListView() {
        if(this.state.loaded === false) {
            // 显示空白页
            return(
                <NoDataView />
            );
        }else{
            return(
                <PullList   // 将ListView 改为 PullList
                    // 下拉刷新
                    onPullRelease={(resolve) => this.loadData(resolve)}
                    // 数据源 通过判断dataSource是否有变化,来判断是否要重新渲染
                    dataSource={this.state.dataSource} 
                    renderRow={this.renderRow.bind(this)}
                    // 隐藏水平线
                    showsHorizontalScrollIndicator={false}
                    style={styles.listViewStyle}
                    initialListSize={7}  // 默认渲染数据条数
                    // 返回 listView 头部
                    renderHeader={this.renderHeader}
                    // 上拉加载更多
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={60}
                    renderFooter={this.renderFooter}
                />
            );
        }
    }

    // 通过id 跳转详情页
    pushToDetail(value) {
        this.props.navigator.push({
            component:CommunalDetail,
            params: {
                url: 'https://guangdiu.com/api/showdetail.php' + '?' + 'id=' + value
            }
        })
    }

    // 返回每一行cell的样式
    renderRow(rowData) {
        // 使用cell组件
        return(
            <TouchableOpacity
                // 给每一个cell添加点击事件
                onPress={() => this.pushToDetail(rowData.id)}
            >
                <CommunalCell
                    image={rowData.image}
                    title={rowData.title}
                    mall={rowData.mall}  // 平台
                    pubTime={rowData.pubtime}  // 时间
                    fromSite={rowData.fromsite}  // 来源
                />
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 导航栏样式 */}
                <CommunalNavBar
                    leftItem = {() => this.renderLeftItem()}
                    titleItem = {() => this.renderTitleItem()}
                />

                {/* 顶部工具栏 */}
                <View style={styles.toolsViewStyle} >
                    {/* 左边 */}
                    <View style={styles.inputViewStyle} >
                        <Image source={{uri:'search_icon_20x20'}} style={styles.searchImageStyle} />
                        <TextInput
                            style={styles.textInputStyle}
                            keyboardType="default"  // 键盘类型
                            placeholder="请输入搜索商品关键字"  // 提示文字
                            placeholderTextColor='gray' // 设置提示文字颜色
                            autoFocus={true} // 自动获取焦点,弹窗键盘
                            clearButtonMode="while-editing"  // 清除按钮(编辑情况下出现清除按钮)
                            onChangeText={(text) => {this.changeText = text}} // 监听文本改变,将文字返回
                            onEndEditing={() => this.loadData()} // 结束编辑状态
                        />
                    </View>

                    {/* 右边 */}
                    <View style={{marginRight:10}}>
                        <TouchableOpacity
                            onPress={() => this.pop()}
                        >
                            <Text style={{color:'green'}}>取消</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 根据网络状态决定是否渲染 listview */}
                {this.renderListView()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    navbarLeftItemStyle: {
        width:20,
        height:20,
        marginLeft:15,
    },
    navbarTitleItemStyle: {
        width:66,
        height:20,
    },

    toolsViewStyle: {
        width:width,
        height:44,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },

    inputViewStyle: {
        height:35,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(239,239,241,1.0)',
        marginLeft:10,
        borderRadius:5
    },
    searchImageStyle: {
        width:15,
        height:15,
        marginLeft:8
    },
    textInputStyle: {
        width:width * 0.75,
        height:35,
        marginLeft:8
    },

    listViewStyle: {
        width:width,
    },
});
