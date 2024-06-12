import React, {useContext, useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {TokenContext} from '../context/TokenContext';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {token, setToken, userdata, response} = useContext(TokenContext);

  const handlelogin = () => {
    try {
      if (email === '') {
        Toast.show({
          type: 'error',
          text1: 'Please fill your email',
          visibilityTime: 1000,
          topOffset: 100,
        });
      } else if (!email.includes('@')) {
        Toast.show({
          type: 'error',
          text1: 'Please fill your email correctly and must include "@" ',
          visibilityTime: 1000,
          topOffset: 100,
        });
      } else if (password === '') {
        Toast.show({
          type: 'error',
          text1: 'Please fill your password correctly',
          visibilityTime: 1000,
          topOffset: 100,
        });
      } else {
        getdata();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getdata = async () => {
    // const existinguser = await AsyncStorage.getItem('registerdata');
    // const user = existinguser? JSON.parse(existinguser) :[];
    // // console.log('user>>>>>>>????????>>>>>>', user);
    // const response = user.find(item => item.email === email && item.password === password);
    // console.log('existing user data>>>>>>>>>>>>', user);

    const x = userdata(email, password);

    console.log('userdata.............', x);

    if (userdata) {
      Toast.show({
        type: 'success',
        text1: 'Login successfully',
        visibilityTime: 3000,
        topOffset: 100,
      });
      setEmail('');
      setPassword('');
      setToken(await AsyncStorage.setItem('token', JSON.stringify(true)));
      console.log('token>>>>>>>>>>>??????????>>>>>>', token);
      navigation.navigate(token && 'home');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please fill your username and password correctly',
        visibilityTime: 1000,
        topOffset: 100,
      });
    }
  };

  const loginTextField = () => {
    return (
      <View style={{gap: responsiveHeight(3)}}>
        <TextInput
          placeholder="Email"
          style={{
            width: responsiveWidth(85),
            padding: responsiveHeight(3),
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: '#D2D9D1',
            fontWeight: '600',
          }}
          placeholderTextColor={'black'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={{
            width: responsiveWidth(85),
            padding: responsiveHeight(3),
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: '#D2D9D1',
            fontWeight: '600',
          }}
          placeholderTextColor={'black'}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Text
          style={{
            textAlign: 'right',
            color: '#000000',
            fontWeight: 600,
            fontSize: responsiveFontSize(2),
          }}>
          Forgot Password?
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            width: responsiveWidth(85),
            padding: responsiveHeight(2),
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: '#528265',
            fontWeight: '600',
          }}
          onPress={handlelogin}>
          <Text
            style={{
              textAlign: 'center',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: responsiveFontSize(3),
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', fontWeight: 600}}>
          Don’t have an account yet?
        </Text>
        <Text
          style={{textAlign: 'center', fontWeight: 800}}
          onPress={() => navigation.navigate('register')}>
          Register Now
        </Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      <View
        style={{
          marginTop: responsiveHeight(15),
          marginBottom: responsiveHeight(3),
        }}>
        <Image source={require('../assets/mainlogo.png')} />
      </View>

      {loginTextField()}
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({});
