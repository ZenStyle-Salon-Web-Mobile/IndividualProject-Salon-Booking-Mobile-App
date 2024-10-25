import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {themes} from "../constants/themes";
import {hp} from "../helpers/common";
import Loading from "./Loading";

const Button = ({
                    buttonStyle,
                    textStyle,
                    title = '',
                    onPress = () => {
                    },
                    loading = false,
                    hasShadow = true,
                }) => {

    const shadowStyle = {
        shadowColor: themes.colors.dark,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4
    }

    if (loading){
        return (
            <View style={[styles.button, buttonStyle, {backgroundColor: 'white'}]}>
                <Loading/>
            </View>
        )
    }

    return (
        <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: themes.colors.primary,
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: "continuous",
        borderRadius: themes.radius.xl
    },
    text: {
        fontSize: hp(2.5),
        color: 'white',
        fontWeight: themes.fonts.bold
    },
});

export default Button;
