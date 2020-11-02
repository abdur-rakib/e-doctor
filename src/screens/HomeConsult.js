import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import HomeHeader from '../components/Header/HomeHeader';
import SpecialistDoctor from '../components/List/SpecialistDoctor';

const HomeConsult = () => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <HomeHeader />
      <SpecialistDoctor />
    </View>
  );
};

export default HomeConsult;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
  },
});
