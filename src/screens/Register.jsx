import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Register = ({navigation}) => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: '',
    email: '',
    password: '',
  });

  const [data, setData] = useState([]);
  const handlechange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlesubmit = async () => {
    try {
      if (formData.name === '') {
        Toast.show({
          type: 'error',
          text1: 'Please fill your name',
          visibilityTime: 1000,
          topOffset: 100,
        });
      } else if (formData.email === '' || !formData.email.includes('@')) {
        Toast.show({
          type: 'error',
          text1: 'Please fill your email correctly and must include "@" ',
          visibilityTime: 1000,
          topOffset: 100,
        });
      } else if (formData.password === '') {
        Toast.show({
          type: 'error',
          text1: 'Please fill your password correctly',
          visibilityTime: 1000,
          topOffset: 100,
        });
      } else {
        // const newData = [...data, formData];

        // setData([...data,formData]);
        // data.push(formData);

        // console.log('------->datadata-------->>>>>>', data);
        // await AsyncStorage.setItem('registerdata', JSON.stringify(data));
        // Toast.show({
        //   type: 'success',
        //   text1: 'registration completed successfully',
        //   visibilityTime: 3000,
        //   topOffset: 100,
        // });

        // setFormData({
        //   name: '',
        //   email: '',
        //   password: '',
        // });
        // navigation.navigate('login');

        const existingusers = await AsyncStorage.getItem('registerdata');
        const users = existingusers ? JSON.parse(existingusers) : [];

        if (users.find(user => user.email === formData.email)) {
          Alert.alert('user Already exists!!!!!');
        } else {
          users.push(formData);
        }

        await AsyncStorage.setItem('registerdata', JSON.stringify(users));

        Toast.show({
          type: 'success',
          text1: 'registration completed successfully',
          visibilityTime: 3000,
          topOffset: 100,
        });

        setFormData({
          id: Date.now(),
          name: '',
          email: '',
          password: '',
        });

        navigation.navigate('login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registrationTextField = () => {
    return (
      <View style={{gap: responsiveHeight(2.8)}}>
        <TextInput
          placeholder="User Name"
          style={{
            width: responsiveWidth(85),
            padding: responsiveHeight(3),
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: '#D2D9D1',
            fontWeight: '600',
          }}
          placeholderTextColor={'black'}
          value={formData.name}
          onChangeText={text => handlechange('name', text)}
        />
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
          value={formData.email}
          onChangeText={text => handlechange('email', text)}
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
          value={formData.password}
          onChangeText={text => handlechange('password', text)}
        />

        <View
          style={{
            width: responsiveWidth(85),
            padding: responsiveHeight(2.5),
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: '#D2D9D1',
            fontWeight: '600',
            alignItems: 'flex-start',
          }}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: responsiveFontSize(2),
              }}>
              Basic User
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: responsiveFontSize(2),
              }}>
              Garbage collector
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={{
                color: 'black',
                fontWeight: '600',
                fontSize: responsiveFontSize(2),
              }}>
              Scrap Dealer
            </Text>
          </TouchableOpacity>
        </View>
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
          onPress={handlesubmit}>
          <Text
            style={{
              textAlign: 'center',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: responsiveFontSize(3),
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', fontWeight: 600}}>
          Already Have an account?
        </Text>
        <Text
          style={{textAlign: 'center', fontWeight: 800}}
          onPress={() => navigation.navigate('login')}>
          Sign In
        </Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <SafeAreaView style={{alignItems: 'center'}}>
        <View style={{marginBottom: responsiveHeight(2)}}>
          <Image source={require('../assets/mainlogo.png')} style={{marginTop:responsiveHeight(2``)}} />
        </View>

        {registrationTextField()}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
