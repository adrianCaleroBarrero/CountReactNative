import {View, Text, StyleSheet, Pressable, Platform} from 'react-native';
import React, {useState} from 'react';
import {PrimaryButton} from '../components';
import {Button, FAB} from 'react-native-paper';
import {globalStyles} from '../theme/global.style';
import Icon from 'react-native-vector-icons/Ionicons';

const CounterM3Screen = () => {
  const [count, setCount] = useState(0);
  const [icon, setIcon] = useState('add');
  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => {
    setIcon('trash');
    setCount(0);
    setTimeout(() => {
      setIcon('add');
    }, 2000);
  };
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <FAB
        icon={icon}
        style={globalStyles.floatingButton}
        onPress={handleIncrement}
        onLongPress={handleReset}
      />
    </View>
  );
};

export default CounterM3Screen;
