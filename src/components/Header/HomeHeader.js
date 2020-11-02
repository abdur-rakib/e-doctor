import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppText from '../shared/AppText';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <View style={styles.logo}></View>
        <AppText style={styles.logoTitle}>e-Doctor</AppText>
      </View>
      <View style={styles.headerRight}>
        <Ionicons name="notifications-outline" size={22} />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 45,
    width: 45,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  logoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
