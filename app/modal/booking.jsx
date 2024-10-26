import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Booking = () => {
  return (
    <View style={styles.container}>
      <Text>Booking Component</Text>
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

export default Booking;
