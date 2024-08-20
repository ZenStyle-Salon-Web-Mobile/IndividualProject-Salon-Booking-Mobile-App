import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Membership = () => {
  return (
    <View style={styles.container}>
      <Text>Membership Component</Text>
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

export default Membership;
