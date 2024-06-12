import {View, Image, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {TokenContext} from '../context/TokenContext';
import Support from '../component/Support';
import Privacy from '../component/Privacy';

const Setting = () => {
  const {token, setToken} = useContext(TokenContext);

  const [type, setType] = useState('');

  const [user, setUser] = useState([]);

  useEffect(() => {
    setType('profile');
  }, []);

  useEffect(() => {
    const getloggedinuser = async () => {
      const loggeduser = await AsyncStorage.getItem('loggedinuser');
      if (loggeduser) {
        setUser(JSON.parse(loggeduser));
      }
    };
    getloggedinuser();
  }, [user]);

  return (
    <SafeAreaView>
      {/* top header */}
      <View
        style={{
          paddingLeft: responsiveWidth(5),
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          // backgroundColor: 'red',
          height: responsiveHeight(15),
        }}>
        <Image source={require('../assets/logo2.png')} />
        <Text
          style={{
            color: '#528265',
            fontWeight: 400,
            fontSize: responsiveFontSize(3),
            marginTop: responsiveHeight(-1),
          }}>
          {type === 'profile' && 'Profile'}
          {type === 'support' && 'Help & Support'}
          {type === 'privacy' && 'Security & Privacy'}
        </Text>
      </View>
      {/* profile */}

      {type === 'profile' && (
        <>
          <View
            style={{
              paddingLeft: responsiveWidth(5),
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <View
              style={{
                width: responsiveWidth(25),
                height: responsiveHeight(12),
                backgroundColor: '#528265',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: '#528265',
                  fontWeight: 400,
                  fontSize: responsiveFontSize(3),
                  backgroundColor: '#528265',
                  color: 'white',
                  textAlign: 'center',
                }}>
                {/* DM */}
                {user?.name?.toUpperCase()?.slice(0, 2)}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 700,
                  fontSize: responsiveFontSize(3),
                }}>
                {/* DAVID MBUGUA */}
                {user?.name}
              </Text>
              <Text
                style={{
                  fontWeight: 300,
                  fontSize: responsiveFontSize(2),
                }}>
                {/* david@gmail.com */}
                {user?.email}
              </Text>
            </View>
          </View>

          {/* points */}

          <View
            style={{
              width: responsiveWidth(100),
              alignItems: 'center',
              justifyContent: 'center',
              height: responsiveHeight(45),
              gap: 20,
            }}>
            <View
              style={{
                backgroundColor: '#D2D9D1',
                width: responsiveWidth(90),
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 25,
              }}>
              <Text style={{fontWeight: 600, fontSize: responsiveFontSize(3)}}>
                Points:
              </Text>
              <Text style={{fontWeight: 600, fontSize: responsiveFontSize(3)}}>
                1,000
              </Text>
            </View>

            {/* help and support */}

            <TouchableOpacity onPress={() => setType('support')}>
              <View
                style={{
                  backgroundColor: '#D2D9D1',
                  width: responsiveWidth(90),
                  borderRadius: 5,
                  flexDirection: 'row',
                  padding: 20,
                  gap: 20,
                }}>
                <Image source={require('../assets/support.png')} />
                <Text
                  style={{fontWeight: 600, fontSize: responsiveFontSize(3)}}>
                  Help & Support
                </Text>
              </View>
            </TouchableOpacity>

            {/* security and privacy */}

            <TouchableOpacity onPress={() => setType('privacy')}>
              <View
                style={{
                  backgroundColor: '#D2D9D1',
                  width: responsiveWidth(90),
                  borderRadius: 5,
                  flexDirection: 'row',
                  gap: 20,
                  padding: 25,
                }}>
                <Image source={require('../assets/privacy.png')} />
                <Text
                  style={{fontWeight: 600, fontSize: responsiveFontSize(3)}}>
                  Security & Privacy
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: responsiveHeight(15),
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={async () => {
                setToken(await AsyncStorage.removeItem('token'));
                setUser(await AsyncStorage.removeItem('loggedinuser'));
              }}
              style={{flexDirection: 'row', gap: 20, padding: 25}}>
              <Image source={require('../assets/logout.png')} />
              <Text style={{fontSize: responsiveFontSize(2), fontWeight: 900}}>
                Log out
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {type === 'support' && <Support />}
      {type === 'privacy' && <Privacy />}
    </SafeAreaView>
  );
};

export default Setting;
