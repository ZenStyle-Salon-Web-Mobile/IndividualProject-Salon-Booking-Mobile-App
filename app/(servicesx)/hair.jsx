import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList , Image} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { themes } from "../../constants/themes";
import {hp, wp} from "../../helpers/common";
import BookingBtn from "../../components/BookingBtn";

// Sample image URLs; replace these with your actual image paths
const images = {
    1: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'), // Replace with actual image paths
    2: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
    3: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
    4: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
    5: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
    6: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
    7: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
    8: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
    9: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),

    // Add more images as needed
};

const blogData = [{
    id: '1',
    title: '1) LASER HAIR REMOVAL',
    paragraph: 'Hypertrichosis, commonly known as excessive hair growth can affect any part of the body. Usually identified by comparing the hair growth of others of the same age, sex, and ethnic background.',
    date: '11th Jan 2022',

}, {
    id: '2',
    title: '2) PATCHY HAIR LOSS / ALOPECIA AREATA',
    paragraph: 'Patchy loss of hair, also known as Alopecia Areata, usually occurs in areas on the scalp. But eyebrows, lashes, and beards can also get affected. The causes for this have been identified as heredity, thyroid-related disease, hormonal changes, stress, nutritional deficiencies, and external treatment such as coloring, bleaching, or fungal infections of the scalp.',
    date: '5th Nov 2021',
}, {
    id: '3',
    title: '3) HAIR LOSS',
    paragraph: 'Characterized by receding frontal hairline and loss of hair on the top of the head, this could be accompanied by loss of hair in other areas. The condition is also referred to as Androgenetic Alopecia.',
    date: '24th Sept 2021',
}, {
    id: '4',
    title: '4) DANDRUFF',
    paragraph: 'Symptoms such as the itchy, dry flaky scalp, and white or yellow greasy scales are identified as dandruff. Fungus, stress, and hormonal imbalance contribute to dandruff.',
    date: '24th Sept 2021',
}, {
    id: '5',
    title: '5) LACER HAIR REMOVEL',
    paragraph: 'Salon ZENSTYLE respects the privacy of its clients. Personal data collected during registration and booking is used solely for processing appointments and will not be shared with third parties, except as required by law.',
    date: '24th Sept 2021',
}, ];

export default function Hair() {
    const [expandedId, setExpandedId] = useState(null);

    const handlePress = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.titleContainer}>

                <Text style={styles.title}>{item.title}</Text>
                <MaterialCommunityIcons
                    name={expandedId === item.id ? "arrow-up-drop-circle" : "arrow-down-drop-circle"}
                    size={24} color={themes.colors.textLight}
                />
            </TouchableOpacity>
            {expandedId === item.id && (
                <View style={styles.expandedContainer}>
                    <Image resizeMode="cover" source={images[item.id]} style={styles.image} />
                    <Text style={styles.paragraph}>{item.paragraph}</Text>
                    <BookingBtn/>
                </View>
            )}
            <Text style={styles.date}>{item.date}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={blogData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff7c00', // Background color of the whole screen
    },
    itemContainer: {

        backgroundColor: '#001f3f', // Background color of each item
        borderRadius: 10, // Rounded corners
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: {
            width: 0,
            height: 2, // Vertical offset
        },
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 4, // Shadow blur
        elevation: 5, // Shadow for Android
        padding: 15, // Padding inside each item
        marginBottom: 20, // Spacing between items
    },
    image: {
        width: wp(80), // Set the width of the image
        height: hp(25), // Set the height of the image
        borderRadius: 20,
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: {
            width: 0,
            height: 2, // Vertical offset
        },
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 4, // Shadow blur
        elevation: 5, // Shadow for Android
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: themes.colors.textLight,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 16,
        marginTop: 10,
        color: themes.colors.textLight,
    },
    date: {
        fontSize: 14,
        color: themes.colors.textLight,
        marginTop: 5,
    },
    expandedContainer: {
        marginTop: 10, // Optional: Add some space above the expanded content
        flexDirection: 'column', // Optional: If you want to align image and text in a row
        alignItems: 'center', // Optional: Align items vertically centered

    },

});


