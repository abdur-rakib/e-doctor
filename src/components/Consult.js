import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SpecialistDoctor from './List/SpecialistDoctor';
import DoctorList from './List/DoctorList';
import HomeOnBoarding from './HomeOnBoarding';

const Consult = () => {
  return (
    <>
      {/* <HomeOnBoarding /> */}
      <SpecialistDoctor />
      <DoctorList />
      {/* <View style={{overflow: 'hidden', paddingBottom: 5}}>
        <View
          style={{
            backgroundColor: '#fff',
            width: '100%',
            height: 60,

            elevation: 5,
          }}
        />
      </View> */}
    </>
  );
};

export default Consult;

const styles = StyleSheet.create({});
