/**
 * 自定义导航栏
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
} from 'react-native';
 
// 获取屏幕宽高
const {width, height} = Dimensions.get('window');

// PropTypes react 16 中被弃用
import PropTypes from 'prop-types';
 
export default class CommunalNavBar extends Component {
    // 创建成员属性 ES6统一用static管理
    static propTypes = {
        leftItem:PropTypes.func,  // 外部传入方法,内部接收
        titleItem:PropTypes.func,
        rightItem:PropTypes.func,
    };
 
    // 左边
    renderLeftItem() {
        // 判断是否传入值
        if (this.props.leftItem === undefined) return;
        // 有值,调用方法,进行初始化
        return this.props.leftItem();
    }
 
    // 中间
    renderTitleItem() {
        if (this.props.titleItem === undefined) return;
        return this.props.titleItem();
    }
 
    // 右边
    renderRightItem() {
        if (this.props.rightItem === undefined) return;
        return this.props.rightItem();
    }
 
    render() {
        return (
            <View style={styles.container}>
                {/* 左边 */}
                <View>
                    {this.renderLeftItem()}
                </View>
                {/* 中间 */}
                <View>
                    {this.renderTitleItem()}
                </View>
                {/* 右边 */}
                <View>
                    {this.renderRightItem()}
                </View>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        width:width,
        height:Platform.OS === 'ios' ? 64 : 44,
        backgroundColor:'#1296DB',
        flexDirection:'row', // 设置主轴的方向
        justifyContent:'space-between', // 设置主轴的对齐方式
        alignItems:'center', // 设置侧轴内容居中
        borderBottomWidth:0.5,
        borderBottomColor:'gray',
        paddingTop:Platform.OS === 'ios' ? 15 : 0,
    },
});