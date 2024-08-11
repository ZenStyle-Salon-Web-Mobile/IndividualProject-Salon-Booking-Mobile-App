import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {router} from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";

const index = () => {
  return (
    <ScreenWrapper >
      <Text>index Component</Text>
      <Button title="welcome" onPress={()=> router.push('welcome')}/>
      <Button title="Forgot Password" onPress={()=> router.push('forgotPassword')}/>
      <Button title="Verify" onPress={()=> router.push('verify')}/>
      <Button title="Create Password" onPress={()=> router.push('createPassword')}/>
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

export default index;

