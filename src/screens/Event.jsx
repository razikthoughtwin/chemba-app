import {View, ScrollView, Image, Text} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Event = () => {
  return (
    // <ScrollView>
      <View>
      <ScrollView>
        <View>
        <Image
          source={require('../assets/map.png')}
          style={{width: responsiveWidth(100), height: responsiveHeight(70)}}
        />
        </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#528265',
            padding: responsiveHeight(2),
            alignItems: 'center',
            justifyContent: 'center',
            gap: responsiveHeight(2),
            // height: responsiveHeight(55),
            marginTop:20
          }}>
          <Image
            source={require('../assets/mapscreen.png')}
            style={{width: responsiveWidth(90),height:responsiveHeight(6)}}
            resizeMode='cover'
          />
          <Image
            source={require('../assets/mapscreen.png')}
            style={{width: responsiveWidth(90),height:responsiveHeight(6)}}
          />
        </View>
        <View
          style={{
            backgroundColor: '#528265',
            height:responsiveHeight(5)
          }}>
            <Text></Text>
          </View>
      </View>
    // </ScrollView>
  );
};

export default Event;
