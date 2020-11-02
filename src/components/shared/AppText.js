import React from 'react';
import {StyleSheet, Text} from 'react-native';

const AppText = (props) => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
  },
});
