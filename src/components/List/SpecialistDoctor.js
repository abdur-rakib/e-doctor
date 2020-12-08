import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
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
        <Text style={styles.categoryText}>
          {props.item.category.split(' ')[0]}
          {'\n'}
          {props.item.category.split(' ')[1]}
        </Text>
        <Text style={styles.numText}>{props.item.numOfDoctors} Doctors</Text>
      </View>
      <Image
        style={styles.categoryImage}
        resizeMode="contain"
        source={require('../../assets/images/default.png')}
      />
    </TouchableOpacity>
  );
};

const SpecialistDoctor = () => {
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 10}}>
        <SubHeader left="Specialist" right="View all" />
      </View>
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
    marginHorizontal: 10,
  },
  singleCategory: {
    backgroundColor: '#F2F2F2',
    // width: Dimensions.get('window').width / 2,
    marginHorizontal: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    height: 100,
    paddingVertical: 10,
    flex: 1,
  },
  details: {
    // new stylesheet
    width: '70%',
    // backgroundColor: 'gray',
    justifyContent: 'space-between',
    height: '90%',
  },
  categoryImage: {
    height: '50%',
    width: '35%',
    marginLeft: 5,
  },
  categoryText: {
    fontSize: 17,
    // fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  numText: {
    // marginTop: 5,
    fontSize: 15,
    // fontWeight: 'bold',
    color: '#000000',
  },
});
