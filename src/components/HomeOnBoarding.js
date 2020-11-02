import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const HomeOnBoarding = () => {
  return (
    <Onboarding
      containerStyles={styles.container}
      imageContainerStyles={{paddingBottom: 0}}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.image}
              source={require('../assets/default.png')}
            />
          ),
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.image}
              source={require('../assets/default.png')}
            />
          ),
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.image}
              source={require('../assets/default.png')}
            />
          ),
        },
      ]}
    />
  );
};

export default HomeOnBoarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    marginHorizontal: 20,
    width: 300,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
});
