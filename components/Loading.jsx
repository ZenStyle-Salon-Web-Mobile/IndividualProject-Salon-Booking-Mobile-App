import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {themes} from "../constants/themes";

const Loading = ({size="Large", color=themes.colors.primary}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={size} color={color}/>
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

export default Loading;
