import React from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import HomeHeader from '../components/Header/HomeHeader';
import Consult from '../components/Consult';
import HomeTopNavigator from '../navigation/HomeConsultTopTabNavigator';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <HomeHeader />
      {/* <Consult /> */}
      <HomeTopNavigator />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
  },
});
