import {View, Text, Pressable, StyleSheet, Platform} from 'react-native';
import React from 'react';
interface Props {
  label: string;
  OnPress?(): void;
  OnLongPress?(): void;
}
export const PrimaryButton = ({label, OnPress, OnLongPress}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onPress={OnPress}
      onLongPress={OnLongPress}>
      <Text style={styles.buttonColor}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonColor: {
    color: Platform.OS === 'android' ? 'white' : '#5856D6',
    fontWeight: '700',
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#2825cd' : 'white',
  },
});
