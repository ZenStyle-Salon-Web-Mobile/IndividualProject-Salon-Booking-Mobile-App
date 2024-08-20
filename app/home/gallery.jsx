import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Gallery = () => {
  return (
    <View style={styles.container}>
      <Text>Gallery Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Gallery;

