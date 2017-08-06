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

// ES5
var Mine = React.createClass({
    render() {
        return (
            <ScrollView>
                <View style={{marginTop:20}}>
                    <MyCell
                        leftIconName="draft"
                        leftTitle="钱包"
                        rightTitle="账户余额:￥100.88"
                    />
                </View>
            </ScrollView>
        );
    }
});

const styles = StyleSheet.create({

});

// 输出
module.exports = Mine;
