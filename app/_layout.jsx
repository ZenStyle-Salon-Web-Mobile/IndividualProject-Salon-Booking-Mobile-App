import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Stack} from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const _layout = () => {
  return (
    <Stack
        screenOptions={{
            headerShown: false,
        }}
    />

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default _layout;
