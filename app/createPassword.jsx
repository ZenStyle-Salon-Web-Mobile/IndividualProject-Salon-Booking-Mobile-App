import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreatePassword = () => {
  return (
    <View style={styles.container}>
      <Text>CreatePassword Component</Text>
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

export default CreatePassword;
