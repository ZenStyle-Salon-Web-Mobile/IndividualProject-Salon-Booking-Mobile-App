import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from "../assets/icons";
import {themes} from "../constants/themes";

const BackButton = ({size=26, router}) => {
  return (
    <Pressable onPress={() => router.back()} style={styles.button}>
      <Icon name="arrowLeft" strokeWidth={2.5} size={size} color={themes.colors.text}/>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
      padding: 5,
      borderRadius: themes.radius.sm,
      backgroundColor: 'rgba(0,0,0,0.07)'
  },
});

export default BackButton;
