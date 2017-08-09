/**
 * android
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// 引用外部组件
var Main = require('./Component/Main');

class NewsDemo extends Component {
  render() {
    return (
        <Main />
        // <View>
        //   <Text>123</Text>
        // </View>
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
});

AppRegistry.registerComponent('NewsDemo', () => NewsDemo);
