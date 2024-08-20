import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TermsConditions = () => {
  return (
    <View style={styles.container}>
      <Text>Terms & Conditions Component</Text>
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

export default TermsConditions;
