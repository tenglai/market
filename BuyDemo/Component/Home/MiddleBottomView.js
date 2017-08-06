/**
 * 首页中间下部分
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

// 导入json数据
var JsonData = require('../../LocalData/XMG_Home_D4.json');

// 导入外部组件
var CommonView = require('./MiddleCommonView');

// ES5
var MiddleBottom = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topViewStyle}></View>
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },

    renderBottomItem(){
        var itemArr = [];
        var dataArr = JsonData.data;
        for (var i=0;i<dataArr.length;i++){
            var data = dataArr[i];
            itemArr.push(
                <CommonView
                    key={i}
                    title={data.maintitle}
                    subTitle={data.deputytitle}
                    rightIcon={this.dealWithImgUrl(data.imageurl)}
                    titleColor={data.typeface_color}
                />
            );
        }
        return itemArr;
    },

    // 处理图片url的方法
    dealWithImgUrl(url){
        if (url.search('w.h') == -1){ // 没有找到,正常返回
            return url;
        }else{
            return url.replace('w.h', '120.90');
        }
    },
});

const styles = StyleSheet.create({
    container: {
        marginTop:10,
    },
    topViewStyle:{},
    bottomViewStyle:{
        flexDirection:'row',
        // 换行
        width:screenW,
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
    },
});

// 输出
module.exports = MiddleBottom;
