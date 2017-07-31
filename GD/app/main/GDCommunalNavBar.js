/**
 * 创建通用导航栏
 */
import React, { Component, PropTypes } from 'react';
import {
  	StyleSheet,
  	Text,
  	View,
    Dimensions,  // 用于获取设备屏幕尺寸
    Platform, // 用于判断运行平台 便于设置不同样式(ios包含20px的状态栏,android则不包含)
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class GDCommunalNavBar extends Component {
  // 提供属性,便于外部调用
  static propTypes = {
    leftItem:PropTypes.func,
    titleItem:PropTypes.func,
    rightItem:PropTypes.func,
  };

  // 提供方法,判断是否应该创建
  // 左边
  renderLeftItem(){
    // 判断是否有值,如果没有值,就直接return,如果有值,就调用该方法
    if(this.props.leftItem === undefined) return;
    return this.props.leftItem();
  }

  // 中间
  renderTitleItem(){
    if (this.props.titleItem === undefined) return;
    return this.props.titleItem();
  }

  // 右边
  renderRightItem(){
    if (this.props.rightItem === undefined) return;
    return this.props.rightItem();
  }

	// render 返回该组件显示的内容
	render() {
  	return (
  		<View style={styles.container}>
        {/* 左边 */}
        <View>
          {/*调用方法*/}
          {this.renderLeftItem()}
        </View>
        {/* 中间 */}
        <View>
          {this.renderTitleItem()}
        </View>
        {/* 右边 */}
        <View>
          {this.renderRightItem()}
        </View>
  		</View>
  	);
	}
}

const styles = StyleSheet.create({
	container: {
		width:width,
    height:Platform.OS === 'ios' ? 64 : 44,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomWidth:0.5,
    borderBottomColor:'gray',
    paddingTop:Platform.OS === 'ios' ? 15 : 0,
	},
});
