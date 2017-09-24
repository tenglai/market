/**
 * 启动页面
 */
import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
} from 'react-native';

// 引入主页面
import Main from '../pages/Main/Main';

export default class Launch extends Component {

	componentDidMount() {
        setTimeout(() => {
            this.props.navigator.replace({
                component:Main
            })
        }, 1500)
    }

  	render() {
    	return (
      		<Image source={{uri:'launchimage'}} style={styles.imageStyle} />
    	);
  	}
}

const styles = StyleSheet.create({
    imageStyle:{
        flex:1,
    }
});
