import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Stack, useLocalSearchParams} from "expo-router";
import {hp, wp} from "../../helpers/common";
import {themes} from "../../constants/themes";
import Icon from "../../assets/icons";

const ProfileDetails = () => {
    const {user} = useLocalSearchParams();
    const loggedInUser = JSON.parse(user); // Parse the JSON string to an object

    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    title: `${loggedInUser.name || ''}`,
                }}
            />
            <View style={styles.container}>
                <View style={styles.imageCont}>
                    <Image source={{uri: loggedInUser.image}} style={styles.profileImage}/>
                    <Text style={styles.personalInfo}>Personal Info</Text>
                    <Text style={styles.infoDetails}>Can you see your login information and Can you edite this User
                        profile</Text>
                </View>

                <View style={styles.wrapText}>

                    <View style={styles.subContainer}>
                        <View>
                            <Text style={styles.textContainer}>Name</Text>
                            <Icon name="user" size={30} strokeWidth={1.6} style={styles.icons}/>
                        </View>
                        <Text style={styles.text}>{loggedInUser.name}</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <View>
                            <Text style={styles.textContainer}>Gender</Text>
                            <Icon name="heart" size={30} strokeWidth={1.6} style={styles.icons}/>
                        </View>
                        <Text style={styles.text}>{loggedInUser.gender}</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <View>
                            <Text style={styles.textContainer}>Email</Text>
                            <Icon name="mail" size={30} strokeWidth={1.6} style={styles.icons}/>
                        </View>
                        <Text style={styles.text}>{loggedInUser.email}</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <View>
                            <Text style={styles.textContainer}>Phone</Text>
                            <Icon name="send" size={30} strokeWidth={1.6} style={styles.icons}/>
                        </View>
                        <Text style={styles.text}>{loggedInUser.phoneNumber}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.bookingBtn}>
                        <Text style={styles.textBook}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    },
    imageCont: {
        width: wp(80),
        height: hp(40),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: themes.radius.xl
    },
    profileImage: {
        width: hp(15),
        height: hp(15),
        borderRadius: hp(7.5),
        marginBottom: 20,
    },
    personalInfo: {
        fontSize: hp(3),
        fontWeight: themes.fonts.bold
    },
    infoDetails: {
        fontSize: hp(1.7),
        fontWeight: themes.fonts.medium,
        textAlign: "center",
    },
    wrapText: {},
    textContainer: {
        fontSize: hp(1.5),
        fontWeight: themes.fonts.semibold,
    },
    text: {
        fontSize: hp(2),
        fontWeight: themes.fonts.medium,
    },
    subContainer: {
        flexDirection: 'row',
        height: hp(8),
        width: wp(85),
        borderWidth: 0.5,
        borderColor: themes.colors.primary,
        borderCurve: 'continuous',
        borderRadius: themes.radius.xxl,
        paddingHorizontal: 18,
        gap: 12,
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: themes.colors.textLight
    },
    icons: {
        marginVertical: 6,
        color: themes.colors.primary,
        marginRight: 20,
    },
    footer: {

        position: 'absolute',
        bottom: 0,
        paddingBottom: 30,
    },
    bookingBtn: {
        width: wp(85),
        backgroundColor: themes.colors.primary,
        padding: 20,
        borderRadius: themes.radius.xxl,
        alignItems: 'center',
    },
    textBook: {
        fontSize: hp(2.5),
        fontWeight: themes.fonts.bold,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: themes.colors.darkLight,
    },

});

export default ProfileDetails;
