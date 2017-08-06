/**
 * 首页购物中心
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入外部组件类
var TitleView = require('./TitleCommonCell');
// 导入json数据
var Home_D5 = require('../../LocalData/XMG_Home_D5.json');

// ES5
var ShopCenter = React.createClass({
    getDefaultPorps(){
        return{
            popToHomeView:null, // 回调函数
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <TitleView
                    leftIcon="gw"
                    leftTitle="购物中心"
                    rightTitle={Home_D5.tips}
                />
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    },

    // 返回所有item
    renderAllItem(){
        var itemArr = [];
        var shopData = Home_D5.data;
        for (var i=0;i<shopData.length;i++){
            var data = shopData[i];
            itemArr.push(
                <ShopCenterItem
                    key={i}
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailurl={data.detailurl}
                    popToShopCenter={(url)=>this.popTopHome(url)}
                />
            )
        }
        return itemArr;
    },

    // 返回首页
    popTopHome(url){
        if(this.props.popToHomeView != null){
            this.props.popToHomeView(url);
        }
    }
});

// 每一个商场
var ShopCenterItem = React.createClass({
    getDefaultProps(){
        return{
            shopImage:'',
            shopSale:'',
            shopName:'',
            detailurl:'',
            popToShopCenter:null
        }
    },
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={()=>this.clickItem(this.props.detailurl)}>
                <View style={styles.itemViewStyle}>
                   <Image source={{uri:this.props.shopImage}} style={styles.imageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    },

    // 点击事件
    clickItem(url){
        if(this.props.detailurl != null){
            this.props.popToShopCenter(url);
        }
    },
});

const styles = StyleSheet.create({
    container: {
        marginTop:10,
    },
    scrollViewStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10,
    },
    itemViewStyle:{
        margin:8,
    },
    imageStyle:{
        width:120,
        height:100,
        borderRadius:8,
    },
    shopSaleStyle:{
        // 定位
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'red',
        color:'white',
        padding:3,
    },
    shopNameStyle:{
        textAlign:'center',
        marginTop:5,
    },
});

// 输出
module.exports = ShopCenter;
