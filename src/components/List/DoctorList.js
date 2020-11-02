import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import SubHeader from '../Header/SubHeader';
import AppText from '../shared/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
const topDoctors = [
  {
    id: '1',
    name: 'Dr. Md. Jamal',
    category: ['Cardio Specialist', 'Medicine'],
    qualification: 'MBBS, BCS, MD(Cardiology)',
  },
  {
    id: '2',
    name: 'Dr. Md. Jamal',
    category: ['Cardio Specialist', 'Medicine'],
    qualification: 'MBBS, BCS, MD(Cardiology)',
  },
  {
    id: '3',
    name: 'Dr. Md. Jamal',
    category: ['Cardio Specialist', 'Medicine'],
    qualification: 'MBBS, BCS, MD(Cardiology)',
  },
  {
    id: '4',
    name: 'Dr. Md. Jamal',
    category: ['Cardio Specialist', 'Medicine'],
    qualification: 'MBBS, BCS, MD(Cardiology)',
  },
  {
    id: '5',
    name: 'Dr. Md. Jamal',
    category: ['Cardio Specialist', 'Medicine'],
    qualification: 'MBBS, BCS, MD(Cardiology)',
  },
  {
    id: '6',
    name: 'Dr. Md. Jamal',
    category: ['Cardio Specialist', 'Medicine'],
    qualification: 'MBBS, BCS, MD(Cardiology)',
  },
  {
    id: '7',
    name: 'Dr. Md. Jamal',
    category: ['Cardio Specialist', 'Medicine'],
    qualification: 'MBBS, BCS, MD(Cardiology)',
  },
];

const SingleDoctor = ({item: {name, category, qualification}}) => {
  return (
    <TouchableOpacity style={styles.singleDoctor}>
      <View style={styles.left}>
        <View style={styles.image}></View>
        <View style={styles.details}>
          <AppText style={styles.name}>{name}</AppText>
          <View style={styles.categoryList}>
            {/* {category.map((cat, i) => (
              <AppText style={styles.categoryText} key={i.toString()}>
                {cat}
              </AppText>
            ))} */}
            <AppText style={styles.categoryText}>
              {category.join(' · ')}
            </AppText>
          </View>
          <AppText style={styles.name}>{qualification}</AppText>
        </View>
      </View>
      <View style={styles.right}>
        <Ionicons name="heart-outline" color="lightgray" size={25} />
      </View>
    </TouchableOpacity>
  );
};

const DoctorList = () => {
  return (
    <View style={styles.container}>
      <SubHeader left="Top Doctors" />
      <FlatList
        data={topDoctors}
        renderItem={(itemData) => <SingleDoctor item={itemData.item} />}
      />
    </View>
  );
};

export default DoctorList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  singleDoctor: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  details: {
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4c4c4c',
  },
  categoryList: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  categoryText: {
    fontSize: 15,
  },
});
