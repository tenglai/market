/**
 * index.android.js 入口文件
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
  第一部分

  导入ReactNative包,导入ReactNative组件
  AppRegistry: JS运行所有ReactNative应用的入口。
  StyleSheet：ReactNative中使用的样式表,类似CSS样式表
  各种开发中需要使用的组件

  模板中使用的是ES6语法,ES5语法如下：
  let React = require("react-native");
  let {
    AppRegistry,
    StyleSheet,
    Text,
    View
  } = React;
  
  require函数,搜索目录加载文件
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*
  第二部分

  创建ReactNative组件

  模板中使用的是ES6语法,
  render() {} 是ES6中的函数简写

  ES5语法如下：

  var Market = React.createClass({
    render:function(){
      return {};
    }
  });
*/

export default class Market extends Component { // 继承Market这个类
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

/*
  第三部分

  StyleSheet.create创建样式实例
  在应用中只会被创建一次,不用每次在渲染周期中重新创建
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/*
  第四部分

  注册入口组件

  AppRegistry：负责注册运行ReactNative应用程序的JavaScript入口
  registerComponent注册应用程序的入口组件。告知ReactNative哪一个组件被注册为应用的根容器

  第二个参数使用了ES6语法,箭头函数：
  () => Market
  返回的必须是定义的组件类的名字

  等价于
  function() {return Market}
*/

AppRegistry.registerComponent('Market', () => Market); // 注册
