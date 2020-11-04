import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Consult from '../components/Consult';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

function HomeTopNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: 'white',
        }}
        tabBarOptions={{
          activeTintColor: '#5B068C',
          inactiveTintColor: '#8A8A8F',
          indicatorContainerStyle: {width: '80%', marginLeft: 20},
          indicatorStyle: {
            backgroundColor: '#5B068C',
            height: 4,
            borderRadius: 5,
          },
          showIcon: true,
          tabStyle: {
            flexDirection: 'row',
            borderTopColor: 'white',
            borderTopWidth: 5,
          },
          style: {
            elevation: 0,
          },
          labelStyle: {
            textTransform: 'capitalize',
            fontSize: 15,
          },
        }}>
        <Tab.Screen
          options={{
            title: 'Consult',
            tabBarIcon: ({color, size, focused}) => (
              <Ionicons
                name="chatbubble-ellipses-outline"
                color={focused ? '#00b4e2' : color}
                size={20}
              />
            ),
          }}
          name="Consult"
          component={Consult}
        />
        <Tab.Screen
          options={{
            title: 'Health Packs',
            tabBarIcon: ({color, size, focused}) => (
              <Ionicons
                name="medkit-outline"
                color={focused ? '#00b4e2' : color}
                size={20}
              />
            ),
          }}
          name="HealthPacks"
          component={Consult}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomeTopNavigator;
