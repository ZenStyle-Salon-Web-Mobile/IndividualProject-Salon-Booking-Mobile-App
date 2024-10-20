import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    ImageBackground, TouchableOpacity
} from 'react-native';

import { useRouter } from 'expo-router';
import {hp} from "../../helpers/common";
import {theme} from "../../constants/theme";

const DATA = [
    {
        id: '1',
        title: 'SKIN & FACE',
        image: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'), // Use require for local image
        path: 'skin_face', // Path for SKIN & FACE screen
    },
    {
        id: '2',
        title: 'HAIR',
        image: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'), // Use require for local image
        path: '/hair',
    },
    {
        id: '3',
        title: 'BODY',
        image: require('../../assets/images/services/anthony-tran-Sd9A6NVHsd4-unsplash.jpg'), // Use require for local image
        path: '/body',
    },
];

type ItemProps = {
    title: string;
    image: any;
};

const Item = ({ title, image, onPress }: ItemProps) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.item}>
            <ImageBackground source={image} style={styles.imageBackground} resizeMode="cover">
                <Text style={styles.title}>{title}</Text>
            </ImageBackground>
        </View>
    </TouchableOpacity>

);

const Services = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Item
                        title={item.title}
                        image={item.image}
                        onPress={() => router.push(item.path)}  // Navigate on press
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor:theme.colors.subColor
    },
    item: {

        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        height: hp(30), // Adjust height as needed
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: hp(4),
        letterSpacing: 10,
        fontWeight: theme.fonts.bold,
        color: '#fff', // Adjust the text color for readability over the background
    },
});

export default Services;
