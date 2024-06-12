import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import {enableScreens} from 'react-native-screens';
import Home from './src/screens/Home';
import Toast from 'react-native-toast-message';
import Loading from './src/screens/Loading';
import TokenProvider from './src/context/TokenContext';
import {LogBox} from 'react-native';

enableScreens(true);

LogBox.ignoreAllLogs();

const App = () => {
  const Stack = createNativeStackNavigator();

  // useEffect(()=>{
  //   AsyncStorage.clear();
  // },[])

  return (
    <TokenProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="loading">
          <Stack.Screen name="loading" component={Loading} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </TokenProvider>
  );
};
export default App;
