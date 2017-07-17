/**
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';

let {height, width} = Dimensions.get('window');

export default class ItemWeiXinNewsView extends Component {
  static propTypes = {
      bean: React.PropTypes.object.isRequired,
      itemClicked: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={this.props.itemClicked}>
        <View style={styles.itemContainer}>
          <Image style={styles.itemIcon} 
            source={{uri: this.props.bean.picUrl}}/>
          <View style={styles.itemDescription}>
            <Text style={styles.itemTitle} 
              numberOfLines={2}>
              {this.props.bean.title}
            </Text>
            <View style={styles.rowContainer}>
              <Text style={styles.ctime} 
                numberOfLines={1}>
                {this.props.bean.ctime}
              </Text>
              <Text style={styles.description} 
                numberOfLines={1}>
                {this.props.bean.description}
              </Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }

}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#f8f8ff',
    marginVertical: 4,
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
    width: 165,
    marginLeft: (width - 164 * 2) / 4, //(屏幕宽度-两个item宽度)/4=边缘margin
    marginRight: (width - 164 * 2) / 4,
  },

  itemIcon: {
    width: 163.5,
    height: 113,
    backgroundColor: '#e9e9e9',
  },

  itemDescription: {
    flex: 1,
    margin: 5,
  },

  rowContainer: {
    padding: 0,
    flex: 1,
    flexDirection: 'row',
  },

  itemTitle: {
    color: '#535252',
    fontSize: 14,
    flex: 1,
  },

  ctime: {
    flex: 1,
    textAlign: 'left',
    fontSize: 10,
  },

  description: {
    flex: 1,
    textAlign: 'right',
    fontSize: 10,
  },
});
