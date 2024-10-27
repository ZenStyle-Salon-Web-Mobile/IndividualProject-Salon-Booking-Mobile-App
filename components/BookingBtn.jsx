import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {themes} from "../constants/themes";
import {hp, wp} from "../helpers/common";
import {router} from "expo-router";

const BookingBtn = () => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => router.push("modal/booking")}>
            <Text style={styles.text}>Booking now</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#ee297c',
        borderRadius:themes.radius.xxl,
        width:wp(40),
        marginTop:8,
    },
    text: {
        color:'#FFFFFF',
        fontSize:hp(2),
        fontWeight:themes.fonts.medium,
    },

});

export default BookingBtn;
