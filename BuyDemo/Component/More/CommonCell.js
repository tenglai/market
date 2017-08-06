/**
 * 自定义可复用的cell
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
    Switch
} from 'react-native';

// ES5
var CommonCell = React.createClass({
    getDefaultProps(){
        return{
            title:'', // cell标题文字
            isSwitch:false, // 是否展示开关
            rightTitle:'', //cell右侧标题
        }
    },

    getInitialState(){
        return{
            isOn:false,
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <View style={styles.container}>
                    <Text>{this.props.title}</Text>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },

    // cell右侧指示图标视图
    renderRightView(){
        if(this.props.isSwitch){
           return(
               <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}} />
           )
        }else{
            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {this.renderRightTitle()}
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13}} />
                </View>
            )
        }
    },

    // cell右侧标题视图
    renderRightTitle(){
        if(this.props.rightTitle.length > 0){
            return(
                <Text style={{color:'gray',marginRight:10}}>{this.props.rightTitle}</Text>
            )
        }
    },
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height:Platform.OS == 'ios' ? 40 : 30,
        borderBottomColor:'#ddd',
        borderBottomWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-between',
        // 垂直居中
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
    },
});

// 输出
module.exports = CommonCell;
 