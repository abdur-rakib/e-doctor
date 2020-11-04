import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppText from '../shared/AppText';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Image
          source={require('../../assets/logo/logo.png')}
          style={styles.logo}
        />
        <AppText style={styles.logoTitle}>e-Doctor</AppText>
      </View>
      <View style={styles.headerRight}>
        <Ionicons name="notifications-outline" color="#00B4E2" size={24} />
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
    height: 36,
    width: 36,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  logoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#5B068C',
  },
});
