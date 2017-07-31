/**
 * 首页
 */
import React, { Component } from 'react';
import {
  	StyleSheet,
  	Text,
  	View,
    TouchableOpacity, // 让组件拥有点击事件和反应
    Image,
} from 'react-native';

// 引入通用导航栏,并传值创建导航
import CommunalNavBar from '../main/GDCommunalNavBar';

export default class GDHome extends Component {
  // 返回左边按钮
  renderLeftItem(){
    // 每个组件都需要通过return返回
    return(
      <TouchableOpacity>
        <Image source={{uri:'hot_icon_20x20'}} style={styles.navbarLeftItemStyle} />
      </TouchableOpacity>
    );
  }
  // 返回中间按钮
  renderTitleItem(){
    return(
      <TouchableOpacity>
        <Image source={{uri:'navtitle_home_down_66x20'}} style={styles.navbarTitleItemStyle} />
      </TouchableOpacity>
    );
  }
  // 返回右边按钮
  renderRightItem(){
    return(
      <TouchableOpacity>
        <Image source={{uri:'search_icon_20x20'}} style={styles.navbarRightItemStyle} />
      </TouchableOpacity>
    );
  }

	// render 返回该组件显示的内容
	render() {
  	return (
  		<View style={styles.container}>
        {/* 设置导航栏样式 */}
        <CommunalNavBar
          leftItem = {() => this.renderLeftItem()}
          titleItem = {() => this.renderTitleItem()}
          rightItem = {() => this.renderRightItem()}
        />
  		</View>
  	);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'green',
	},
  navbarLeftItemStyle: {
    width:20,
    height:20,
    marginLeft:15,
  },
  navbarTitleItemStyle: {
    width:66,
    height:20,
  },
  navbarRightItemStyle: {
    width:20,
    height:20,
    marginRight:15,
  }
});

