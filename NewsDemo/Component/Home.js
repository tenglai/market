/**
 * 首页
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';

// 引入Dimensions类库
var Dimensions = require('Dimensions');
var ScreenW = Dimensions.get('window').width;

// 导入本地json数据
var LocalData = require('../LocalData.json');

// 导入外部的组件类
var ScrollImage = require('../Component/ScrollImage');

var Home = React.createClass({
    // 不可改变的默认值
    getDefaultProps(){
        return{
            url_api:'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html',
            key_word:'T1348647853363'
        }
    },

    // 初始化
    getInitialState(){
        return{
            // ListView头部轮播图的数据源
            headerDataArr:[],
            // cell的数据源
            dataSource: new ListView.DataSource({
                rowHasChanged:(r1,r2)=>{r1 !== r2}
            })
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderHeader={this.renderHeader}
                />
            </View>
        );
    },

    // 导航条
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>首页</Text>
            </View>
        )
    },

    // 返回ListView头部视图
    renderHeader(){
        // 如果没有头部banner数据
        if(this.state.headerDataArr.length == 0) return;

        return(
            <ScrollImage
                imageDataArr={this.state.headerDataArr}
            />
        )
    },

    // 返回LisView中的单个cell
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri:rowData.imgsrc}} style={styles.imgStyle} />
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.mainTitleStyle}>{rowData.title}</Text>
                        <Text style={styles.subTitleStyle}>{rowData.digest}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },

    // 组件加载完毕之后调用
    componentDidMount(){
        // 请求网络数据
        this.loadDataFromNet();
    },

    // 请求网络数据的方法
    loadDataFromNet(){
        fetch(this.props.url_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                // 拿到需要的数据
                var jsonData = responseData[this.props.key_word];

                // 处理数据
                this.dealWithData(jsonData);
            })
            .catch((error)=>{
                if(error){
                   // 网络请求失败,就用本地数据
                    console.log('网络请求失败');
                    var jsonData = LocalData[this.props.key_word];
                    this.dealWithData(jsonData);
                }
            })
    },

    // 处理网络数据的细节方法
    dealWithData(jsonData){
        // 定义临时变量
        var headerArr = [], listDataArr = [];
        // 遍历拿到的json数据
        for (var i=0;i<jsonData.length;i++){
            // 取出单个对象
            var data = jsonData[i];
            if(data.hasAD == 1){
                // 取出广告数据
                headerArr = data.ads;
            }else {
                // 非广告数据(行数据)
                listDataArr.push(data)
            }
        }

        // 更新状态机
        this.setState({
            // ListView头部轮播图的数据源
            headerDataArr:headerArr,
            // cell的数据源
            dataSource:this.state.dataSource.cloneWithRows(listDataArr),
        });

        console.log(headerArr,listDataArr);
    },
});

const styles = StyleSheet.create({
    // 导航条视图
    navOutViewStyle:{
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'#468AFF',
        // 主轴方向
        flexDirection:'row',
        // 侧轴对齐方式 垂直居中
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    cellViewStyle:{
        // 主轴方向
        flexDirection:'row',
        padding:10,
        // 设置下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.8,
    },
    imgStyle:{
        width:90,
        width:90,
        backgroundColor:'gray',
    },
    rightViewStyle:{
        width:ScreenW - 90 - 10 * 2,
        marginLeft:10,
    },
    mainTitleStyle:{
        fontSize:16,
        marginBottom:5,
    },
    subTitleStyle:{
        fontSize:14,
        color:'gray',
    },
});

// 输出类
module.exports = Home;
