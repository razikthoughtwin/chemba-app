import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Event from './Event';
import Profile from './Profile';
import Educate from './ForeCast';
import Setting from './Setting';
import {Image} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const Home = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="profile"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#528265', height: responsiveHeight(10)},
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="event"
        component={Event}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/tab1.png')}
              style={{
                borderBottomWidth: focused ? 5 : 0,
                borderColor: focused ? 'yellow' : "green",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/tab2.png')}
              style={{
                borderBottomWidth: focused ? 5 : 0,
                borderColor: focused ? 'yellow' : '',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="educate"
        component={Educate}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/tab3.png')}
              style={{
                borderBottomWidth: focused ? 5 : 0,
                borderColor: focused ? 'yellow' : '',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/tab4.png')}
              style={{
                borderBottomWidth: focused ? 5 : 0,
                borderColor: focused ? 'yellow' : '',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
