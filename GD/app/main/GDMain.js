/**
 * 主页面
 * 通过此文件连接其他文件
 */
import React, { Component } from 'react';
import {
  	StyleSheet,
  	Text,
  	View,
  	Image,
  	Platform
} from 'react-native';

// tab组件(第三方框架)
import TabNavigator from 'react-native-tab-navigator';
// 导航器
import CustomerComponents, { Navigator } from 'react-native-deprecated-custom-components';

// 引入其他组件
import Home from '../home/GDHome';
import HT from '../ht/GDHt';
import HourList from '../hourList/GDHourList';

export default class GD extends Component {
    // ES6
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:'home',
        };
    }

    // 返回TabBar的Item
    renderTabBarItem(title, selectedTab, image, selectedImage, component) {
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                selectedTitleStyle={{color:'black'}}
                renderIcon={() => <Image source={{uri:image}} style={styles.tabbarIconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:selectedImage}} style={styles.tabbarIconStyle} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                // 添加导航功能
                <Navigator
                    // 设置路由
                    initialRoute={{
                        name:selectedTab,  // 方便外围获取的唯一的名称
                        component:component  // 需要跳转的控制器
                    }}

                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }}
                />
            </TabNavigator.Item>
        );
    }

    render() {
        return (
            <View>
                <Text>123</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabbarIconStyle: {
        width:Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25,
    }
});