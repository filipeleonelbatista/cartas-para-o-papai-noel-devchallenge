import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AppLoading } from 'expo';

import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

import {
  TitanOne_400Regular,
} from '@expo-google-fonts/titan-one';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    TitanOne_400Regular,
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <Routes />
      </>
    );
  }
  
}