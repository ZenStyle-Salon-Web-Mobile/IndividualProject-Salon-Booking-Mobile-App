import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {theme} from "../../constants/theme";
import {hp, wp} from "../../helpers/common";
import {FontAwesome} from "@expo/vector-icons";

const Ratings = () => {

    const rating= 4.5;
    // Create an array for star rendering
    const totalStars = 5; // Assuming 5 stars
    const stars = [];

    // Loop through total stars to render filled and empty stars
    for (let i = 1; i <= totalStars; i++) {
        stars.push(
            <FontAwesome
                key={i}
                name={i <= rating ? 'star' : 'star-o'} // 'star' for filled, 'star-o' for empty
                size={30} // Size of the star
                color="#ffd700" // Gold color for stars
            />
        );
    }


    return (
        <View style={styles.container}>
            <View style={styles.ratingContainer}>
                <Text style={{fontSize: hp(3.7)}}>Overall Rating</Text>
                <Text style={{fontSize: hp(12), fontWeight: theme.fonts.bold}}>3.9</Text>
                <View style={styles.starContainer}>
                    {stars}
                </View>
            </View>
            <Pressable style={styles.reviewButton}>
                <Text style={styles.reviewButtonText}>
                    Write a review
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: wp(6),

    },
    reviewButton: {
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        padding: '5%',
        borderRadius: theme.radius.lg
    },
    reviewButtonText: {
        fontSize: hp(2.2),
        fontWeight: theme.fonts.semibold,
    },
    ratingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    starContainer: {
        flexDirection: 'row',

    },
});

export default Ratings;
