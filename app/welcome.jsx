import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from "../components/ScreenWrapper";

const Welcome = () => {
  return (
    <ScreenWrapper style={styles.container}>
      <Text>Welcome Component</Text>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
