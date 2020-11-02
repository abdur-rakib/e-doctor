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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4c4c4c',
  },
  expand: {
    color: 'gray',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
