'use strict';

import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Navigator,
} from 'react-native';

import Button from 'react-native-button';
class WatchPage extends Component {
  render() {
    var navigator = this.props.navigator;
    return (
      <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => navigator.pop()}>
          <Text style={{color: 'yellow'}}>Watch</Text>
        </TouchableOpacity>
        <Button
        onPress={this.gotoSplitPage.bind(this)}
        containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'black'}}
        style={{fontSize: 20, color: 'green'}}
        ></Button>
      </View>
    );
  }
  gotoSplitPage() {
    this.props.navigator.push({
      id:'SplitPage',
      name: 'SplitPage',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom
    });
  }
}

module.exports = WatchPage;
