/**
 * 我的
 */
import React, {Component} from 'react';
import {
  Button,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';
 
import {
  DrawerNavigator
} from 'react-navigation';

// 引入 侧滑菜单组件 (通知页)
import MyNotificationsScreen from './MyNotificationsScreen';

// 定义 我的组件
class MinePage extends Component{
  // 定义抽屉子组件样式
  static navigationOptions = {
    title:'我的',
    drawerLabel: '我的',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./image/chat.png')}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };
  
  // 组件加载完成
  componentDidMount() {
    // 获取传值 {this.props.navigation.state.params.info}
    // const {params} = this.props.navigation.state;
    // const user = params.user;
    // alert(user);
  }

  render(){;
    return(
      <View style={styles.container}>
        <Text style={{padding:20}}>Sybil</Text>
        <Button
          style={{padding:20}}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="点击打开侧滑菜单"
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  tabIcon: {
    width: 16,
    height: 16,
  },
});
 
/**
 * 注册抽屉 (侧滑菜单)
 * DrawerNavigator(RouteConfigs, DrawerNavigatorConfig)
 * 参数1：抽屉包含的子组件
 * 参数2：抽屉的样式
 */
const MyDrawerNavigator = DrawerNavigator(
  {
    Mine: {
      screen: MinePage,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  },
  {
    drawerWidth: 200, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
      initialRouteName: MinePage, // 默认页面组件
      activeTintColor: '#008AC9',  // 选中文字颜色
      activeBackgroundColor: '#f5f5f5', // 选中背景颜色
      inactiveTintColor: '#000',  // 未选中文字颜色
      inactiveBackgroundColor: '#fff', // 未选中背景颜色
      style: {  // 样式
 
      }
    }
  }
);

// 默认向外暴露 '我的抽屉' 组件
export default MyDrawerNavigator;