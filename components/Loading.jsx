import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {theme} from "../constants/theme";

const Loading = ({size="Large", color=theme.colors.primary}) => {
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
