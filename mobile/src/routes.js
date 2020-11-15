import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Search from './pages/Search';
import List from './pages/List';
import Letter from './pages/Letter';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F3F5' } }}>
        <Screen name="Search" component={Search} />
        <Screen name="Letter" component={Letter} />
        <Screen name="List" component={List} />
        
      </Navigator>
    </NavigationContainer>
  );
}