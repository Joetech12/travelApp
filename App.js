import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'red',
  },
  view: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default App;
