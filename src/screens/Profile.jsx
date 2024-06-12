import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Faq from '../component/Faq';
import data from '../modals/faqdata';
import educatedata from '../modals/educatedata';

const Profile = () => {
  const [type, setType] = useState('');

  // console.log('type>>>>>>>>>>>>>>>', type);

  useEffect(() => {
    setType('event');
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
          activeOpacity={0.7}
          style={{
            borderWidth: 1,
            borderRadius: 5,
            padding: responsiveHeight(2),
            width: responsiveWidth(25),
            backgroundColor: type == 'event' ? '#528265' : 'white',
          }}
          onPress={() => {
            setType('event');
          }}>
          <Text
            style={{
              fontWeight: 600,
              textAlign: 'center',
              color: type === 'event' ? 'white' : 'black',
            }}>
            Events
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setType('faq');
          }}
          activeOpacity={0.7}
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
          activeOpacity={0.7}
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

      {type === 'event' ? (
        <ScrollView>
          <View style={{height: responsiveHeight(120)}}>
            <View style={{alignItems: 'center', padding: responsiveHeight(2)}}>
              <Image
                source={require('../assets/eventsimage.png')}
                style={{width: responsiveWidth(80)}}
              />
              <Text style={{fontWeight: 700, padding: responsiveHeight(2)}}>
                Kibera Clean up 16th May 2023
              </Text>

              <Image
                source={require('../assets/eventsimage.png')}
                style={{width: responsiveWidth(80)}}
              />
              <Text style={{fontWeight: 700, padding: responsiveHeight(2)}}>
                Kisumu Recycling Bins installation 19th May 2023
              </Text>

              <Image
                source={require('../assets/eventsimage.png')}
                style={{width: responsiveWidth(80)}}
              />
              <Text style={{fontWeight: 700, padding: responsiveHeight(2)}}>
                Kibera Clean up 16th May 2023
              </Text>
            </View>
            <TouchableOpacity
              style={{alignItems: 'flex-end', height: responsiveHeight(5)}}>
              <Image
                source={require('../assets/plusvector.png')}
                style={{
                  tintColor: '#528265',
                  // width: responsiveWidth(2),
                  // height: responsiveHeight(12),
                  marginRight: responsiveWidth(6),
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        ''
      )}

      {type === 'faq' ? <Faq data={data} /> : ''}
      {type === 'educate' ? <Faq data={educatedata} /> : ''}
    </SafeAreaView>
  );
};

export default Profile;
