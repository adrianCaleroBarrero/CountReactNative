import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';
import CounterScreen from './src/presentation/screens/CounterScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen name="Adrian Calero Barrer" /> */}
      <CounterScreen />
    </SafeAreaView>
  );
};

export default App;
