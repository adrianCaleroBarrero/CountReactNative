import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'space-between',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    flex: 1,
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    flex: 9,
    backgroundColor: '#d07419',
  },
  blueBox: {
    flex: 1,
    backgroundColor: '#5bd2e4',
  },
});

export default HomeworkScreen;
