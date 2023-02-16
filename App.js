/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Main from './src/Main';
import Meal2 from './src/screens/Meal2'
import  store  from './src/store/store';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
    <Main />
    </Provider>
    
  );
};

export default App;