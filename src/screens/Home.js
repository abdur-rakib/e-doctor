import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import HomeHeader from '../components/Header/HomeHeader';

const Home = () => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <HomeHeader />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
  },
});
