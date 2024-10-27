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
    title: '1) ACNE',
    paragraph: 'Acne is a skin condition caused by increased oil production of the sebaceous (oil) glands. The excess oil, together with dead skin cells, blocks the hair follicles causing whiteheads, blackheads, and pimples. The skin on the face, chest, upper back, and shoulders are most prone to this condition.',
    date: '11th Jan 2022',

}, {
    id: '2',
    title: '2) ACNE SCARS',
    paragraph: 'Though skin has the natural ability to heal itself, and even with the most careful of treatment, depending on the severity of the acne, scars may occur. An acne lesion may result in loss or formation of skin tissue – the loss results in milder scars and the formation results in more severe scars.',
    date: '5th Nov 2021',
}, {
    id: '3',
    title: '3) ROSACEA (PINK FACE)',
    paragraph: 'Rosacea is a very common skin condition characterized by permanent redness around the center of the face. Most often the redness gradually spreads to cheeks, forehead, chin, and even ears chest, and back.',
    date: '24th Sept 2021',
}, {
    id: '4',
    title: '4) WARTS AND CORNS',
    paragraph: 'A common viral infection caused by the HPN virus. There are different types of warts usually identified by their appearance.',
    date: '24th Sept 2021',
}, {
    id: '5',
    title: '5) KELOIDS (HYPERTROPHIC SCARS )',
    paragraph: 'A scar is a result of the body naturally healing or replacing damaged skin. It usually consists of fibrous tissue, therefore the composition may differ in appearance. Scars may appear flat, lumpy, sunken, lightly, or darkly pigmented.',
    date: '24th Sept 2021',
}, {
    id: '6',
    title: '6) LIQUID NITROGEN CRYOFREEZING',
    paragraph: 'Liquid nitrogen cryofreezing is a treatment used for warts, tags, and other skin lesions. It is an inexpensive, safe, and effective method to treat unsightly skin growths. Furthermore, you can be in and out of treatment in no time and back to your day-to-day routines. ',
    date: '24th Sept 2021',
}, {
    id: '7',
    title: '7) TEETH WHITENING',
    paragraph: 'A whiter, brighter smile is now yours with Christell teeth whitening treatment. Our professional treatment, one of the most effective in town, takes years of coffee, tobacco, and other stains – simply walk out with an amazing smile. ',
    date: '24th Sept 2021',
}, {
    id: '8',
    title: '8) KERATOSIS PILARIS',
    paragraph: 'Keratosis pilaris is a very common condition that causes tiny rough bumps on your skin. The condition is usually accompanied by dry or rough skin.',
    date: '24th Sept 2021',
}, {
    id: '9',
    title: '9) ECZEMA',
    paragraph: 'Eczema is a term used to describe common types of dermatitis or skin inflammation. The most common symptom is a red rash with swelling and blisters, or a persisting irritation with darker, thickened skin.',
    date: '24th Sept 2021',
},];

export default function Skin_Face() {
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
        backgroundColor: '#98ff98', // Background color of the whole screen
    },
    itemContainer: {

        backgroundColor: '#333333', // Background color of each item
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

