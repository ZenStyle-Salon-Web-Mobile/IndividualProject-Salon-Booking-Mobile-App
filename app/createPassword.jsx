import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import ScreenWrapper from "../components/ScreenWrapper";

import {theme} from "../constants/theme";
import Icon from "../assets/icons";
import {useRouter} from "expo-router";
import {StatusBar} from "expo-status-bar";
import BackButton from "../components/BackButton";
import {hp, wp} from "../helpers/common";
import Input from "../components/Input";
import Button from "../components/Button";

const CreatePassword = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if(!emailRef.current || !passwordRef.current){
      Alert.alert("Sign Up", "please fill all the fields!");
    }
  }



  return (
      <ScreenWrapper>
        <StatusBar style="dark"/>
        <View style={styles.container}>
          <BackButton router={router}/>

          {/*Welcome*/}
          <View>
            <Text style={styles.welcomeText}>Create {"\n"}New Password</Text>
          </View>
          {/*form*/}
          <View style={styles.form}>
            <Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
              Your New Password Must Be Different From Previously Used Password
            </Text>
            <Input
                icon={<Icon name="lock" size={26} strokeWidth={1.6}/>}
                placeholder={'Enter your password'}
                onChangeText={value => emailRef.current = value}
            />
            <Input
                icon={<Icon name="lock" size={26} strokeWidth={1.6}/>}
                placeholder={'Confirm your password'}
                sec
                onChangeText={value => passwordRef.current = value}
            />

            {/*  button  */}
            <Button title={'Reset'} loading={loading} onPress={onSubmit}/>
          </View>
          {/*  footer  */}

        </View>
      </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});

export default CreatePassword;
