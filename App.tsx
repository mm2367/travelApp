/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import Home from './src/Screens/Home';
import { Categories } from './src/Components/Categories';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Home/>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  safeView:{
    flex:1,
  },
});

export default App;
