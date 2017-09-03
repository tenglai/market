/**
 * 公共导航组件
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

// 导航器
import CustomerComponents, {
    Navigator
} from 'react-native-deprecated-custom-components';

const styles = StyleSheet.create({

});

let NavigationBarRouteMapper = {

	// 左边按钮
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <TouchableOpacity
                    onPress={() => navigator.pop()}
                >
                    <Text>返回</Text>
                </TouchableOpacity>
            )
        }
    },

    // 右边按钮
    RightButton(route, navigator, index, navState) {

    },

    // 中间标签
    Title(route, navigator, index, navState) {
        return(
            <Text>{route.name}</Text>
        )
    },
};

export default (
    <Navigator.NavigationBar
        style={{backgroundColor:'green'}}
        routeMapper={NavigationBarRouteMapper}
    />
)