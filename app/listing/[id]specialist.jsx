import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {router, Stack, useLocalSearchParams} from "expo-router";
import {hp, wp} from "../../helpers/common";
import {themes} from "../../constants/themes";
import Icon from "../../assets/icons";
import ThreeDotsHorizontal from "../../assets/icons/ThreeDotsHorizontal";
import {FontAwesome} from "@expo/vector-icons";


const HairSpecialist = () => {
    const {data} = useLocalSearchParams();
    let parsedData = {};

    try {
        parsedData = JSON.parse(data);
    } catch (error) {
        console.error("Error parsing data:", error);
    }

    const {image, rating, duration, description, position, id} = parsedData;

    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    title: `${id || ''}`,
                }}
            />
            <View style={styles.container}>
                <View style={styles.imageCont}>
                    <Image source={image} style={styles.profileImage}/>
                    <Text style={styles.personalInfo}>@_{id}</Text>
                    <Text style={styles.infoDetails}>{description}</Text>
                </View>

                <View style={styles.wrapText}>

                    <View style={styles.subContainer}>
                        <View>
                            <Text style={styles.textContainer}>Rating</Text>
                            <FontAwesome
                                name={"star"} // Filled or outlined stars
                                size={30}
                                color={"#FFD700"} // Gold for filled, gray for outline
                                style={{
                                    shadowColor: 'black',
                                    shadowOpacity: 0.2,
                                    shadowRadius: 5,
                                    shadowOffset: {width: 0, height: 2},
                                    elevation: 2,
                                }}
                            />
                        </View>
                        <Text style={styles.text}>{rating}</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <View>
                            <Text style={styles.textContainer}>Position</Text>
                            <Icon name="mail" size={30} strokeWidth={1.6} style={styles.icons}/>
                        </View>
                        <Text style={styles.text}>{position}</Text>
                    </View>

                    <View style={styles.subContainer}>
                        <View>
                            <Text style={styles.textContainer}>Duration</Text>
                            <Icon name="edit" size={30} strokeWidth={1.6} style={styles.icons}/>
                        </View>
                        <Text style={styles.text}>{duration}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.bookingBtn} onPress={() => router.push("modal/booking")}>
                        <Text style={styles.textBook}>BOOK NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:90,
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
        paddingBottom:10,
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
        width: wp(100),
        borderWidth: 0.5,
        borderColor: themes.colors.primary,
        borderCurve: 'continuous',

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

export default HairSpecialist;
