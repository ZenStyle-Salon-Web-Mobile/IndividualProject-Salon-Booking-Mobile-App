import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Locations = () => {
  return (
    <View style={styles.container}>
      <Text>Locations Component</Text>
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

export default Locations;
