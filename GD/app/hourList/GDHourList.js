/**
 * 小时风云榜
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
// 引入 空白页组件
import NoDataView from '../main/GDNoDataView';

export default class GDHourList extends Component {

   // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2}),
            loaded:false,
            prompt:'',
        };
        // 初始化
        this.data = [];
        this.nowHour = 0;
        this.loadData = this.loadData.bind(this);
    }

    // 网络请求
    loadData(resolve) {

        // 当前小时数
        this.nowHour = new Date().getHours();

        let params = {};

        HTTPBase.get('https://guangdiu.com/api/getranklist.php', params)
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
            })
            .catch((error) => {

            })
    }

    // 根据时间加载数据
    dataFromTime(hour, date) {

        let params = {
            "date": date,
            "hour": hour
        };

        HTTPBase.get('https://guangdiu.com/api/getranklist.php', params)
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
            })
            .catch((error) => {

            })
    }

    // 跳转到设置
    pushToSettings() {

    }

    // 返回中间标题
    renderTitleItem() {
        return(
            <Image source={{uri:'navtitle_rank_106x20'}} style={styles.navbarTitleItemStyle} />
        );
    }

    // 返回右边按钮
    renderRightItem() {
        return(
            <TouchableOpacity
                onPress={()=>{this.pushToSettings()}}
            >
                <Text style={styles.navbarRightItemStyle}>设置</Text>
            </TouchableOpacity>
        );
    }

    // 根据网络状态决定是否渲染 listview
    renderListView() {
        if (this.state.loaded === false) {
            return(
                <NoDataView />
            );
        }else {
            return(
                <PullList
                    onPullRelease={(resolve) => this.loadData(resolve)}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    showsHorizontalScrollIndicator={false}
                    style={styles.listViewStyle}
                    initialListSize={5}
                />
            );
        }
    }

    // 跳转到详情页
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
        return(
            <TouchableOpacity
                onPress={() => this.pushToDetail(rowData.id)}
            >
                <CommunalCell
                    image={rowData.image}
                    title={rowData.title}
                    mall={rowData.mall}
                    pubTime={rowData.pubtime}
                    fromSite={rowData.fromsite}
                />
            </TouchableOpacity>
        );
    }

    // dom渲染完毕后调用
    componentDidMount() {
        this.loadData();
    }

    // 当前时间
    nowDate() {
        let date = new Date();     // 获取当前时间

        let year = date.getFullYear();  // 年
        let month = date.getMonth();    // 月
        let day = date.getDate();       // 日

        if(month >= 1 && month <= 9) { // 在 10 以内,我们手动添加 0
            month = "0" + (month + 1);  // 注意：js 中月份是以 0 开始的
        }

        if(day >= 1 && day <= 9){ // 在 10 以内,我们手动添加 0
            day = "0" + day;
        }

        return year + month + day;
    }

    // 点击 上一小时 按钮
    lastHour() {
        // 减去一小时
        let hour = this.nowHour - 1;

        this.dataFromTime(hour, this.nowDate());

        // 重新赋值回去
        this.nowHour = hour;
    }

    // 点击 下一小时 按钮
    nextHour() {

        // 减去一小时
        let hour = this.nowHour + 1;

        this.dataFromTime(hour, this.nowDate());

        // 重新赋值回去
        this.nowHour = hour;
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 导航栏样式 */}
                <CommunalNavBar
                    titleItem = {() => this.renderTitleItem()}
                    rightItem = {() => this.renderRightItem()}
                />

                {/* 提醒栏 */}
                <View style={styles.promptViewStyle}>
                    <Text>提示框</Text>
                </View>

                {/* 根据网络状态决定是否渲染 listview */}
                {this.renderListView()}

                {/* 操作栏 */}
                <View style={styles.operationViewStyle}>
                    <TouchableOpacity
                        onPress={() => this.lastHour()}
                    >
                        <Text style={{marginRight:10, fontSize:17, color:'green'}}>{"< " + "上1小时"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.nextHour()}
                    >
                        <Text style={{marginLeft:10, fontSize:17, color:'green'}}>{"下1小时" + " >"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    navbarTitleItemStyle: {
        width:106,
        height:20,
        marginLeft:50
    },
    navbarRightItemStyle: {
        fontSize:17,
        color:'rgba(123,178,114,1.0)',
        marginRight:15,
    },

    promptViewStyle: {
        width:width,
        height:44,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(251,251,251,1.0)',
    },

    operationViewStyle: {
        width:width,
        height:44,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
});