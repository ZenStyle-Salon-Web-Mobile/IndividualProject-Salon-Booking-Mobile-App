import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Stack, useLocalSearchParams} from "expo-router";
import {hp, wp} from "../../helpers/common";
import {themes} from "../../constants/themes";
import {FontAwesome} from "@expo/vector-icons";

const ListingDetails = () => {
    const {id, image, rating, duration, price, description,} = useLocalSearchParams();

    return (
        <>
            <Stack.Screen options={{
                headerTransparent: true,
                title: `${id || ''}`

            }}/>
            <View style={styles.container}>
                <Image source={image} style={styles.image}/>
                <View style={styles.contentWrapper}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.textID}>{id}</Text>
                        <View style={{flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                            <FontAwesome
                                name={"star"} // Filled or outlined stars
                                size={22}
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
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.bookingBtn}>
                        <Text style={styles.textBook}>Book Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.priceBtn}>
                        <Text style={styles.textPrice}>{price}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: hp(40),
    },
    rating: {
        paddingHorizontal: 10,
        color: '#666',
        fontWeight: themes.fonts.bold,
        fontSize: hp(2.5),
    },
    contentWrapper: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: "space-between",
        backgroundColor: themes.colors.subColor
    },
    textID: {
        fontSize: hp(5),
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
        fontSize: hp(3),
        fontWeight: themes.fonts.bold,
        letterSpacing: 0.5,
        paddingBottom: 5,

    },
    para: {
        fontSize: hp(1.9),
        fontWeight: themes.fonts.medium,
        letterSpacing: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: "auto"
    },
    footer:{
        position:'absolute',
        bottom:0,
        padding:20,
        paddingBottom:30,
        width:wp(100),
    },
    bookingBtn:{},
    priceBtn:{
        backgroundColor:themes.colors.dark,
        padding:20,
        borderRadius:10,
        alignItems:'center',

    },
    textBook:{
        fontSize: hp(3),
        fontWeight: themes.fonts.bold,
        letterSpacing: 0.5,
        paddingBottom: 5,

    },
});

export default ListingDetails;
