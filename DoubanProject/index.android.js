/**
 * index.android.js 入口文件
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// icon={require("image!book")}
// icon={require("image!movie")}

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

// 导入导航器
var Navigation = require("./android_views/common/navigation");
// 导入BookList
var BookList = require("./android_views/book/book_list");
// 导入MovieList
var MovieList = require("./android_views/movie/movie_list");

// tab组件
import TabNavigator from 'react-native-tab-navigator';

// 隐藏状态栏
StatusBar.setHidden(true);

// TabNavigator管理两个模块：图书、电影
var DoubanProject = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: "图书"
    };
  },
  render: function() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          // 标题
          title="图书"
          // 设置选中的位置
          selected={this.state.selectedTab=="图书"}
          // 点击Event
          onPress={() => {
            this.setState({
              selectedTab:"图书"
            })
          }}
          //图标
          renderIcon={() => <Image style={styles.icon} source={require("./res/images/book.png")} />}
          //选中时图标
          renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'#2f8fe6'}]} source={require("./res/images/book.png")} />}>
          <Navigation component={BookList}/>
        </TabNavigator.Item>
          
        <TabNavigator.Item
          // 标题
          title="电影"
          // 设置选中的位置
          selected={this.state.selectedTab=="电影"}
          // 点击Event
          onPress={() => {
            this.setState({
              selectedTab:"电影"
            })
          }}
          //图标
          renderIcon={() => <Image style={styles.icon} source={require("./res/images/movie.png")} />}
          //选中时图标
          renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'#2f8fe6'}]} source={require("./res/images/movie.png")} />}>
          <Navigation component={MovieList}/>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
});

const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22
    }
});

AppRegistry.registerComponent('DoubanProject', () => DoubanProject);