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
} from 'react-native';
/**
 * 新闻Item View
 */
export default class ItemOnLineNewsView extends Component {
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
            source={{uri: (this.props.bean.thumbnail_pic_s=='' ? 'defaults' : this.props.bean.thumbnail_pic_s)}}/>
          <View style={styles.itemDescription}>
            <Text style={styles.itemTitle} 
              numberOfLines={4}>
              {this.props.bean.title}
            </Text>
            <Text style={styles.fromText} 
              numberOfLines={1}>
              {this.props.bean.author_name}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    marginVertical: 4,
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
    height: 113,
    flexDirection: 'row'
  },

  itemIcon: {
    width: 163,
    height: 113,
    backgroundColor: '#e9e9e9',
  },

  itemDescription: {
    flex: 1,
    marginLeft: 8,
    marginTop: 12,
    marginRight: 8,
    marginBottom: 8,
  },

  itemTitle: {
    flex: 5,
    color: '#535252',
    fontSize: 14,
  },

  fromText: {
    flex: 1,
    fontSize: 9,
    color: '#ff9800',
    alignSelf: 'flex-end',
  },
});
