import {View, Text, SafeAreaView, ActivityIndicator} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {TokenContext} from '../context/TokenContext';

const Loading = ({navigation}) => {
  const {token, setToken} = useContext(TokenContext);

  useEffect(() => {
    {
      token ? navigation.navigate('home') : navigation.navigate('login');
    }
  }, [token]);

  return (
    <SafeAreaView>
      <ActivityIndicator />
    </SafeAreaView>
  );
};

export default Loading;
