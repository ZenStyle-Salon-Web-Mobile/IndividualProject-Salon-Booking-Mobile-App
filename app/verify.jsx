import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Alert, TextInput} from 'react-native';
import ScreenWrapper from "../components/ScreenWrapper";

import {theme} from "../constants/theme";
import Icon from "../assets/icons";
import {useRouter} from "expo-router";
import {StatusBar} from "expo-status-bar";
import BackButton from "../components/BackButton";
import {hp, wp} from "../helpers/common";
import Input from "../components/Input";
import Button from "../components/Button";

const Verify = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = useState(false);

    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputs = useRef([]);

    const onSubmit = async () => {
        router.push('createPassword')
        if(!emailRef.current || !passwordRef.current){
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
                    <Text style={styles.welcomeText}>Verification</Text>

                </View>
                {/*form*/}
                <View style={styles.form}>
                    <Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
                        Please Enter The <Text
                        style={{ fontWeight: "bold", color: "#e55039" }}>6 Digit</Text> Code Sent
                    </Text>
                    <View style={styles.hederText1}>
                        <Text style={{ fontSize: 15, }}>Code Was Sent Your Mobile Phone</Text>
                        <Text style={{ fontSize: 15, }}>0765341860</Text>
                    </View>
                    <View style={styles.textContainer}>
                        {code.map((digit, index) => (
                            <TextInput
                                cursorColor={"#3995a6"}
                                key={index}
                                style={styles.input}
                                keyboardType="number-pad"
                                maxLength={1}
                                value={digit}
                                onChangeText={text => handleChange(text, index)}
                                onKeyPress={e => handleKeyPress(e, index)}
                                ref={ref => inputs.current[index] = ref}
                            />
                        ))}
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 15, marginBottom: 20 }}>This Code Expires in <Text
                            style={{ fontWeight: "bold", color: "#e55039" }}>5 minutes</Text>
                        </Text>
                    </View>

                    {/*  button  */}
                    <Button title={'Verify'} loading={loading} onPress={onSubmit}/>
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
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 30,
        marginHorizontal: 30,
    },
    input: {
        width: 40,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        textAlign: "center",
        fontSize: 18,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        color:'black',
    },
});

export default Verify;
