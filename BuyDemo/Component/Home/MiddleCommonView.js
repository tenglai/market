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

// ES5
var CommonView = React.createClass({
    getDefaultProps(){
        return{
            title:'',
            subTitle:'',
            rightIcon:'',
            titleColor:''
        }
    },
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{alert('点击了')}}>
                <View style={styles.container}>
                    <View>
                        <Text style={[{color:this.props.titleColor}, styles.titleStyle]}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                    </View>
                    <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43}} />
                </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width:screenW * 0.5 -1,
        height:59,
        marginBottom:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
    },
    subTitleStyle:{
        color:'gray',
    },
});

// 输出
module.exports = CommonView;
