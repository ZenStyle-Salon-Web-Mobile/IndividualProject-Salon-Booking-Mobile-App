import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {theme} from "../../constants/theme";
import {hp, wp} from "../../helpers/common";

const Ratings = () => {


    return (
        <View style={styles.container}>
            <View style={styles.ratingContainer}>
                <Text>Overall Rating</Text>
                <Text>3.9</Text>

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

    }
});

export default Ratings;
