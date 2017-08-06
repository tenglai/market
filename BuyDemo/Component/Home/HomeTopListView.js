/**
 * HomeTopView子视图
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

// 全局常量
const cols = 5
const cellW = Platform.OS == 'ios' ? 70 : 60;
const cellH = 70;
const vMargin = (screenW - cellW * cols) / (cols + 1);


// ES5
var TopListView = React.createClass({
    getDefaultProps(){
        return{
            dataArr:[],
        }
    },
    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1,row2)=>row1 !== row2});
        return{
            dataSource:ds.cloneWithRows(this.props.dataArr)
        }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },

    // 返回具体的一行
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.cellStyle}>
                    <Image source={{uri:rowData.image}} style={{width:52,height:52}} />
                    <Text style={styles.titleStyle}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
});

const styles = StyleSheet.create({
    contentViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:screenW,
        alignItems:'center',
        justifyContent:'center',
    },
    cellStyle:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        width:cellW,
        height:cellH,
        marginLeft:vMargin,
    },
    titleStyle:{
        fontSize:Platform.OS == 'ios' ? 14 : 12,
        color:'gray'
    },
});

// 输出
module.exports = TopListView;
