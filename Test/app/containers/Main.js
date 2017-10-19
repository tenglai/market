import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
 
export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* 需要改变的组件 */}
 
                {/* 按钮 */}
                <TouchableOpacity>
                    <Text>改变文字按钮</Text>
                </TouchableOpacity>
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
});