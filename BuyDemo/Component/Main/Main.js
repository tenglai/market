/**
 * 主页面
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,  //判断当前运行的系统
} from 'react-native';

/*=============导入外部组件类==============*/
import TabNavigator from 'react-native-tab-navigator';
import CustomerComponents, { Navigator } from 'react-native-deprecated-custom-components';

var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');

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
                {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home,1)}
                {/*--商家--*/}
                {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop,2)}
                {/*--我的--*/}
                {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
                {/*--更多--*/}
                {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}
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
