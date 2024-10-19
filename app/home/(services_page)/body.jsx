import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Body = () => {
  return (
    <View style={styles.container}>
      <Text>Body Component</Text>
        <Text>Body Component</Text>
        <Text>Body Component</Text>
        <Text>Body Component</Text>
        <Text>Body Component</Text>
        <Text>Body Component</Text>
        <Text>Body Component</Text>
        <Text>Body Component</Text>
        <Text>Body Component</Text>
        <Text>Body Component</Text>
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

export default Body;
