import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';

import {Dimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');

const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 0.6}}></View>
      </View>
      <Text style={styles.text}>
        w: {width}, h: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
});
export default DimensionScreen;
