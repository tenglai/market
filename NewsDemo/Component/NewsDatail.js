/**
 * 新闻详情页
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
} from 'react-native';


var NewsDetail = React.createClass({
    getInitialState(){
        return{
            // 具体的数据
            datailData:''
        }
    },

    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={true}
                source={{html:this.state.datailData, baseUrl:''}}
            />
        );
    },

    componentDidMount(){
        // 请求的路径
        var url_api = 'http://c.3g.163.com/nc/article/'+ this.props.rowData.postid +'/full.html';

        // 发送请求
        fetch(url_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                // 处理json数据
                var allData = responseData[this.props.rowData.postid];
                // 取出body
                var bodyHtml = allData['body'];
                // 取出图片数据
                if(allData['img'].length > 0){
                    for(var i=0;i<allData['img'].length;i++){
                        // 取出单个图片对象
                        var img = allData['img'][i];
                        // 取出图片的src
                        var imgsrc = img['src'];
                        // 拼接html
                        var imgHtml = '<img src="'+imgsrc+'" width="100%"/>';
                        // 替换body中的图像占位符
                        bodyHtml = bodyHtml.replace(img['ref'],imgHtml);
                    }
                }

                // 更新状态机
                this.setState({
                    datailData:bodyHtml,
                });
            })
            .catch((error)=>{
                console.log('请求数据失败');
            })
    },
});

const styles = StyleSheet.create({
});

// 输出类
module.exports = NewsDetail;
