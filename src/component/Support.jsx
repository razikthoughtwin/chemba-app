import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Support = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          width: responsiveWidth(80),
          marginTop: responsiveHeight(-4),
        }}>
        <Text style={{fontSize: responsiveFontSize(2), fontWeight: 600}}>
          We’re always here to answer any of your questions, and support of any
          kind.
        </Text>
      </View>

      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(25),
          justifyContent: 'center',
          alignItems: 'center',
          gap: 25,
        }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#D2D9D1',
              width: responsiveWidth(90),
              borderRadius: 5,
              flexDirection: 'row',
              padding: 20,
              gap: 20,
            }}>
            <Image source={require('../assets/chat.png')} />
            <Text style={{fontWeight: 500, fontSize: responsiveFontSize(2)}}>
              Chat with Customer Support
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#D2D9D1',
              width: responsiveWidth(90),
              borderRadius: 5,
              flexDirection: 'row',
              padding: 20,
              gap: 20,
            }}>
            <Image source={require('../assets/email.png')} />
            <Text style={{fontWeight: 500, fontSize: responsiveFontSize(2)}}>
              Send us an E-mail
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(40),
          alignItems: 'center',
          padding: 30,
        }}>
        <Text style={{color: '#528265', fontSize: responsiveFontSize(4)}}>
          Connect with us on:
        </Text>
        <View
          style={{
            width: responsiveWidth(80),
            height: responsiveHeight(30),
            flexDirection: 'row',

            flexWrap: 'wrap',
            alignItems: 'center',
            padding: 30,
          }}>
          <Image
            source={require('../assets/facebook.png')}
            style={{
              marginRight: responsiveWidth(10),
              marginBottom: responsiveHeight(10),
            }}
          />
          <Image
            source={require('../assets/twitter.png')}
            style={{marginRight: responsiveWidth(10)}}
          />
          <Image
            source={require('../assets/linkdin.png')}
            style={{marginRight: responsiveWidth(10)}}
          />
          <Image
            source={require('../assets/instagram.png')}
            style={{marginRight: responsiveWidth(10)}}
          />
          <Image
            source={require('../assets/youtube.png')}
            style={{marginRight: responsiveWidth(10)}}
          />
        </View>
      </View>
    </View>
  );
};

export default Support;
