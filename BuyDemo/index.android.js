/**
 * android
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text, 
} from 'react-native';

/*==============导入外部组件================*/
import CustomerComponents, { Navigator } from 'react-native-deprecated-custom-components';
var LaunchImage = require('./Component/Main/LaunchImage');

class BuyDemo extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: '启动页', component:LaunchImage}}
                renderScene={(route, navigator) =>{
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator} />
                }}
            />
            // <View>
            //     <Text>123</Text>
            // </View>
        );
    }
}

AppRegistry.registerComponent('BuyDemo', () => BuyDemo);
