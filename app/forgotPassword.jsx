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

const ForgotPassword = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        router.push('verify')
        if (!emailRef.current || !passwordRef.current) {
            // Alert.alert("Sign Up", "please fill all the fields!");
        }
    }


    return (
        <ScreenWrapper>
            <StatusBar style="dark"/>
            <View style={styles.container}>
                <BackButton router={router}/>

                {/*Welcome*/}
                <View>
                    <View style={styles.topic}>
                        <Text style={styles.welcomeText}>
                            Forgot {"\n"}Password
                        </Text>
                    </View>
                    <View style={styles.hederText1}>
                        <Text style={{fontSize: hp(1.5), color: themes.colors.text}}>Don't Worry !</Text>
                        <Text style={{fontSize: hp(1.5), color: themes.colors.text}}>
                            Enter Your Registered Mobile Number {"\n"}and we will send you a
                            verification code.
                        </Text>
                    </View>
                </View>
                {/*form*/}
                <View style={styles.form}>
                    <Text style={{fontSize: hp(1.5), color: themes.colors.text}}>
                        Please enter login number to continue
                    </Text>

                    <Input
                        icon={<Icon name="send" size={26} strokeWidth={1.6}/>}
                        placeholder={'Enter your mobile number'}
                        sec
                        onChangeText={value => passwordRef.current = value}
                    />

                    {/*  button  */}
                    <Button title={'Continue'} loading={loading} onPress={onSubmit}/>
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

export default ForgotPassword;
