import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ForeCastData = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: responsiveWidth(75),
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            backgroundColor: '#D2D9D1',
            borderRadius: 5,
          }}>
          <TextInput
            placeholder="Type your location"
            style={{
              width: responsiveWidth(65),
              padding: responsiveHeight(2),
              // borderWidth: 1,
              // borderRadius: 5,
              // backgroundColor: '#D2D9D1',
              fontWeight: '600',
            }}
            placeholderTextColor={'black'}
          />
          <TouchableOpacity>
            <Image source={require('../assets/locationlogo.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          //   backgroundColor: 'red',
          width: responsiveWidth(100),
          height: responsiveHeight(18),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 700, fontSize: responsiveFontSize(4)}}>
          Accra
        </Text>
        <Text style={{fontSize: responsiveFontSize(2.5), fontWeight: 400}}>
          19°C
        </Text>
        <Text style={{fontSize: responsiveFontSize(3), fontWeight: 400}}>
          Sunny
        </Text>
      </View>

      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(10),
          padding: 15,
          gap: 10,
        }}>
        <Text style={{fontWeight: 800, fontSize: responsiveFontSize(3)}}>
          Weather Forecast
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            backgroundColor: '#D2D9D1',
            padding: 15,
            borderRadius: 20,
          }}>
          {/* image */}
          <View
            style={{
              backgroundColor: '#528265',
              width: responsiveWidth(15),
              height: responsiveHeight(7),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Image source={require('../assets/cloud.png')} />
          </View>
          {/* content */}
          <View>
            <Text style={{fontWeight: 700, fontSize: responsiveFontSize(2.5)}}>
              Saturday, 6 May
            </Text>
            <Text style={{fontWeight: 700, fontSize: responsiveFontSize(2.5)}}>
              19
            </Text>
            <Text style={{fontWeight: 400, fontSize: responsiveFontSize(2.5)}}>
              Sunny
            </Text>
          </View>
        </View>

        {/* end temp view */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            backgroundColor: '#D2D9D1',
            padding: 15,
            borderRadius: 20,
          }}>
          {/* image */}
          <View
            style={{
              backgroundColor: '#528265',
              width: responsiveWidth(15),
              height: responsiveHeight(7),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Image source={require('../assets/cloud.png')} />
          </View>
          {/* content */}
          <View>
            <Text style={{fontWeight: 700, fontSize: responsiveFontSize(2.5)}}>
              Saturday, 6 May
            </Text>
            <Text style={{fontWeight: 700, fontSize: responsiveFontSize(2.5)}}>
              19
            </Text>
            <Text style={{fontWeight: 400, fontSize: responsiveFontSize(2.5)}}>
              Sunny
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForeCastData;
