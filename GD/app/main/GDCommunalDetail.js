/**
 * 详情页
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    WebView,
    View,
    Text,
    TouchableOpacity,
    DeviceEventEmitter,
} from 'react-native';

// 导航器
import CustomerComponents, {
    Navigator
} from 'react-native-deprecated-custom-components';

// 引入自定义导航栏组件
import CommunalNavBar from './GDCommunalNavBar';

export default class GDCommunalDetail extends Component {
	
	// 创建属性,便于外部传值使用
	static propTypes = {
        uri:PropTypes.string,
    };

    // 返回
    pop() {
        this.props.navigator.pop();
    }

    // 返回左边按钮
    renderLeftItem() {
        return(
            <TouchableOpacity
                onPress={() => {this.pop()}}
            >
                <Text>返回</Text>
            </TouchableOpacity>
        );
    }

    componentWillMount() {
        // 向GDMain.js 发送通知 隐藏tabBar
        DeviceEventEmitter.emit('isHiddenTabBar', true);
    }

    componentWillUnmount() {
        // 向GDMain.js 发送通知 显示tabBar
        DeviceEventEmitter.emit('isHiddenTabBar', false);
    }

	render() {
		return(
			<View style={styles.container}>
                {/* 导航栏 */}
                <CommunalNavBar
                    leftItem = {() => this.renderLeftItem()}
                />

                {/* 初始化WebView */}
                <WebView
                    style={styles.webViewStyle}
                    source={{uri:this.props.url, method: 'GET' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                />
            </View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },

    webViewStyle: {
        flex: 1
    }
});