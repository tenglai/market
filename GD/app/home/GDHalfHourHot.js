/**
 * 近半小时热门
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
    DeviceEventEmitter,
} from 'react-native';

// 获取屏幕宽高
const {width, height} = Dimensions.get('window');

// 引入自定义导航栏组件
import CommunalNavBar from '../main/GDCommunalNavBar';
// 引入 cell
import CommunalHotCell from '../main/GDCommunalHotCell';
// 引入 空白页组件
import NoDataView from '../main/GDNoDataView';
// 引入 下拉刷新组件
import {PullList} from 'react-native-pull';

// 引入 HTTP封装组件
import HTTPBase from '../http/HTTPBase';

export default class GDHalfHourHot extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2}), // 数据源 优化
            loaded: false, // 用于判断是否显示空白页
        };
        // 绑定
        this.fetchData = this.fetchData.bind(this);
    }

    // 提供参数出去,便于外部调用
    static defaultProps = {
        removeModal:{}
    }

    // 网络请求
    fetchData(resolve) {

        HTTPBase.get('http://guangdiu.com/api/gethots.php')
            .then((responseData) => { // 处理数据
                // 修改dataSource的值
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data),
                    loaded:true,
                });
                // 关闭下拉刷新动画
                if (resolve !== undefined){
                    // 使用定时器 延时关闭动画
                    setTimeout(() => {
                        resolve();  // 关闭动画
                    }, 1000);
                }
            })
            .catch((error) => {

            })
    }

    popToHome(data) {
        // 向外部传值
        this.props.removeModal(data);
    }

    // 返回中间按钮
    renderTitleItem() {
        return(
            <Text style={styles.navbarTitleItemStyle}>近半小时热门</Text>
        );
    }

    // 返回右边按钮
    renderRightItem() {
        return(
            <TouchableOpacity
                onPress={() => {this.popToHome(false)}}
            >
                <Text style={styles.navbarRightItemStyle}>关闭</Text>
            </TouchableOpacity>
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
                    onPullRelease={(resolve) => this.fetchData(resolve)}
                    // 数据源 通过判断dataSource是否有变化,来判断是否要重新渲染
                    dataSource={this.state.dataSource} 
                    renderRow={this.renderRow}
                    // 隐藏水平线
                    showsHorizontalScrollIndicator={false}
                    style={styles.listViewStyle}
                    initialListSize={5}
                    // 返回 listView 头部
                    renderHeader={this.renderHeader}
                />
            );
        }
    }

    // 返回 listView 头部
    renderHeader() {
        return(
            <View style={styles.headerPromptStyle}>
                <Text>根据每条折扣的点击进行统计,每5分钟更新一次</Text>
            </View>
        );
    }

    // 返回每一行cell的样式
    renderRow(rowData) {
        // 使用cell组件
        return(
            <CommunalHotCell
                image={rowData.image}
                title={rowData.title}
            />
        );
    }

    componentWillMount() {
        // 向GDMain.js 发送通知 隐藏tabBar
        DeviceEventEmitter.emit('isHiddenTabBar', true);
    }

    componentWillUnmount() {
        // 向GDMain.js 发送通知 显示tabBar
        DeviceEventEmitter.emit('isHiddenTabBar', false);
    }

    // 生命周期 组件渲染完成 已经出现在dom文档里
    componentDidMount() {
        // 请求数据
        this.fetchData();
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 导航栏样式 */}
                <CommunalNavBar
                    titleItem = {() => this.renderTitleItem()}
                    rightItem = {() => this.renderRightItem()}
                />

                {/* 根据网络状态决定是否渲染 listView */}
                {this.renderListView()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },

    navbarTitleItemStyle: {
        fontSize:17,
        color:'black',
        marginLeft:50
    },
    navbarRightItemStyle: {
        fontSize:17,
        color:'rgba(123,178,114,1.0)',
        marginRight:15
    },

    headerPromptStyle: {
        height:44,
        width:width,
        backgroundColor:'rgba(239,239,239,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },

    listViewStyle: {
        width:width,
    },
});
