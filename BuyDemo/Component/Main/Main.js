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
    Platform  //判断当前运行的系统
} from 'react-native';

/*=============导入外部组件类==============*/
import TabNavigator from 'react-native-tab-navigator';

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
                <TabNavigator.Item
                    title="首页"
                    renderIcon={() => <Image source={{uri:'tabbar_abroad_30x30'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'tabbar_abroad_selected_30x30'}} style={styles.selectedIconStyle} />}
                    badgeText="1"
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => this.setState({ selectedTab: 'home' })}
                >
                    <Home />
                </TabNavigator.Item>
                {/*--商家--*/}
                <TabNavigator.Item
                    title="商家"
                    renderIcon={() => <Image source={{uri:'tabbar_home_30x30'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'tabbar_home_selected_30x30'}} style={styles.selectedIconStyle} />}
                    badgeText="1"
                    selected={this.state.selectedTab === 'shop'}
                    onPress={() => this.setState({ selectedTab: 'shop' })}
                >
                    <Shop />
                </TabNavigator.Item>
                {/*--我的--*/}
                <TabNavigator.Item
                    title="我的"
                    renderIcon={() => <Image source={{uri:'tabbar_rank_30x30'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'tabbar_rank_selected_30x30'}} style={styles.selectedIconStyle} />}
                    badgeText="1"
                    selected={this.state.selectedTab === 'mine'}
                    onPress={() => this.setState({ selectedTab: 'mine' })}
                >
                    <Mine />
                </TabNavigator.Item>
                {/*--更多--*/}
                <TabNavigator.Item
                    title="更多"
                    renderIcon={() => <Image source={{uri:'tabbar_abroad_30x30'}} style={styles.iconStyle} />}
                    renderSelectedIcon={() => <Image source={{uri:'tabbar_abroad_selected_30x30'}} style={styles.selectedIconStyle} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'more' })}
                    selected={this.state.selectedTab === 'more'}
                >
                    <More />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
});

const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25,
    },
    selectedIconStyle:{
        width:Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25,
    },
});

// 输出
module.exports = Main;
