/**
 * 我的
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
 
/*======导入外部组件类======*/
var MyCell = require('./CommonMyCell');
var MiddleView = require('./MineMiddleView');
var HeaderView = require('./MineHeaderView');
 
// ES5
var Mine = React.createClass({
    render() {
        return (
            <ScrollView style={styles.scrollViewStyle}>
                <HeaderView />
                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="collect"
                        leftTitle="我的订单"
                        rightTitle="查看全部订单"
                    />
                    <MiddleView />
                </View>
                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="draft"
                        leftTitle="钱包"
                        rightTitle="账号余额:￥100.88"
                    />
                </View>
                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="voucher"
                        leftTitle="抵用券"
                        rightTitle="10张"
                    />
                </View>
                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="mall"
                        leftTitle="积分商城"
                        rightTitle=""
                    />
                </View>
                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="recommend"
                        leftTitle="今日推荐"
                        rightTitle=""
                    />
                </View>
            </ScrollView>
        );
    }
});
 
const styles = StyleSheet.create({
    scrollViewStyle:{
        
    }
});
 
// 输出
module.exports = Mine;
