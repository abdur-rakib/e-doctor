import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppText from '../shared/AppText';

const SubHeader = (props) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.categoryName}>{props.left}</AppText>
      <AppText style={styles.expand}>{props.right}</AppText>
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
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#5B068C',
  },
  expand: {
    color: '#00B4E2',
    fontSize: 17,
    // fontWeight: 'bold',
  },
});
