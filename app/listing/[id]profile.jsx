import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
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
                        <Text style={styles.textContainer}>Name</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="user" size={26} strokeWidth={1.6}/>
                            <Text style={styles.text}>{loggedInUser.name}</Text>
                        </View>
                    </View>

                    <View style={styles.subContainer}>
                        <Text style={styles.textContainer}>Gender</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="heart" size={26} strokeWidth={1.6}/>
                            <Text style={styles.text}>{loggedInUser.gender}</Text>
                        </View>
                    </View>

                    <View style={styles.subContainer}>
                        <Text style={styles.textContainer}>Email</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="mail" size={26} strokeWidth={1.6}/>
                            <Text style={styles.text}>{loggedInUser.email}</Text>
                        </View>
                    </View>

                    <View style={styles.subContainer}>
                        <Text style={styles.textContainer}>Phone</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="send" size={26} strokeWidth={1.6}/>
                            <Text style={styles.text}>{loggedInUser.phoneNumber}</Text>
                        </View>
                    </View>
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
    wrapText: { },
    textContainer: {},
    text: {
        fontSize: 18,

    },
    subContainer: {
        height: hp(8),
        width: wp(85),
        borderWidth: 1,
        borderColor: themes.colors.primary,
        borderCurve: 'continuous',
        borderRadius: themes.radius.xxl,
        paddingHorizontal: 18,
        gap: 12,
        justifyContent: "center",
        marginBottom:20,

    },

});

export default ProfileDetails;
