/**
 * 个人中心自定义cell
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
} from 'react-native';

// ES5
var MyCell = React.createClass({
    getDefaultProps(){
        return{
            leftIconName:'',    // cell左侧图标
            leftTitle:'',   // cell左侧标题
            rightIconName:'',   //  cell右侧图标
            rightTitle:'',  // cell右侧标题
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIconName}} style={styles.leftImgStyle} />
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        {this.rightSubView()}
                    </View>
                </View>
            </TouchableOpacity>
        );
    },

    // cell右侧子视图
    rightSubView(){
        return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.renderRightContent()}
                <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8, marginLeft:5}} />
            </View>
        )
    },

    // cell右侧具体内容
    renderRightContent(){
        if(this.props.rightIconName.length == 0){   // 不返回图片
            return(
                <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            )
        }else{
            <Image source={{uri:this.props.rightIconName}} style={{width:24, height:13}} />
        }
    },
});

const styles = StyleSheet.create({
    container: {
        // 主轴的方向
        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 背景颜色
        backgroundColor:'white',
        // 垂直居中
        alignItems:'center',
        // 高度
        height:Platform.OS == 'ios' ? 40 : 36,

        // 下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftViewStyle:{
        // 主轴的方向
        flexDirection:'row',
        // 侧轴居中
        alignItems:'center',
        // 左外边距
        marginLeft:8
    },

    rightViewStyle:{

    },

    leftImgStyle:{ // 左边的图片
        width:24,
        height:24,
        marginRight:6,
        // 圆角
        borderRadius:12
    },

    leftTitleStyle:{
        fontSize:16
    }
});

// 输出
module.exports = MyCell;
 