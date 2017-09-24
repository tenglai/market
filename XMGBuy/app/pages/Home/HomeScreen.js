/**
 * 主页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
} from 'react-native';

// 引入 导航组件
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
} from 'react-navigation';

// TabBar 子组件
import TabBarItem from './TabBarItem';

// 引入 其他组件
import MainScreen from './MainPage';  
import MineScreen from './MinePage';
import ChatScreen from './ChatScreen';
 
export default class HomeScreen extends Component {
    // 渲染页面
    render() {
        return (
            <Navigator />
        )
    }
}

/**
 * TabNavigator Tab选项卡
 * TabNavigator(RouteConfigs, TabNavigatorConfig)
 * 参数1：表示各个页面路由配置
 * 参数2：tab属性配置
 */
// 注册tabs (底部选项卡)
const Tab = TabNavigator(  
    {  
        Main:{  
            screen:MainScreen, // 对应界面名称，可以在其他页面通过这个screen传值和跳转。
            navigationOptions:({navigation}) => ({ // 配置TabNavigator的一些属性
                tabBarLabel:'首页', // 设置标签栏的title
                tabBarIcon:({focused,tintColor}) => ( // 设置标签栏的图标。需要给每个都设置  
                    <TabBarItem  
                        tintColor={tintColor}  
                        focused={focused}  
                        normalImage={require('./image/home.png')}  
                        selectedImage={require('./image/home.png')}
                    />  
                )  
            }),  
        },  
  
        Mine:{  
            screen:MineScreen,  
            navigationOptions:({navigation}) => ({  
                tabBarLabel:'我的',  
                tabBarIcon:({focused,tintColor}) => (  
                    <TabBarItem  
                        tintColor={tintColor}  
                        focused={focused}  
                        normalImage={require('./image/mine.png')}  
                        selectedImage={require('./image/mine.png')}  
                    />  
                )  
            }),  
        },  
    },
    {  
        tabBarComponent:TabBarBottom, // 导航器 组件
        tabBarPosition:'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled:false, // 禁止左右滑动
        animationEnabled:false, // 切换页面时不显示动画
        lazy:true, // 懒加载
        tabBarOptions:{  
            activeTintColor:'#06c1ae', // 文字和图片选中颜色
            inactiveTintColor:'#979797', // 文字和图片默认颜色
            indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
            style:{
                backgroundColor:'#ffffff', // TabBar 背景色
            },  
            labelStyle: {  
                fontSize: 12, // 文字大小  
            },  
        }  
    }  
); 

/**
 * 注册导航
 */
const Navigator = StackNavigator(
    {  
        Tab:{screen:Tab},
        Chat:{screen:ChatScreen},
    },    
    {  
        initialRouteName:'Tab', // 默认显示页面
        navigationOptions:{
            // header:null, // 可以设置一些导航的属性，如果隐藏顶部导航栏只要将这个属性设置为null
            headerBackTitle: null, // 设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。
            headerTitleStyle: {fontSize:18, color:'#666666',alignSelf:'center'}, // 设置alignSelf:'center' 文字居中
            headerStyle: {height:48, backgroundColor:'#00BFFF'},
        },  
        mode:'card', // 使用iOS和安卓默认的风格
    }
);