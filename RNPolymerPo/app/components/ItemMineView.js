/**
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  StyleSheet,
} from 'react-native';
/**
 * 个人中心Item View
 */
export default class ItemMineView extends Component {
  static propTypes = {
      name: React.PropTypes.string.isRequired,
      itemClicked: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.itemContainer}>
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={this.props.itemClicked.bind(null)}>
            <View style={styles.pressItemContainer}>
                <Text style={styles.pressItemText}>{this.props.name}</Text>
                <Image source={require('./../res/ic_arrow_right.png')}
                    style={styles.pressItemImg}/>
            </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
  },

  pressItemContainer: {
    padding: 10,
    justifyContent:'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  pressItemText: {
    fontSize: 16,
  },

  pressItemImg: {
    width: 20,
    height: 20,
  },
});
