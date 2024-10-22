import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {hp} from "../helpers/common";
import {theme} from "../constants/theme";

// Reusable Banner Component
const Banner = ({ backgroundColor, text, textColor }) => {
    return (
        <View style={[styles.bannerDesign, { backgroundColor }]}>
            <Text style={[styles.bannerText, { color: textColor }]}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bannerDesign: {
        height: hp(8),
        // backgroundColor: 'red',
        marginVertical:10,
        justifyContent:"center",
    },
    bannerText: {
        // color:theme.colors.textLight,
        fontSize:hp(5),
        textAlign:"center",
        fontWeight:theme.fonts.bold,
        letterSpacing: 7,
    },
});

export default Banner;
