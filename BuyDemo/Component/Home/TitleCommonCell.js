/**
 * 首页购物中心
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

// ES5
var TitleCell = React.createClass({
    getDefaultProps(){
        return{
            leftIcon:'',
            leftTitle:'',
            rightTitle:'',
        }
    },
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIcon}}  style={{width:23,height:23,marginRight:5}} />
                        <Text style={{fontSize:17}}>{this.props.leftTitle}</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
                        <Image source={{uri:'icon_cell_right_arrow'}} style={{width:8,height:13,marginRight:10,marginLeft:5}} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection:'row',
        height:44,
        justifyContent:'space-between',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
    },
    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center',
    },
});

// 输出
module.exports = TitleCell;
