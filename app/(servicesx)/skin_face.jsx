
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList , Image} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../constants/theme";
import {hp, wp} from "../../helpers/common";

// Sample image URLs; replace these with your actual image paths
const images = {
    1: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'), // Replace with actual image paths
    2: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
    3: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
    4: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
    5: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
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
    title: '3) Appointment Rescheduling and Cancellations',
    paragraph: 'Appointments can be rescheduled or cancelled without penalty up to 72 hours prior to the scheduled appointment time. Refunds for cancellations are processed manually and can take up to two working days to complete, provided via the original method of payment or through direct bank transfer.' + 'No rescheduling or cancellations are allowed within 72 hours of the appointment time, and no refunds will be provided under these circumstances.',
    date: '24th Sept 2021',
}, {
    id: '4',
    title: '4) Service Limitations and Liability',
    paragraph: 'Specific services such as hair coloring, straightening, keratin treatments, and facials include a mandatory, free allergy test that must be conducted at least two days before the scheduled service. Salon Liyo will not be held responsible for any adverse effects or medical conditions that arise due to treatments administered at the salon or resulting from failure to conduct the allergy tests.',
    date: '24th Sept 2021',
}, {
    id: '5',
    title: '5) Data Privacy',
    paragraph: 'Salon Liyo respects the privacy of its clients. Personal data collected during registration and booking is used solely for processing appointments and will not be shared with third parties, except as required by law.',
    date: '24th Sept 2021',
}, {
    id: '6',
    title: '6) Dispute Resolution',
    paragraph: 'In the event of a dispute, customers are encouraged to contact our customer service team through the provided hotline or email. Salon Liyo commits to resolving disputes amicably and efficiently.',
    date: '24th Sept 2021',
}, {
    id: '7',
    title: '7) Modifications to Terms',
    paragraph: 'Salon Liyo reserves the right to amend these terms and conditions at any time. All changes will be effective immediately upon their posting on the website. Continued use of the booking system after any changes constitutes acceptance of the new terms.',
    date: '24th Sept 2021',
}, {
    id: '8',
    title: '8) Contact Information',
    paragraph: 'For further information or assistance, please contact us via our WhatsApp number, hotline, or email. Contact details are available on our website and through your booking confirmation.',
    date: '24th Sept 2021',
}, {
    id: '9',
    title: '9) Legal Compliance',
    paragraph: 'Salon Liyo operates in compliance with applicable local and national laws. Users agree to not use the booking system for any unlawful activities.',
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
                    size={24} color="black"
                />
            </TouchableOpacity>
            {expandedId === item.id && (
                <View style={styles.expandedContainer}>
                    <Image resizeMode="cover" source={images[item.id]} style={styles.image} />
                    <Text style={styles.paragraph}>{item.paragraph}</Text>
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
        backgroundColor: '#ffe5f3', // Background color of the whole screen
    },
    itemContainer: {
        backgroundColor: '#d27caa', // Background color of each item
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
        fontWeight: 'bold',
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 16,
        marginTop: 10,
    },
    date: {
        fontSize: 14,
        color: theme.colors.text,
        marginTop: 5,
    },
    expandedContainer: {
        marginTop: 10, // Optional: Add some space above the expanded content
        flexDirection: 'column', // Optional: If you want to align image and text in a row
        alignItems: 'center', // Optional: Align items vertically centered

    },

});

