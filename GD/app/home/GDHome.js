/**
 * 首页
 */
import React, { Component, PropTypes } from 'react';
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
    DeviceEventEmitter, // 通知
    InteractionManager, // 解决跳转卡顿问题
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
// 引入 公共cell
import CommunalCell from '../main/GDCommunalCell';
// 引入 详情页 组件
import CommunalDetail from '../main/GDCommunalDetail';
// 引入 筛选菜单组件
import CommunalSiftMenu from '../main/GDCommunalSiftMenu';
// 引入 近半小时热门组件
import HalfHourHot from './GDHalfHourHot';
// 引入 搜索页面组件
import Search from '../main/GDSearch';
// 引入 空白页组件
import NoDataView from '../main/GDNoDataView';

// 数据 筛选菜单
import HomeSiftData from '../data/HomeSiftData.json';

export default class GDHome extends Component {
    
    // 初始化(默认)
    static defaultProps = {
        loadDataNumber:{} // 回调
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2}), // 数据源 优化
            loaded: false, // 用于判断是否显示空白页
            isHalfHourHotModal: false, // 用于判断模态的可见性
            isSiftModal: false, // 筛选功能
        };
        // 全局定义一个空数组用于存储列表数据
        this.data = [];
        // 绑定
        this.loadData = this.loadData.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    // 加载最新数据网络请求
    loadData(resolve) {

        let params = {"count" : 10 };

        HTTPBase.get('https://guangdiu.com/api/getlist.php', params)
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

                // 获取最新数据个数(角标)
                this.loadDataNumber();

                // 存储数组中最后一个元素的id
                let cnlastID = responseData.data[responseData.data.length - 1].id;
                AsyncStorage.setItem('cnlastID', cnlastID.toString());  // 只能存储字符或字符串

                // 首页存储数组中第一个元素的id
                let cnfirstID = responseData.data[0].id;
                AsyncStorage.setItem('cnfirstID', cnfirstID.toString());

                // // 清除本地存储的数据
                // RealmBase.removeAllData('HomeData');

                // // 存储数据到本地
                // RealmBase.create('HomeData', responseData.data); // 向数据表存储数据
            })
            .catch((error) => {
                // // 数据加载失败,拿到本地存储的数据,展示出来,如果没有存储,那就显示无数据页面
                // this.data = RealmBase.loadAll('HomeData'); // 从数据表提取数据

                // // 重新渲染
                // this.setState({
                //     dataSource: this.state.dataSource.cloneWithRows(this.data),
                //     loaded:true,
                // });
            })
    }

    // 加载更多数据的网络请求
    loadMoreData(value) {

        let params = {
            "count" : 10,
            "sinceid" : value 
        };

        HTTPBase.get('https://guangdiu.com/api/getlist.php', params)
            .then((responseData) => {

                // 拼接数据
                this.data = this.data.concat(responseData.data);

                // 重新渲染
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(this.data),
                    loaded:true,
                });

                // 存储数组中最后一个元素的id
                let cnlastID = responseData.data[responseData.data.length - 1].id;
                AsyncStorage.setItem('cnlastID', cnlastID.toString());  // 只能存储字符或字符串

            })
            .catch((error) => {

            })
    }

    // 加载筛选数据网络请求
    loadSiftData(mall, cate) {

        let params = {};

        if(mall === "" && cate === ""){  // 全部
            this.loadData(undefined);
            return;
        }

        if(mall === ""){ // cate 有值
            params = {
                "cate" : cate
            };
        }else{
            params = {
                "mall" : mall
            };
        }

        HTTPBase.get('https://guangdiu.com/api/getlist.php', params)
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

                // 存储数组中最后一个元素的id
                let cnlastID = responseData.data[responseData.data.length - 1].id;
                AsyncStorage.setItem('cnlastID', cnlastID.toString());  // 只能存储字符或字符串
            })
            .catch((error) => {

            })
    }

    // 获取最新数据个数
    loadDataNumber() {
        this.props.loadDataNumber();
    }

    // 加载更多数据操作
    loadMore() {
        // 读取存储的id
        AsyncStorage.getItem('cnlastID')
            .then((value) => {
                // 数据加载操作
                this.loadMoreData(value);
            })
    }

    // 模态到近半小时热门
    pushToHalfHourHot() {
        this.setState({
            isHalfHourHotModal: true
        })
    }

    // 跳转到搜索页面
    pushToSearch() {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                component: Search,
            });
        });
    }

    // 安卓模态销毁模态
    onRequestClose() {
        this.setState({
            isHalfHourHotModal:false,
            isSiftModal:false,
        })
    }

    // 关闭模态
    closeModal(data) {
        this.setState({
            isHalfHourHotModal:data,
            isSiftModal:data,
        })
    }

    // 显示筛选菜单
    showSiftMenu() {
        this.setState({
            isSiftModal:true,
        })
    }

    // 跳转到详情页
    pushToDetail(value) {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                component:CommunalDetail,
                params: {
                    url: 'https://guangdiu.com/api/showdetail.php' + '?' + 'id=' + value
                }
            });
        });
    }

    // 点击了Item
    clickTabBarItem() {

        let PullList = this.refs.pullList;

        if (PullList.scroll.scrollProperties.offset > 0) {      // 不在顶部
            // 一键置顶
            PullList.scrollTo({y:0});
        }else {     // 在顶部

            // 执行下拉刷新动画
            // PullList.state.pullPan = new Animated.ValueXY({x: 0, y: this.topIndicatorHeight * -1});

            // 加载最新数据
            this.loadData();

            // 关闭动画
            setTimeout(() => {
                PullList.resetDefaultXYHandler();
            },1000);
        }
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
            <TouchableOpacity
                // 显示或隐藏筛选菜单
                onPress={() => {this.showSiftMenu()}}
            >
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

    // ListView尾部
    renderFooter() {
        return (
            <View style={{height: 100}}>
                <ActivityIndicator />
            </View>
        );
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

    // 根据网络状态决定是否渲染 listView
    renderListView() {
        if(this.state.loaded === false) { // 无数据
            // 显示空白页
            return(
                <NoDataView />
            );
        }else{ // 有数据
            return(
                <PullList                                               // 将ListView 改为 PullList
                    ref="pullList"                                      // 一键置顶
                    onPullRelease={(resolve) => this.loadData(resolve)} // 下拉刷新操作
                    dataSource={this.state.dataSource}                  // 设置数据源
                    renderRow={this.renderRow.bind(this)}               // 根据数据创建相应 cell
                    showsHorizontalScrollIndicator={false}              // 隐藏水平指示器
                    style={styles.listViewStyle}                        // 样式
                    initialListSize={7}                                 // 优化：一次渲染几条数据
                    renderHeader={this.renderHeader}                    // 设置头部视图
                    onEndReached={this.loadMore}                        // 当接近底部特定距离时调用
                    onEndReachedThreshold={60}                          // 当接近底部60时调用
                    renderFooter={this.renderFooter}                    // 设置尾部视图
                    removeClippedSubviews={true}                        // 优化
                />
            );
        }
    }

    // 组件加载完成
    componentDidMount() {
        // 刷新数据
        this.loadData();

        // 注册通知
        this.subscription = DeviceEventEmitter.addListener('clickHomeItem', () => this.clickTabBarItem())
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 导航栏样式 */}
                <CommunalNavBar
                    leftItem = {() => this.renderLeftItem()}
                    titleItem = {() => this.renderTitleItem()}
                    rightItem = {() => this.renderRightItem()}
                />

                {/* 根据网络状态决定是否渲染 listView */}
                {this.renderListView()}

                {/* 初始化近半小时热门模态 */}
                <Modal
                    animationType='slide'  // 动画 底部弹窗
                    transparent={false}  // 透明度
                    visible={this.state.isHalfHourHotModal}  // 可见性
                    onRequestClose={() => this.onRequestClose()}  // 销毁
                >
                    <Navigator
                        initialRoute={{
                            name:'halfHourHot',
                            component:HalfHourHot
                        }}

                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component
                                removeModal={(data) => this.closeModal(data)}
                                {...route.params}
                                navigator={navigator} />
                        }} />
                </Modal>

                {/* 初始化筛选菜单模态 */}
                <Modal
                    animationType='none'  // 无动画
                    transparent={true}  // 为透明状态
                    visible={this.state.isSiftModal}  // 可见性
                    onRequestClose={() => this.onRequestClose()}  // 销毁
                >
                    <CommunalSiftMenu
                        removeModal={(data) => this.closeModal(data)}
                        data={HomeSiftData}
                        loadSiftData={(mall, cate) => this.loadSiftData(mall, cate)}
                    />
                </Modal>
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
