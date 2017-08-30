/**
 * 首页
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
} from 'react-native';

// 引入 下拉刷新组件
import {PullList} from 'react-native-pull';
// 导航器
import CustomerComponents, {
    Navigator
} from 'react-native-deprecated-custom-components';

// 获取屏幕宽高
const {width, height} = Dimensions.get('window');

// 引入自定义导航栏组件
import CommunalNavBar from '../main/GDCommunalNavBar';
// 引入 近半小时热门组件
import HalfHourHot from './GDHalfHourHot';
// 引入 搜索页面组件
import Search from './GDSearch';
// 引入 cell
import CommunalHotCell from '../main/GDCommunalHotCell';
// 引入 空白页组件
import NoDataView from '../main/GDNoDataView';

// 引入 HTTP封装组件
import HTTPBase from '../http/HTTPBase';

export default class GDHome extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2}), // 数据源 优化
            loaded: false, // 用于判断是否显示空白页
            isModal: false, // 用于判断模态的可见性
        };
        // 绑定
        this.fetchData = this.fetchData.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    // 网络请求
    fetchData(resolve) {

        let params = {"count" : 5 };

        HTTPBase.post('http://guangdiu.com/api/getlist.php', params)
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data),
                    loaded:true,
                });
                if (resolve !== undefined){
                    setTimeout(() => {
                        resolve();
                    }, 1000);
                }
            })
            .catch((error) => {

            })
    }

    // 跳转到近半小时热门(通过模态跳转)
    pushToHalfHourHot() {
        this.setState({
            isModal: true
        })
    }

    // 跳转到搜索页面
    pushToSearch() {
        this.props.navigator.push({
            component: Search,
        })
    }

    // 返回左边按钮
    renderLeftItem() {
        // 将组件返回出去
        return(
            <TouchableOpacity
                onPress={() => {this.pushToHalfHourHot()}}
            >
                <Image source={{uri:'hot_icon_20x20'}} style={styles.navbarLeftItemStyle} />
            </TouchableOpacity>
        );
    }

    // 返回中间按钮
    renderTitleItem() {
        return(
            <TouchableOpacity>
                <Image source={{uri:'navtitle_home_down_66x20'}} style={styles.navbarTitleItemStyle} />
            </TouchableOpacity>
        );
    }

    // 返回右边按钮
    renderRightItem() {
        return(
            <TouchableOpacity
                // 跳转搜索页面 
                onPress={() => {this.pushToSearch()}}
            >
                <Image source={{uri:'search_icon_20x20'}} style={styles.navbarRightItemStyle} />
            </TouchableOpacity>
        );
    }

    // 加载更多
    loadMore() {
    }

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
                    // 上拉加载更多
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={60}
                    renderFooter={this.renderFooter}
                />
            );
        }
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

    // 生命周期 组件渲染完成 已经出现在dom文档里
    componentDidMount() {
        // 请求数据
        this.fetchData();
    }

    // 销毁模态
    onRequestClose() {
        this.setState({
            isModal: false
        })
    }

    // 关闭模态
    closeModal(data) {
        this.setState({
            isModal:data
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 初始化模态 */}
                <Modal
                    animationType='slide'  // 动画 底部弹窗
                    transparent={false}  // 透明度
                    visible={this.state.isModal}  // 可见性
                    onRequestClose={() => this.onRequestClose()}  // 销毁
                >
                    <HalfHourHot removeModal={(data) => this.closeModal(data)} />
                </Modal>

                {/* 导航栏样式 */}
                <CommunalNavBar
                    leftItem = {() => this.renderLeftItem()}
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
    navbarRightItemStyle: {
        width:20,
        height:20,
        marginRight:15,
    },

    listViewStyle: {
        width:width,
    },
});
