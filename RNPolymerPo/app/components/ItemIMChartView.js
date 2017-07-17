/**
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
/**
 * IM 对话机器人聊天Item View
 */
export default class ItemIMChartView extends Component {
  static propTypes = {
    bean: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={this.props.bean.isUser == true ? styles.itemUserContainer : styles.itemRobotContainer}>
        <Image
          source={this.props.bean.isUser == true ? null : require('./../res/customer_service.png')}
          style={this.props.bean.isUser == true ? null : styles.robotImg}
        />
        <View style={this.props.bean.isUser == true ? styles.userContentContainer : styles.robotContentContainer}>
          <Text style={ styles.contentText }>
              {this.props.bean.text}
          </Text>
        </View>
        <Image
          source={this.props.bean.isUser == true ? require('./../res/icon_auther.jpg') : null}
          style={this.props.bean.isUser ==true ? styles.userImg : null}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemUserContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 45,
  },

  itemRobotContainer: {
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    marginRight: 45,
  },

  robotImg: {
    height: 40,
    width: 40,
    marginLeft: 5,
    marginBottom: 10
  },

  userImg: {
    height: 40,
    width: 40,
    marginRight: 5,
    marginBottom: 10
  },

  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  robotContentContainer: {
    alignItems: 'center',
    backgroundColor: '#c8e6c9',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 55,
    marginBottom: 10
  },

  userContentContainer: {
    alignItems: 'center',
    backgroundColor: '#b2ebf2',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    borderRadius:10,
    marginLeft:55,
    marginRight:5,
    marginBottom:10
  },
});
