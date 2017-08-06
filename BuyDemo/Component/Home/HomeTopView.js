/**
 * 首页头部内容
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    ListView
} from 'react-native';

var Dimensions = require('Dimensions');
var screenW = Dimensions.get('window').width;

/*======导入外部组件类======*/
var TopListView = require('./HomeTopListView');

// 导入外部json数据
var TopMenuJSON = require('../../LocalData/TopMenu.json');

// ES5
var TopView = React.createClass({
    getInitialState(){
        return{
            activePage:0,
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onScrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>
                {/*页码*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },

    // 当一帧滚动结束的时候调用
    onScrollAnimationEnd(e){
        // 计算当前页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / screenW);
        // 更新状态机
        this.setState({
            activePage:currentPage,
        });
    },

    // 返回子视图
    renderScrollItem(){
        var itemArr = [];
        var dataArr = TopMenuJSON.data;
        for (var i=0;i<dataArr.length;i++){
            itemArr.push(
                <TopListView
                    key={i}
                    dataArr={dataArr[i]}
                />
            );
        }
        return itemArr;
    },

    // 返回页码视图
    renderIndicator(){
        var indicatorArr = [],style;

        for (var i=0;i<2;i++){
            // 设置圆点的样式
            style = (i == this.state.activePage) ? {color:'orange'} : {color:'gray'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    }
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    indicatorViewStyle:{
        flexDirection:'row',
        justifyContent:'center',
    },
});

// 输出
module.exports = TopView;
