import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import ScreenWrapper from "../components/ScreenWrapper";
import {StatusBar} from "expo-status-bar";
import {hp, wp} from "../helpers/common";
import {themes} from "../constants/themes";
import Button from "../components/Button";

import {useRouter} from "expo-router";

const Welcome = () => {

    const router = useRouter()
    return (
        <ScreenWrapper >
            <StatusBar barStyle="red-content" translucent={true}/>
                <View style={styles.container}>
                        {/*login cover*/}
                    <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/login-cover.png')}/>
                    {/*title*/}
                    <View style={{gap: 20}}>
                        <Text style={styles.title}>ZenStyle</Text>
                        <Text style={styles.punchline}>
                            Beauty comes from the inside. Inside the hair salon ss
                        </Text>
                    </View>

                    {/*footer*/}
                    <View style={styles.footer}>
                        <Button
                            title="Getting Started"
                            buttonStyle={{marginHorizontal: wp(3)}}
                            onPress={()=> router.push('/home/homepage')}
                        />
                        <View style={styles.bottomTextContainer}>
                            <Text style={styles.loginText}>
                                Already have an account!
                            </Text>
                            <Pressable onPress={()=> router.push('login')}>
                                <Text style={[styles.loginText, {color: themes.colors.primaryDark, fontWeight: themes.fonts.semibold}]}>
                                    Login
                                </Text>
                            </Pressable>
                        </View>
                     </View>
                </View>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: wp(4),

    },
    welcomeImage: {
        height: hp(30),
        width: wp(100),
        alignSelf: 'center',
    },
    title:{
        color: themes.colors.text,
        fontSize: hp(4),
        textAlign: 'center',
        fontWeight: themes.fonts.extraBold
    },
    punchline:{
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: themes.colors.text,
    },
    footer: {
        gap: 30,
        width: '100%',
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    loginText: {
        textAlign: 'center',
        color: themes.colors.text,
        fontSize: hp(1.6)
    },

});

export default Welcome;
