import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import {themes} from "../../constants/themes";
import {hp, wp} from "../../helpers/common";
import {Entypo, FontAwesome, FontAwesome6, Ionicons} from "@expo/vector-icons";

const data = [
    {
        id: 'Acne',
        image: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
        price: 'Rs.5000.00',
        duration: '30 mins',
        rating: 4.5,
    },
    {
        id: 'Facial',
        image: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),
        price: 'Rs.6000.00',
        duration: '45 mins',
        rating: 4.1,
    },
    {
        id: 'Makeup',
        image: require('../../assets/images/services/anthony-tran-Sd9A6NVHsd4-unsplash.jpg'),
        price: 'Rs.7000.00',
        duration: '60 mins',
        rating: 5.1,
    },
    {
        id: 'Rebounding',
        image: require('../../assets/images/services/content-pixie-9l7r-n1zt-Y-unsplash.jpg'),
        price: 'Rs.7000.00',
        duration: '60 mins',
        rating: 5.1,

    },
    {
        id: 'Curly',
        image: require('../../assets/images/services/drew-dizzy-graham-cTKGZJTMJQU-unsplash.jpg'),
        price: 'Rs.7000.00',
        duration: '60 mins',
        rating: 5.1,

    },
    // Add more images as needed
];

const HairSpecialistCont = () => {

    const Card = ({item, navigation}) => {
        return (
            <TouchableOpacity
                // onPress={() => navigation.navigate('Details', { image: item.image, id: item.id })}
                style={styles.card}
            >
                <Image source={item.image} style={styles.image2} resizeMode="cover"/>
                <View style={styles.addIcon}>
                    <FontAwesome6 name="add" size={20} color="black"/>
                </View>
                <Text style={styles.cardText}> {item.id}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome
                        name={"star"} // Filled or outlined stars
                        size={20}
                        color={"#FFD700"} // Gold for filled, gray for outline
                        style={{
                            shadowColor: '#000',
                            shadowOpacity: 0.2,
                            shadowRadius: 5,
                            shadowOffset: {width: 0, height: 2},
                            elevation: 2,
                        }}
                    />
                    <Text style={styles.rating}>
                        {item.rating}
                    </Text>
                    <Text style={styles.durationText}>{item.duration}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                    <Text style={styles.priceText}>{item.price}</Text>

                </View>
            </TouchableOpacity>
        );
    };

    return (

        <View>
            <FlatList
                data={data}
                renderItem={({item}) => <Card item={item}/>}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    headingText: {
        fontWeight: themes.fonts.extraBold,
        fontSize: hp(3),
    },
    subHeadingText: {
        color: themes.colors.text,
        fontSize: hp(1.5),
    },
    carouselContainer: {
        marginVertical: 10,
    },
    imageContainer: {
        width: wp(100) - 40, // Image container width with some space on sides
        height: hp(25), // 25% height
        marginHorizontal: 10, // Horizontal space between images
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    topicContainer: {
        marginTop: 10,  // Increased space between the carousel and topics

    },
    subTopic: {
        fontWeight: themes.fonts.extraBold,
        fontSize: hp(2.5),
        color: themes.colors.primaryDark,
        marginVertical: 15, // Increased space between each topic : 15,  // Increased space between each topic
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        borderRadius: 5,
        marginHorizontal: 5,
    },
    card: {
        width: wp(55),
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: themes.colors.primary,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
        paddingBottom: 2,

    },
    image2: {
        width: '100%',
        height: hp(15),
    },
    cardText: {
        color: 'white',
        fontWeight: themes.fonts.bold,
        textAlign: 'center',
        fontSize: hp(2),
    },
    addIcon: {
        position: 'absolute',
        top: 115,
        right: 12,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: themes.colors.primary,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
    },
    priceText: {
        fontWeight: themes.fonts.bold,
        color: 'white',
        fontSize: hp(2.8),
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
        fontStyle: 'italic',
    },
    durationText: {
        fontWeight: themes.fonts.bold,
        color: '#666',
        fontSize: hp(1.8),

    },
    rating: {
        paddingHorizontal: 5,
        color: '#666',
        fontWeight: themes.fonts.bold,
        fontSize: hp(1.5),
    },
});

export default HairSpecialistCont;

