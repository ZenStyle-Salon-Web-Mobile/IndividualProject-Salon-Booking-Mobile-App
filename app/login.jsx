import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import ScreenWrapper from "../components/ScreenWrapper";

import {themes} from "../constants/themes";
import Icon from "../assets/icons";
import {useRouter} from "expo-router";
import {StatusBar} from "expo-status-bar";
import BackButton from "../components/BackButton";
import {hp, wp} from "../helpers/common";
import Input from "../components/Input";
import Button from "../components/Button";
import instance from "../services/AxiosOrder/AxiosOrder";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async () => {

        console.log('Email:', email);
        console.log('Password:', password);

        if (!email || !password) {
            Alert.alert('Validation Error', 'Please fill in both email and password.');
            return;
        }

        try {
            const response = await instance.post('/salon-app/api/v1/customer/login', {
                email: email,
                password: password,
            });

            // Assuming the backend returns the token in the response
            const  token  = response.data;
            console.log(response.data)

            if (token) {
                // Save the token in AsyncStorage
                await AsyncStorage.setItem('userToken', token);
                Alert.alert('Login Successful', 'Token saved locally.');
                router.push("/home/homepage")
            } else {
                Alert.alert('Login Failed', 'Token not received.');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Login Error', 'Invalid credentials or server issue.');
        }
    };



    return (
        <ScreenWrapper>
            <StatusBar style="dark"/>
            <View style={styles.container}>
                <BackButton router={router}/>

                {/*Welcome*/}
                <View>
                    <Text style={styles.welcomeText}>Hey,</Text>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                </View>
                {/*form*/}
                <View style={styles.form}>
                    <Text style={{fontSize: hp(1.5), color: themes.colors.text}}>
                        Please login to continue
                    </Text>
                    <Input
                        icon={<Icon name="mail" size={26} strokeWidth={1.6}/>}
                        placeholder={'Enter your email'}
                        value={email}
                        onChangeText={text => setEmail(text)}

                    />
                    <Input
                        icon={<Icon name="lock" size={26} strokeWidth={1.6}/>}
                        placeholder={'Enter your password'}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        sec

                    />
                    <Pressable onPress={() => router.push('forgotPassword')}>
                        <Text style={styles.forgotPassword}>
                            Forgot Password?
                        </Text>
                    </Pressable>

                {/*  button  */}
                    <Button title={'Login'} loading={loading} onPress={onSubmit}/>
                </View>
                {/*  footer  */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Don't have an account?
                    </Text>
                    <Pressable onPress={() => router.push('signUp')}>
                        <Text style={[styles.footerText, {
                            color: themes.colors.primaryDark,
                            fontWeight: themes.fonts.semibold
                        }]}>Sign up</Text>
                    </Pressable>
                </View>
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
        fontWeight: themes.fonts.bold,
        color: themes.colors.text,
    },
    form: {
        gap: 25,
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: themes.fonts.semibold,
        color: themes.colors.text,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    footerText: {
        textAlign: 'center',
        color: themes.colors.text,
        fontSize: hp(1.6),
    },
});

export default Login;
