import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {wp} from "../helpers/common";
import {themes} from "../constants/themes";

const OfferButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>OfferButton Component</Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width:wp(10),
      backgroundColor:themes.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OfferButton;
