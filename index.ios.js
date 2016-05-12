/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';
import PersonPage from './Page/single';
import SplashPage from './Page/SplashPage';
import LoginPage from './Page/LoginPage';
import MainPage from './Page/MainPage';
import NoNavigatorPage from './Page/NoNavigatorPage';
import SideMenu from 'react-native-side-menu';
import SplitPage from './Page/SplitPage';
import DiscussionPage from './Page/DiscussionPage';
import ListenerPage from './Page/ListenerPage';
import WatchPage from './Page/WatchPage';
class spitter extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'SplashPage',name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.PushFromRight;
          }}
          />
      );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'SplitPage') {
      return (
        <SplitPage
          navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
            navigator={navigator} />
      );
    }
    if (routeId === 'PersonPage') {
      return (
        <PersonPage
          navigator={navigator} />
      );
    }
    if (routeId === 'DiscussionPage') {
      return (
        <DiscussionPage
          navigator={navigator} />
      );
    }
    if (routeId === 'ListenerPage') {
      return (
        <ListenerPage
          navigator={navigator} />
      );
    }
    if (routeId === 'WatchPage') {
      return (
        <WatchPage
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>Null</Text>
        </TouchableOpacity>
      </View>
    );
  }

}
AppRegistry.registerComponent('spitter', () => spitter);
