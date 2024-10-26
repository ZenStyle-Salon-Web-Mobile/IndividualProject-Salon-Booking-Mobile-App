import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from "expo-router";

const ListingDetails = () => {
    const { id, image, rating, duration, price } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.text}>Listing ID: {id}</Text>
            <Text style={styles.text}>Rating: {rating}</Text>
            <Text style={styles.text}>Duration: {duration}</Text>
            <Text style={styles.text}>Price: {price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        marginVertical: 8,
    },
});

export default ListingDetails;
