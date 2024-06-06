import React from 'react';
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const indexScreen = () => {

  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  );
};


export default indexScreen;