import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';
import CounterScreen from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import CounterM3Screen from './src/presentation/screens/CounterM3Screen';

import IonIcon from 'react-native-vector-icons/Ionicons';
import BoxObjectModelScreen from './src/presentation/screens/BoxObjectModelScreen';
import DimensionScreen from './src/presentation/screens/DimensionScreen';
import PositionScreen from './src/presentation/screens/PositionScreen';
import HomeworkScreen from './src/presentation/screens/HomeworkScreen';

const App = () => {
  return (
    <PaperProvider settings={{icon: props => <IonIcon {...props} />}}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Adrian Calero Barrer" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
