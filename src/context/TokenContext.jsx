import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
export const TokenContext = createContext('');

const TokenProvider = ({children}) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const usertoken = async () => {
      let result = await AsyncStorage.getItem('token');
      let asynctoken = JSON.parse(result);
      setToken(asynctoken);
    };
    usertoken();
  }, [token]);

  const userdata = async (email, password) => {
    const existinguser = await AsyncStorage.getItem('registerdata');
    const user = existinguser ? JSON.parse(existinguser) : [];
    // console.log('user>>>>>>>????????>>>>>>', user);
    const response = user.find(
      item => item.email === email && item.password === password,
    );
    console.log('existing user data>>>>>>>>>>>>', response);
    if (response) {
      await AsyncStorage.setItem('loggedinuser', JSON.stringify(response));
      // Alert.alert("useradded successfully")
    }
  };
  // console.log("userdata................",userdata)

  return (
    <TokenContext.Provider value={{token, setToken, userdata}}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
