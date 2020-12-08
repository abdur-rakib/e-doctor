import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  LogBox,
} from 'react-native';
import HomeHeader from '../components/Header/HomeHeader';
import HomeTopNavigator from '../navigation/HomeConsultTopTabNavigator';

const Home = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <HomeHeader />
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
