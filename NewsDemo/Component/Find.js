/**
 * 发现
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';


var Find = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                <Text style={styles.welcome}>
                    发现
                </Text>
            </View>
        );
    },
    // 导航条
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>发现</Text>
            </View>
        )
    }
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

// 输出类
module.exports = Find;
