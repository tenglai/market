/**
 * 首页
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

/*======导入外部组件类======*/
var HomeDetail = require('./HomeDetail');
var TopView = require('./HomeTopView');
var MiddleView = require('./HomeMiddleView');
var MiddleBottom = require('./MiddleBottomView');
var ShopCenter = require('./ShopCenter');
var ShopCenterDetail = require('./ShopCenterDetail');

// ES5
var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*首页的导航条*/}
                {this.renderNavBar()}
                {/*首页主要内容*/}
                <ScrollView>
                    {/*头部的View*/}
                   <TopView />
                    {/*中间的view*/} 
                    <MiddleView />
                    {/*中间下部分内容*/}
                    <MiddleBottom
                        popTopHome={(data)=>{this.pushToDetail(data)}}
                    />
                    {/*购物中心*/}
                    <ShopCenter
                        popToHomeView={(url)=>this.pushToShopCenterDetail(url)}
                    />
                </ScrollView>
            </View>
        );
    },

    // 首页的导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                <TouchableOpacity onPress={()=>{this.pushToDetail()}} >
                    <Text style={styles.leftTitleStyle}>宁波</Text>
                </TouchableOpacity>
                <TextInput placeholder="输入商家,品类,商圈" style={styles.topInputStyle} />
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={()=>{alert('点击了')}} >
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('点击了')}} >
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    },

    // 跳转到首页详细页
    pushToDetail(data){
        this.props.navigator.push({
            component:HomeDetail,   // 要跳转过去的组件
            title:'首页详细页'
        });
    },

    // 跳转到购物中心详细页
    pushToShopCenterDetail(url){
        this.props.navigator.push({
            component:ShopCenterDetail,   // 要跳转过去的组件
            passProps:{'url':this.dealWithImgUrl(url)},  // 传递数据到下一个界面
        });
    },

    // URL处理函数
    dealWithImgUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=','');
    },
});

const styles = StyleSheet.create({
    // 导航栏
    navBarStyle:{
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1)',
        // 主轴方向
        flexDirection:'row',
        // 侧轴对齐方式 垂直居中
        alignItems:'center',
        // 主轴对齐方式
        justifyContent:'space-around', // 平均分布
    },
    // 导航条左侧文字
    leftTitleStyle:{
        color:'white',
        fontSize:16,
    },
    // 导航栏输入框
    topInputStyle:{
        width:screenW * 0.71,
        height:Platform.OS === 'ios' ? 35 : 30,
        backgroundColor:'white',
        marginTop:Platform.OS === 'ios' ? 18 : 0,
        // 圆角
        borderRadius:18,
        paddingLeft:10,
    },
    // 导航条右侧视图
    rightNavViewStyle:{
        flexDirection:'row',
        height:64,
        // 侧轴对齐方式
        alignItems:'center',
        // backgroundColor:'blue',
    },
    // 导航栏右侧图片
    navRightImgStyle:{
        width:Platform.OS === 'ios' ? 28 : 24,
        height:Platform.OS === 'ios' ? 28 : 24,
    },
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});

// 输出
module.exports = Home;
