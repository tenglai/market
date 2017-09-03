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
    Image,
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
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Image source={{uri:'back'}} style={styles.navbarLeftItemStyle} />
                    <Text>返回</Text>
                </View>
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
                    style={styles.webViewStyle}                   // 样式
                    source={{uri:this.props.url, method: 'GET' }} // 路径(uri:路径,method:请求方式)
                    javaScriptEnabled={true}                      // 安卓平台允许javascript
                    domStorageEnabled={true}                      // 安卓平台允许DOM本地存储
                    scalesPageToFit={false}                       // 不允许网页缩放或用户改变缩放
                />
            </View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },

    navbarLeftItemStyle: {
        width:20,
        height:20,
        marginLeft:15,
    },

    webViewStyle: {
        flex: 1
    }
});