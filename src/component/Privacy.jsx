import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Privacy = () => {
  return (
    <View style={{alignItems: 'center', gap: 50}}>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#D2D9D1',
            width: responsiveWidth(90),
            borderRadius: 20,
            flexDirection: 'row',
            padding: 20,
            gap: 20,
          }}>
          <Image source={require('../assets/policy.png')} />
          <Text style={{fontWeight: 500, fontSize: responsiveFontSize(2)}}>
            Privacy Policy
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
          <Image source={require('../assets/terms.png')} />
          <Text style={{fontWeight: 500, fontSize: responsiveFontSize(2)}}>
            Terms of service
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
          <Image source={require('../assets/devices.png')} />
          <Text style={{fontWeight: 500, fontSize: responsiveFontSize(2)}}>
            Terms of service
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Privacy;
