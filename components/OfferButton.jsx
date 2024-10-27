import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {wp} from "../helpers/common";
import {themes} from "../constants/themes";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const OfferButton = ({bottom,left}) => {
    return (
        <TouchableOpacity style={[styles.container, {bottom, left}]}>
            <Text style={{
                fontWeight:themes.fonts.bold,
            }}>Get Offer Now</Text>
            <MaterialCommunityIcons name="arrow-right-drop-circle" size={24} color={themes.colors.primary}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(35),
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        padding:8,
        borderRadius:themes.radius.xxl,
        borderWidth:1.5,
        borderColor:themes.colors.primary,
        position: 'absolute',

    },
});

export default OfferButton;
