import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {router} from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";
import Welcome from "./welcome";
import About from "./home/about";
import {Drawer} from "expo-router/drawer";

const index = () => {
  return (
    <ScreenWrapper >
      {/*<Text>index Component</Text>*/}
      {/*<Button title="welcome" onPress={()=> router.push('welcome')}/>*/}
      {/*<Button title="Forgot Password" onPress={()=> router.push('forgotPassword')}/>*/}
      {/*<Button title="Verify" onPress={()=> router.push('verify')}/>*/}
      {/*<Button title="Create Password" onPress={()=> router.push('createPassword')}/>*/}
        <Welcome/>

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

