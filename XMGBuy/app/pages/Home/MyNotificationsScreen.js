/**
 * 侧滑菜单
 * 通知页
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';


// 定义 通知组件
export default class MyNotificationsScreen extends Component {
    // 定义抽屉子组件样式
    static navigationOptions = {
        title:'通知',
        drawerLabel: '通知',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./image/notif.png')}
                style={[styles.tabIcon, {tintColor: tintColor}]}
            />
        ),
    };
 
    render() {
        return (
             <View style={styles.container}>
                <Button
                    style={{padding:20}}
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="点击打开侧滑菜单"
                />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="返回我的界面"
                />
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
    },
    tabIcon: {
        width: 16,
        height: 16,
    },
});