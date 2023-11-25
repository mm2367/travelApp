/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {StyleSheet,useColorScheme,} from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AttractionDetails from './src/Screens/AttractionDetails';
import Gallery from './src/Screens/Gallery';
import Home from './src/Screens/Home';
import MapScreen from './src/Screens/MapScreen';

const Stack = createStackNavigator();

const App=(): JSX.Element =>{
  const appTheme={
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background:'white'
    }
  }
  const isDarkMode = useColorScheme() === 'dark';
  return (

      <NavigationContainer theme={appTheme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={Home} name="Home"/>
        <Stack.Screen component={AttractionDetails} name="AttractionDetails"/>
        <Stack.Screen component={Gallery} name="Gallery"/>
        <Stack.Screen component={MapScreen} name="MapScreen"/>
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  safeView:{
    flex:1,
  },
});

export default App;
