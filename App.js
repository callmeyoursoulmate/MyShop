/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Tabs, Stack } from 'react-native-router-flux';
import IconAwsome from 'react-native-vector-icons/FontAwesome';

import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import Screen3 from './src/Screen3';
import Screen4 from './src/Screen4';
import Screen5 from './src/Screen5';
import Screen6 from './src/Screen6';
import TabIcon from './src/tab/TabIcon';
export default class App extends Component {
  render() {
    return (

      // <Screen1 />
      // <Screen2 />
      // <Screen3 />
      // <Screen4 />
      // <Screen5 />
      // <Screen6 />


      <Router>
        <Scene key="root" hideNavBar={true} >
          <Tabs
            key="tabbar"
            routeName="tabbar"
            backToInitial
            showLabel={true}
            tabBarStyle={styles.tabBarStyle}
            activeBackgroundColor="white"
            showLabel={false}
            inactiveBackgroundColor="#dcdcdc"
          >
            <Scene key="Screen1" component={Screen1} title="HOME" icon={TabIcon} iconName={"home"} hideNavBar={true} />
            <Scene key="Screen2" component={Screen2} title="MOBILE" icon={TabIcon} iconName={"mobile"} initial={true} hideNavBar={true} />
            <Scene key="Screen3" component={Screen3} title="BALLOT" icon={TabIcon} iconName={"check"} hideNavBar={true} />
            <Scene key="Screen4" component={Screen4} title="EYE" icon={TabIcon} iconName={"bullseye"} hideNavBar={true} />
            <Scene key="Screen5" component={Screen5} title="BELL" icon={TabIcon} iconName={"bell"} hideNavBar={true} />
          </Tabs>


          {/* <Scene key="Screen1" component={Screen1} title="Screen1"/> */}
          {/* <Scene key="Screen5" component={Screen5} title="Screen5" initial={true} hideNavBar={true}/> */}
          <Scene key="Screen6" component={Screen6} title="Screen6" />
        </Scene>
      </Router>
    );
  }

}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#eee',
  },
})
