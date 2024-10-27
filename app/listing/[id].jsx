import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {router, Stack, useLocalSearchParams} from "expo-router";
import {hp, wp} from "../../helpers/common";
import {themes} from "../../constants/themes";
import {FontAwesome} from "@expo/vector-icons";
import Animated, {
    interpolate,
    useAnimatedRef,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useScrollViewOffset, useSharedValue
} from "react-native-reanimated";

const IMG_HEIGHT = hp(40);
const ListingDetails = () => {
    const {id, image, rating, duration, price, description,} = useLocalSearchParams();

    const scrollOffset = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollOffset.value = event.contentOffset.y;
        },
    });

    const imageAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-IMG_HEIGHT, 0, IMG_HEIGHT],
                        [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
                    ),
                },
            ],
        };
    });

    return (
        <>
            <Stack.Screen options={{
                headerTransparent: true,
                title: `${id || ''}`
            }}/>
            <View style={styles.container}>
                <Animated.ScrollView  onScroll={scrollHandler}
                                      scrollEventThrottle={16}
                                      contentContainerStyle={{paddingBottom: 150}}>
                    <Animated.Image source={image} style={[styles.image, imageAnimatedStyle]}/>
                    <View style={styles.contentWrapper}>
                        <View >
                            <Text style={styles.textID}>{id}</Text>
                            <View style={{flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                                <FontAwesome
                                    name={"star"} // Filled or outlined stars
                                    size={20}
                                    color={"#FFD700"} // Gold for filled, gray for outline
                                    style={{
                                        shadowColor: '#000',
                                        shadowOpacity: 9.2,
                                        shadowRadius: 5,
                                        shadowOffset: {width: 0, height: 2},
                                        elevation: 10,
                                    }}
                                />
                                <Text style={styles.rating}>Rating: {rating}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
                            <Text style={styles.textDuration}>{duration}</Text>
                        </View>
                    </View>
                    <View style={{alignContent: 'center', alignItems: 'center'}}>

                        <Text style={styles.para}>{description}</Text>
                    </View>
                </Animated.ScrollView>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.bookingBtn} onPress={() => router.push("modal/booking")}>
                    <Text style={styles.textBook}>Book Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.priceBtn} onPress={() => router.push("modal/booking")}>
                    <Text style={styles.textPrice}>{price}</Text>
                </TouchableOpacity>
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:themes.colors.textLight,
    },
    image: {
        width: '100%',
        height: IMG_HEIGHT,
    },
    rating: {
        paddingHorizontal: 10,
        color: '#666',
        fontWeight: themes.fonts.bold,
        fontSize: hp(2),
    },
    contentWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: "space-between",
        backgroundColor: themes.colors.subColor
    },
    textID: {
        fontSize: hp(4.5),
        fontWeight: themes.fonts.extraBold,
        letterSpacing: 0.5,
        paddingBottom: 5,
    },
    textDuration: {
        fontSize: hp(2),
        fontWeight: themes.fonts.bold,
        letterSpacing: 0.5,
        paddingBottom: 5,
    },
    textPrice: {
        fontSize: hp(1.8),
        fontWeight: themes.fonts.bold,
        color: 'white',
    },
    para: {
        fontSize: hp(1.9),
        fontWeight: themes.fonts.medium,
        letterSpacing: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: "auto"
    },
    footer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        padding: 20,
        paddingBottom: 30,
        width: wp(100),
    },
    bookingBtn: {
        flex: 2,
        backgroundColor: themes.colors.primary,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 20,
    },
    priceBtn: {
        flex: 1,
        backgroundColor: themes.colors.dark,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBook: {
        fontSize: hp(3),
        fontWeight: themes.fonts.bold,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: themes.colors.darkLight,
    },
});

export default ListingDetails;
