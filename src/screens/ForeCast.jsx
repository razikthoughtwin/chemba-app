import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Faq from '../component/Faq';
import data from '../modals/faqdata';
import educatedata from '../modals/educatedata';
import ForeCastData from '../component/ForeCastData';

const ForeCast = () => {
  const [type, setType] = useState('');

  // console.log('type>>>>>>>>>>>>>>>', type);

  useEffect(() => {
    setType('forecast');
  }, []);

  return (
    <SafeAreaView>
      <View style={{padding: responsiveHeight(1)}}>
        <Image source={require('../assets/mainlogo.png')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
          marginTop: responsiveHeight(2),
          padding: responsiveHeight(2),
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 5,
            padding: responsiveHeight(2),
            width: responsiveWidth(25),
            backgroundColor: type == 'forecast' ? '#528265' : 'white',
          }}
          onPress={() => {
            setType('forecast');
          }}>
          <Text
            style={{
              fontWeight: 600,
              textAlign: 'center',
              color: type === 'forecast' ? 'white' : 'black',
            }}>
            forecast
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setType('faq');
          }}
          style={{
            borderWidth: 1,
            borderRadius: 5,
            padding: responsiveHeight(2),
            width: responsiveWidth(25),
            backgroundColor: type == 'faq' ? '#528265' : 'white',
          }}>
          <Text
            style={{
              fontWeight: 600,
              textAlign: 'center',
              color: type === 'faq' ? 'white' : 'black',
            }}>
            FAQ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setType('educate');
          }}
          style={{
            borderWidth: 1,
            borderRadius: 5,
            padding: responsiveHeight(2),
            width: responsiveWidth(25),
            backgroundColor: type == 'educate' ? '#528265' : 'white',
          }}>
          <Text
            style={{
              fontWeight: 600,
              textAlign: 'center',
              color: type === 'educate' ? 'white' : 'black',
            }}>
            Educate
          </Text>
        </TouchableOpacity>
      </View>

      {type === 'forecast' ? <ForeCastData /> : ''}

      {type === 'faq' ? <Faq data={data} /> : ''}
      {type === 'educate' ? <Faq data={educatedata} /> : ''}
    </SafeAreaView>
  );
};

export default ForeCast;
