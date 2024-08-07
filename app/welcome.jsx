import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ScreenWrapper from "../components/ScreenWrapper";
import {StatusBar} from "expo-status-bar";
import {hp, wp} from "../helpers/common";

const Welcome = () => {
    return (
        <ScreenWrapper bg="white">
            <StatusBar style="dark"/>
                <View style={styles.container}>
                        {/*login cover*/}
                    <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/login-cover.png')}/>
                </View>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: wp(4),

    },
    welcomeImage: {
        height: hp(30),
        width: wp(100),
        alignSelf: 'center',
    },

});

export default Welcome;
