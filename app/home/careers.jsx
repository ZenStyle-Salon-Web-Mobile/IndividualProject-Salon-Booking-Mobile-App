import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Careers = () => {
  return (
    <View style={styles.container}>
      <Text>Careers Component
              a
              b
        cdef
      </Text>
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

export default Careers;
