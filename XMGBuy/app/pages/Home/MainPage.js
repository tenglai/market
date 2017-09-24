/**
 * 首页
 */
import React, { Component } from 'react';
import {
  Button,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';
 
export default class MainPage extends Component {
  static navigationOptions = {
    title:'首页', // 顶部标题

  };

  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>  
        <Text onPress={() =>{
          navigate('Chat',{user:'Sybil'})
        }}>点击跳转到'聊天页面'</Text>  
      </View>
    );  
  }  

  _skip() {
    /**
     * 页面跳转并传值 
     * 参数1：页面名称
     * 参数2：传的值
     * <Text onPress={this._skip.bind(this)}>点击跳转到'我的页面'</Text>  
     */
    // this.props.navigation.navigate('Chat',{user:'Sybil'}); 
  }  
}

// 层叠样式表
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});