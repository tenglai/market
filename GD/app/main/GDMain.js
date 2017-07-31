/**
 * 通过main连接其他的文件,即从main组件调用其他的组件
 */
import React, { Component } from 'react';
import {
  	StyleSheet,
  	Text,
  	View,
  	Image,
} from 'react-native';

// npm install react-native-deprecated-custom-components --save
import CustomerComponents, { Navigator } from 'react-native-deprecated-custom-components';

// 使用TabBar作为根控制器  引入第三方框架
import TabNavigator from 'react-native-tab-navigator';

// 引入其他组件
import Home from '../home/GDHome';
import HT from '../ht/GDHt';
import HourList from '../hourList/GDHourList';

export default class GD extends Component {
	// ES6 构造函数
	constructor(props) {
		// super需要放在最前面
	  	super(props);
	  	// 初始化状态
	  	this.state = {
	  		// 默认为home页面
	  		selectedTab:'home'
	  	};
	}

	// 定义renderTabBarItem方法,将tab抽离出一个模板,避免代码冗余
	// 返回TabBar的Item
	renderTabBarItem(title, selectedTab, image, selectedImage, component) {
		return(
			<TabNavigator.Item
				selected={this.state.selectedTab === selectedTab}
				title={title}
				renderIcon={() => <Image source={{uri:image}} style={styles.tabbarIconStyle} />}
				renderSelectedIcon={() => <Image source={{uri:selectedImage}} style={styles.tabbarIconStyle} />}
				badgeText="1"
				onPress={() => this.setState({ selectedTab: selectedTab })}>
				{/*使用navigator导航*/}
				<Navigator
					initialRoute={{
						// 配置路由
						name:selectedTab,
						component:component
					}}
					// 返回该组件显示的内容
					renderScene={(route, navigator) => {
						let Component = route.component;
						return <Component {...route.params} navigator={navigator} />
					}}
				/>
			</TabNavigator.Item>
		);
	}

  	render() {
    	return (
    		<TabNavigator>
    			{/* 首页 */}
                {this.renderTabBarItem("首页", 'home', 'tabbar_home_30x30', 'tabbar_home_selected_30x30', Home)}
                {/* 海淘 */}
                {this.renderTabBarItem("海淘", 'ht', 'tabbar_abroad_30x30', 'tabbar_abroad_selected_30x30', HT)}
                {/* 小时风云榜 */}
                {this.renderTabBarItem("小时风云榜", 'hourlist', 'tabbar_rank_30x30', 'tabbar_rank_selected_30x30', HourList)}
			</TabNavigator>
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
    tabbarIconStyle: {
        width:Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25,
    }
});
