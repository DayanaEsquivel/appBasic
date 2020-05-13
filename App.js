/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Screems
import UserList from './src/Screems/UserList'
import UserDetails from './src/Screems/UserDetails'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="UserDetails" component={ UserDetails } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
