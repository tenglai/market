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

/*==============导入外部组件================*/
import CustomerComponents, { Navigator } from 'react-native-deprecated-custom-components';
var LaunchImage = require('./Component/Main/LaunchImage');

class BuyDemo extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{name: '启动页', component:LaunchImage}}
            // configureScene={()=>{
            //                 return Navigator.SceneConfigs.PushFromRight;
            //             }}
            renderScene={(route, navigator) =>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />
                        }}
        />
    );
  }

}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('BuyDemo', () => BuyDemo);

