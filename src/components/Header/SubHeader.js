import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppText from '../shared/AppText';

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.categoryName}>Specialist</AppText>
      <AppText style={styles.expand}>View all</AppText>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  expand: {
    color: 'gray',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
