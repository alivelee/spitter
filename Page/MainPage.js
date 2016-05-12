'use strict';
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import Button from 'react-native-button';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
class ContentView extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
              routeMapper={NavigationBarRouteMapper}
            />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View style={[styles.firstColor,styles.firstStyle]}>
            <TouchableHighlight
            style={styles.firstStyle}
            activeOpacity={1}
            animationVelocity={0}
            underlayColor="#FFEB3B"
            onPress={this.gotoDiscussionPage.bind(this)}>
              <View style={styles.innerFirstTextStyle}>
                <Text style={styles.FirstText}>
                  1
                </Text>
              </View>
          </TouchableHighlight>
          </View>
          <View style={[styles.secondStyle,styles.secondColor]}>
            <TouchableHighlight
            style={styles.secondStyle}
            activeOpacity={1}
            animationVelocity={0}
            underlayColor="#FFEB3B"
            onPress={this.gotoListenerPage.bind(this)}>
              <View style={styles.innerFirstTextStyle}>
                <Text style={styles.text}>
                2
                </Text>
              </View>
          </TouchableHighlight>
          </View>
          <View style={styles.thirdStyle}>
          <TouchableHighlight
          style={styles.thirdStyle}
          activeOpacity={1}
          animationVelocity={0}
          underlayColor="#FFEB3B"
          onPress={this.gotoWatchPage.bind(this)}>
            <View style={styles.innerFirstTextStyle}>
              <Text style={styles.text}>
                3
              </Text>
            </View>
        </TouchableHighlight>
          </View>
        {/*<View style={styles.quarterHeight}>
          <TouchableHighlight
            style={styles.quarterHeight}
            activeOpacity={1}
            animationVelocity={0}
            underlayColor="#FFEB3B"
            onPress={this.gotoSplitPage.bind(this)}>
              <View style={styles.innerFirstTextStyle}>
                <Text style={styles.text}>
                  4
                </Text>
              </View>
          </TouchableHighlight>
        </View>*/}
          <Button
          onPress={this.gotoSplitPage.bind(this)}
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'black'}}
          style={{fontSize: 20, color: 'green'}}
          ></Button>
        </View>
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
  gotoDiscussionPage() {
    this.props.navigator.push({
      id:'DiscussionPage',
      name: 'DiscussionPage',
      sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
    });
  }
  gotoListenerPage() {
    this.props.navigator.push({
      id:'ListenerPage',
      name: 'ListenerPage',
      sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
    });
  }
  gotoWatchPage() {
    this.props.navigator.push({
      id:'WatchPage',
      name: 'WatchPage',
      sceneConfig: Navigator.SceneConfigs.HorizontalSwipeJump
    });
  }
}
class MainPage extends Component {
  state = {
    isOpen: false,
    selectedItem: 'About',
  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }
  render() {
    const menu = <Menu navigator={this.props.navigator}
                       onItemSelected={this.onMenuItemSelected}
                  />;
    return (
              <SideMenu menu={menu}
                        isOpen={this.state.isOpen}
                        onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <ContentView navigator={this.props.navigator}/>
              </SideMenu>
        );
  }
}
var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      null
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          主页
        </Text>
      </TouchableOpacity>
    );
  }
};
const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column'
    },
    thirdStyle: {
        flex: 1
    },
    firstColor: {
      backgroundColor:'#9C27B0'
    },
    firstStyle: {
      flex: 3
    },
    secondStyle: {
      flex: 2
    },
    secondColor: {
      backgroundColor:'#7B1FA2'
    },

    innerFirstTextStyle: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    FirstText: {
      paddingTop: 50,
    }
});
module.exports = MainPage;
