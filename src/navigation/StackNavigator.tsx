// src/navigation/StackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import DrawerNavigator from './DrawerNavigator';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Main" 
        component={DrawerNavigator} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}
