import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import {themes} from "../../constants/themes";
import {hp, wp} from "../../helpers/common";
import {Entypo, FontAwesome, FontAwesome6, Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";

const data = [
    {
        id: 'Ramesh',
        image: require('../../assets/images/hairSpec/ramesh.jpg'),
        position: 'Hair Stylish',
        duration: '4 yrs exp',
        rating: 4.5,
        description:'The youngest Sri Lankan to have qualified in Medical Cosmetology, Dr. Arsecularatne is also an Aesthetic Medicine and Anti-Aging Specialist. Teaming with knowledge, experience, and new technology, she doesn’t waver in creating new inventions that continue to inspire & inflame the industry. ',
    },
    {
        id: 'Kaushika',
        image: require('../../assets/images/hairSpec/kaushika.jpg'),
        position: 'Hair Spa',
        duration: '3 yrs exp',
        rating: 4.1,
        description:'The youngest Sri Lankan to have qualified in Medical Cosmetology, Dr. Arsecularatne is also an Aesthetic Medicine and Anti-Aging Specialist. Teaming with knowledge, experience, and new technology, she doesn’t waver in creating new inventions that continue to inspire & inflame the industry. ',
    },
    {
        id: 'Nirushi',
        image: require('../../assets/images/hairSpec/nirushi.jpg'),
        position: 'Oil Massage',
        duration: '5 yrs exp',
        rating: 5.1,
        description:'The youngest Sri Lankan to have qualified in Medical Cosmetology, Dr. Arsecularatne is also an Aesthetic Medicine and Anti-Aging Specialist. Teaming with knowledge, experience, and new technology, she doesn’t waver in creating new inventions that continue to inspire & inflame the industry. ',
    },
    {
        id: 'Dananjani',
        image: require('../../assets/images/hairSpec/dananjani.jpg'),
        position: 'Therapy',
        duration: '4 yrs exp',
        rating: 5.1,
        description:'The youngest Sri Lankan to have qualified in Medical Cosmetology, Dr. Arsecularatne is also an Aesthetic Medicine and Anti-Aging Specialist. Teaming with knowledge, experience, and new technology, she doesn’t waver in creating new inventions that continue to inspire & inflame the industry. ',

    },
    {
        id: 'Kamesh',
        image: require('../../assets/images/hairSpec/kamesh.jpg'),
        position: 'Skin Specialist',
        duration: '7 yrs exp',
        rating: 5.1,
        description:'The youngest Sri Lankan to have qualified in Medical Cosmetology, Dr. Arsecularatne is also an Aesthetic Medicine and Anti-Aging Specialist. Teaming with knowledge, experience, and new technology, she doesn’t waver in creating new inventions that continue to inspire & inflame the industry. ',

    },
    // Add more images as needed
];

const HairSpecialistCont = () => {

    const Card = ({item, navigation}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    const data = JSON.stringify({
                        id:item.id,
                        image: item.image,
                        rating: item.rating,
                        duration: item.duration,
                        description: item.description,
                        position: item.position,
                    });

                    router.push({
                        pathname: `/listing/[id]specialist`,
                        params: { data }, // Pass the JSON string here
                    });
                }}
                style={styles.card} >
                <Image source={item.image} style={styles.image2} resizeMode="cover"/>
                <View style={styles.addIcon}>
                    <FontAwesome6 name="add" size={20} color="black"/>
                </View>
                <Text style={styles.cardText}> {item.id}</Text>
                <Text style={styles.position}>{item.position}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.durationText}>{item.duration}</Text>
                    <FontAwesome
                        name={"star"} // Filled or outlined stars
                        size={20}
                        color={"#FFD700"} // Gold for filled, gray for outline
                        style={{
                            shadowColor: 'white',
                            shadowOpacity: 0.2,
                            shadowRadius: 5,
                            shadowOffset: {width: 0, height: 2},
                            elevation: 2,
                        }}
                    />
                    <Text style={styles.rating}>
                        {item.rating}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (


        <FlatList
            data={data}
            renderItem={({item}) => <Card item={item}/>}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />


    );
};

const styles = StyleSheet.create({
    card: {
        width: wp(45),
        marginHorizontal: 10,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#eaeaea',
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
        paddingBottom: 2,
        justifyContent: "space-around",
        alignItems: 'center',
    },
    image2: {
        width: hp(10),
        height: hp(10),
        borderRadius: hp(5), // Half of the width/height to make it circular
    },
    cardText: {
        fontWeight: themes.fonts.bold,
        textAlign: 'center',
        fontSize: hp(2.5),
    },
    addIcon: {
        position: 'absolute',
        top: 120,
        right: 9,
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: themes.colors.primary,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
    },
    position: {
        fontWeight: themes.fonts.bold,
        color: themes.colors.primary,
        fontSize: hp(1.8),
    },
    durationText: {
        fontWeight: themes.fonts.bold,
        color: '#666',
        fontSize: hp(1.8),
        paddingRight:30

    },
    rating: {
        paddingHorizontal: 5,
        color: '#666',
        fontWeight: themes.fonts.bold,
        fontSize: hp(1.5),
    },
});

export default HairSpecialistCont;

