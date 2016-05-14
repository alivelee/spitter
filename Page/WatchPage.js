'use strict';

import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Navigator,
  ListView
} from 'react-native';

import ListItem from '../Components/ListItem';
import Button from 'react-native-button';
class WatchPage extends Component {
  render() {
    var navigator = this.props.navigator;
    return (
      <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listview}/>
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

const styles = StyleSheet.create({
  listview:{
    flex:1
  }
});
module.exports = WatchPage;
