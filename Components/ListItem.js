'use strict';
import React,{Component} from 'react';
import { StyleSheet,View, TouchableHighlight, Text } from 'react-native';

class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.title}</Text>
          <Text style={styles.liText}>{this.props.item.post}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
});
module.exports = ListItem;
