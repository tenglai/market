/**
 * 主页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,  //判断当前运行的系统
} from 'react-native';

/*=============导入外部组件类==============*/
import TabNavigator from 'react-native-tab-navigator';
import CustomerComponents, { Navigator } from 'react-native-deprecated-custom-components';

// 引入外部的组件(此处注意是相当于了项目根目录)
var Home = require('../Component/Home');
var Message = require('../Component/Message');
var Find = require('../Component/Find');
var Mine = require('../Component/Mine');

// ES5
var Main = React.createClass({
    // 初始化函数(变量是可以改变的,充当状态机的角色)
    getInitialState(){
        return{
            selectedTab:'home' // 默认选中的tabBar
        }
    },

    render() {
        return (
            <TabNavigator>
                {/*--首页--*/}
                {this.renderTabBarItem('首页','icon_tabbar_home','icon_tabbar_home_selected','home','首页',Home,1)}
                {/*--消息--*/}
                {this.renderTabBarItem('消息','icon_tabbar_message','icon_tabbar_message_selected','message','消息',Message,2)}
                {/*--发现--*/}
                {this.renderTabBarItem('发现','icon_tabbar_find','icon_tabbar_find_selected','find','发现',Find)}
                {/*--我的--*/}
                {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
            </TabNavigator>
        );
    },

    // 封装tabBarItem
    renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName,component,badgeText){
        return(
            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={{uri:iconName}} style={styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:selectedIconName}} style={styles.iconStyle} />}
                selected={this.state.selectedTab === selectedTab}
                onPress={() => this.setState({ selectedTab: selectedTab })}
                selectedTitleStyle={styles.selectedTitleStyle} //tabBarItem选中的文字样式
                badgeText={badgeText}
            >
                <Navigator
                    initialRoute={{name: componentName, component:component}}
                    configureScene={()=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                    renderScene={(route, navigator) =>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />
                        }}
                />
            </TabNavigator.Item>
        )
    }
});

const styles = StyleSheet.create({
    // icon默认样式
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25,
    },
    // tabBarItem选中的文字样式
    selectedTitleStyle:{
        color: 'rgba(212,97,0,1)',
    }
});

// 输出
module.exports = Main;
