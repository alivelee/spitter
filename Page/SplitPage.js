'use strict';

import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class SplitPage extends Component {
  render() {
    var navigator = this.props.navigator;
    return (
      <View style={{backgroundColor: '#C8C8C4', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
            placeholder="multiline text input with font styles and placeholder"
            multiline={true}
            clearTextOnFocus={true}
            autoCorrect={true}
            autoCapitalize="words"
            placeholderTextColor="red"
            keyboardType="url"
            style={[styles.multiline, styles.multilineWithFontStyles]}
          />
        <TouchableOpacity
          onPress={() => navigator.pop()}>
          <Text style={{color: 'yellow'}}>TextInput</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  multiline: {
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    height: 50,
    padding: 4,
    marginBottom: 4,
  },
  multilineStyle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
  }
});
module.exports = SplitPage;
