import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SubHeader from '../Header/SubHeader';
import AppText from '../shared/AppText';

const data = [
  {id: '1', category: 'Cardio Specialist', numOfDoctors: 25},
  {id: '2', category: 'Heart Issue', numOfDoctors: 25},
  {id: '3', category: 'Dental Care', numOfDoctors: 25},
  {id: '4', category: 'Physical Therapy', numOfDoctors: 25},
];

const SingleCategory = (props) => {
  return (
    <TouchableOpacity style={styles.singleCategory}>
      <View style={styles.details}>
        <AppText style={styles.text} numberOfLines={2}>
          {props.item.category}
        </AppText>
        <AppText style={styles.text}>{props.item.numOfDoctors} Doctors</AppText>
      </View>
      <View style={styles.categoryImage}></View>
    </TouchableOpacity>
  );
};

const SpecialistDoctor = () => {
  return (
    <View style={styles.container}>
      <SubHeader left="Specialist" right="View all" />
      <FlatList
        numColumns={2}
        data={data}
        renderItem={(itemData) => <SingleCategory item={itemData.item} />}
      />
    </View>
  );
};

export default SpecialistDoctor;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  singleCategory: {
    backgroundColor: '#f2f2f2',
    width: Dimensions.get('window').width / 2 - 25,
    marginRight: 10,
    marginBottom: 10,
    padding: 15,
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    height: 120,
  },
  details: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 80,
  },
  categoryImage: {
    height: 60,
    width: 70,
    backgroundColor: '#cfcfcf',
    borderRadius: 5,
    marginLeft: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
