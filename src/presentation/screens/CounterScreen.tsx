import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {PrimaryButton} from '../components';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => setCount(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <PrimaryButton
        label="Add"
        OnPress={handleIncrement}
        OnLongPress={handleReset}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});

export default CounterScreen;
