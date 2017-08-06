/**
 * 首页中间上部分内容
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

// 导入外部的组件类
var CommonView = require('./MiddleCommonView');

// 导入json数据
var MiddleJSON = require('../../LocalData/HomeTopMiddleLeft.json');

// ES5
var MiddelView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderLeftView()}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    },

    // 左边视图
    renderLeftView(){
        // 取出对应的数据
        var data = MiddleJSON.dataLeft[0];
        return(
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:data.img1}} style={styles.leftImgStyle} />
                    <Image source={{uri:data.img2}} style={styles.leftImgStyle} />
                    <Text style={{color:'gray'}}>{data.title}</Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Text style={{color:'blue',marginRight:5}}>{data.price}</Text>
                        <Text style={{color:'orange',backgroundColor:'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    // 右边视图
    renderRightView(){
        var itemArr = [];
        var rightData = MiddleJSON.dataRight;
        for (var i=0;i<rightData.length;i++){
            var data = rightData[i];
            itemArr.push(
                <CommonView
                    key={i}
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}
                />
            );
        }
        return itemArr;
    },
});

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        flexDirection:'row',
    },
    leftViewStyle:{
        width:screenW * 0.5,
        height:119,
        backgroundColor:'white',
        marginRight:1,
        alignItems:'center',
        justifyContent:'center',
    },
    leftImgStyle:{
        width:120,
        height:30,
        // 图片内容模式
        resizeMode:'contain'
    },
});

// 输出
module.exports = MiddelView;
