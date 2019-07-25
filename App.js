/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Tabs } from 'react-native-router-flux';

// src
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import Screen3 from './src/Screen3';
import Screen4 from './src/Screen4';
import Screen5 from './src/Screen5';
import Screen6 from './src/Screen6';
import Screen7 from './src/Screen7';
import Demo from './src/Demo';
import Profile from './src/home/Profile';
import TabIcon from './src/tab/TabIcon';

import T1 from './src/practice/T1';
import T2 from './src/practice/T2';
import T3 from './src/practice/T3';
import ScrollViewNgang from './src/practice/ScrollViewNgang';
import BasicFlatList from './src/practice/BasicFlatList';


export default class App extends Component {
  render() {
    return (

      // SRC

      // <Screen1 />
      // <Screen2 />
      // <Screen3 />
      // <Screen4 />
      // <Screen5 />
      // <Screen6 />
      // <Profile />
      <Screen7 />    // 2272019


      // <Router>
      //   <Scene key="root" hideNavBar={true} >
      //     <Tabs
      //       key="tabbar"
      //       routeName="tabbar"
      //       // backToInitial
      //       // showLabel={true}
      //       // tabBarStyle={styles.tabBarStyle}
      //       activeBackgroundColor="white"
      //       showLabel={false}
      //       // inactiveBackgroundColor="#dcdcdc"
      //     >
      //       <Scene key="Screen1" component={Screen1} title="HOME" icon={TabIcon} iconName={"check"} hideNavBar={true} />
      //       <Scene key="Screen2" component={Screen2} title="MOBILE" icon={TabIcon} iconName={"mobile"}  hideNavBar={true} />
      //       <Scene key="Screen3" component={Screen3} title="BALLOT" icon={TabIcon} iconName={"home"} initial={true} hideNavBar={true} />
      //       <Scene key="Screen4" component={Screen4} title="EYE" icon={TabIcon} iconName={"bullseye"} hideNavBar={true} />
      //       <Scene key="Screen5" component={Screen5} title="BELL" icon={TabIcon} iconName={"bell"} hideNavBar={true} />
      //     </Tabs>


      //     <Scene key="Screen1" component={Screen1} title="Screen1"/>
      //     <Scene key="Screen6" component={Screen6} title="Screen6" />
      //     <Scene key="Profile" component={Profile}  title="Profile"/>
      //   </Scene>
      // </Router>

      // <T1 />
      // <T2 />
      // <T3 />
      // <ScrollViewNgang />
      // <BasicFlatList />
      // <Demo />
    );
  }

}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#eee',
  },
})
