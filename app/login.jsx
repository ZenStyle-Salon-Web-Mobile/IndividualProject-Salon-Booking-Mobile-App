import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from "../components/ScreenWrapper";
import Home from "../assets/icons/Home";
import {theme} from "../constants/theme";

const Login = () => {
  return (
    <ScreenWrapper >
      <Text>Login</Text>
      <Home strokeWidth={2} color={theme.colors.rose}/>
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

export default Login;
