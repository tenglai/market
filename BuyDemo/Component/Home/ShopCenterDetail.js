/**
 * 购物中心详情
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity,
    WebView
} from 'react-native';

// ES5
var ShopCenterDetail = React.createClass({
    getInitialState(){
        return{
            detailUrl: this.props.url
        }
    },
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    },
    // 导航条
    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{this.props.navigator.pop()}} style={styles.LeftViewStyle}>
                    <Image source={{uri:'icon_camera_back_normal'}} style={styles.navImgStyle} />
                </TouchableOpacity>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>购物中心</Text>
                <TouchableOpacity  style={styles.rightViewStyle}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.navImgStyle} />
                </TouchableOpacity>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    // 导航条视图
    navOutViewStyle:{
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'rgba(255,96,0,1)',
        // 主轴方向
        flexDirection:'row',
        // 侧轴对齐方式 垂直居中
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center',
    },
    // 导航条左侧
    LeftViewStyle:{
        position:'absolute',
        left:10,
        bottom:15,
    },
    // 导航栏右侧
    rightViewStyle:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:15,
    },
    // 导航条上图片
    navImgStyle:{
        width:Platform.OS === 'ios' ? 28 : 24,
        height:Platform.OS === 'ios' ? 28 : 24,
    },

});

// 输出
module.exports = ShopCenterDetail;
