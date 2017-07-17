/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

/**-------引入外部的组件----------**/
var CommonCell = require('./XMGCommonCell');

var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}

                <ScrollView>
                   <View style={{marginTop:20}}>
                       <CommonCell
                          title="扫一扫"
                       />
                   </View>

                   <View style={{marginTop:20}}>
                        <CommonCell
                            title="省流量模式"
                            isSwitch={true}
                        />
                        <CommonCell
                           title="消息提醒"
                        />
                        <CommonCell
                           title="邀请好友使用码团"
                        />
                        <CommonCell
                           title="清空缓存"
                           rightTitle="1.99M"
                        />
                   </View>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="问卷调查"
                        />
                        <CommonCell
                            title="支付帮助"
                        />
                        <CommonCell
                            title="网络诊断"
                        />
                        <CommonCell
                            title="关于码团"
                        />
                        <CommonCell
                            title="我要应聘"
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="精品应用"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    },

    // 导航条
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>更多</Text>
                <TouchableOpacity onPress={()=>{alert('点了!')}} style={styles.rightViewStyle}>
                   <Image source={{uri: 'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
});


const styles = StyleSheet.create({

    navImageStyle:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24,
    },

    rightViewStyle:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:Platform.OS == 'ios' ? 15:13
    },

    navOutViewStyle:{
        height: Platform.OS == 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center'
    },

    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

// 输出组件类
module.exports = More;
