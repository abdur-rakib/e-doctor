import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SpecialistDoctor from './List/SpecialistDoctor';
import DoctorList from './List/DoctorList';
import HomeCarousel from './HomeCarousel';

const Consult = () => {
  return (
    <>
      <HomeCarousel />
      <SpecialistDoctor />
      <DoctorList />
    </>
  );
};

export default Consult;

const styles = StyleSheet.create({});
