/**
 * 主要框架 TabBar  Navigator
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

// TabBar组件 npm install react-native-tab-navigator --save
import TabNavigator from 'react-native-tab-navigator';

// 导入导航器
var Navigation = require("../Component/navigation");

// 引入外部组件
var Home = require('../Component/XMGHome');
var Find = require('../Component/XMGFind');
var Message = require('../Component/XMGMessage');
var Mine = require('../Component/XMGMine');

// 创建Main类
var Main = React.createClass({
  // 初始化方法
  getInitialState: function() {
    // 设置选择标识
    return {
      selectedTab: "home" // 默认首页选中 
    };
  },

  render() {
    return (
      <TabNavigator>
        {/*首页*/}
        <TabNavigator.Item
          //图标
          renderIcon={() => <Image style={styles.icon} source={require("../res/images/home.png")} />}
          //选中时图标
          renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'#2f8fe6'}]} source={require("../res/images/home.png")} />}
          // 标题
          title="首页"
          // 设置选中的位置
          selected={this.state.selectedTab=="home"}
          // 点击Event
          onPress={() => {
            this.setState({
              selectedTab:"home"
            })
          }}>
          <Navigation component={Home}/>
        </TabNavigator.Item>

        {/*消息*/}
        <TabNavigator.Item
          //图标
          renderIcon={() => <Image style={styles.icon} source={require("../res/images/message.png")} />}
          //选中时图标
          renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'#2f8fe6'}]} source={require("../res/images/message.png")} />}
          // 标题
          title="消息"
          // 设置选中的位置
          selected={this.state.selectedTab=="message"}
          // 点击Event
          onPress={() => {
            this.setState({
              selectedTab:"message"
            })
          }}>
          <Navigation component={Message}/>
        </TabNavigator.Item>

        {/*发现*/}
        <TabNavigator.Item
          //图标
          renderIcon={() => <Image style={styles.icon} source={require("../res/images/find.png")} />}
          //选中时图标
          renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'#2f8fe6'}]} source={require("../res/images/find.png")} />}
          // 标题
          title="发现"
          // 设置选中的位置
          selected={this.state.selectedTab=="find"}
          // 点击Event
          onPress={() => {
            this.setState({
              selectedTab:"find"
            })
          }}>
          <Navigation component={Find}/>
        </TabNavigator.Item>

        {/*我的*/}
        <TabNavigator.Item
          //图标
          renderIcon={() => <Image style={styles.icon} source={require("../res/images/mine.png")} />}
          //选中时图标
          renderSelectedIcon={() => <Image style={[styles.icon,{tintColor:'#2f8fe6'}]} source={require("../res/images/mine.png")} />}
          // 标题
          title="我的"
          // 设置选中的位置
          selected={this.state.selectedTab=="mine"}
          // 点击Event
          onPress={() => {
            this.setState({
              selectedTab:"mine"
            })
          }}>
          <Navigation component={Mine}/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
});

// 类的样式
const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22
    }
});

// 输出类
module.exports = Main;
