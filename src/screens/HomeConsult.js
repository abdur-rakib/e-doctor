import React from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import HomeHeader from '../components/Header/HomeHeader';
import SpecialistDoctor from '../components/List/SpecialistDoctor';
import DoctorList from '../components/List/DoctorList';

const HomeConsult = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <HomeHeader />
      <SpecialistDoctor />
      <DoctorList />
    </ScrollView>
  );
};

export default HomeConsult;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
  },
});
