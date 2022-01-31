import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import firebase from './src/services/firebaseConnect';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#131313' barStyle='light-content' />
      <Routes/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    fontFamily: 'Montserrat-Regular',
  },
});

export default App;