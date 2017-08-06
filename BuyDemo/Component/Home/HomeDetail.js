/**
 * 首页详情页
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

// ES5
var HomeDetail = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.popToHome()}}>
                    <Text style={styles.welcome}>
                        HomeDetail
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },

    // 返回首页
    popToHome(){
        this.props.navigator.pop();
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

// 输出
module.exports = HomeDetail;
