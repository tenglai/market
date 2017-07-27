import React, { Component } from 'react';
import {
	AppState,
	StyleSheet,
	View,
	Navigator,
	Text
} from 'react-native';

// 导入Index
import Index from './pages/Index';

// 设置初始路由
const INITIAL_ROUTE = {
	component: Index,
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		paddingTop: 20, // ios 默认从顶端开始,包含了状态栏,通过padding将内容移下
	},
});

export default class App extends Component {
	renderScene = (root, navigator) => {
		// 从route中取出component参数
		const Comp = route.component;
		// 将页面渲染成组件 注：标签需要以大写字母开头 传递navigator和route
		return (
			<Comp navigator={navigator} route={route} />
		)；
	};
	render() {
		return (
			<View>
				<Text style={styles.text}>这里首页</Text>
				<Navigator
					initialRoute={INITIAL_ROUTE}
					renderScene={this.renderScene}
				/>
			</View>
		);
	}
}