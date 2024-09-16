import React, {useEffect, useRef} from 'react';
import {StyleSheet, ScrollView, View, Dimensions, Pressable, Linking} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withDelay, withTiming} from "react-native-reanimated";
import {Image} from "expo-image";
import {theme} from "../../constants/theme";

import facebookLogo from '../../assets/images/social-logos/icons8-facebook-480.png';
import instagramLogo from '../../assets/images/social-logos/icons8-instagram-480.png';
import tiktokLogo from '../../assets/images/social-logos/icons8-tiktok-480.png';
import twitterLogo from '../../assets/images/social-logos/icons8-twitter-144.png';
import youtubeLogo from '../../assets/images/social-logos/icons8-youtube-480.png';
import whatsappLogo from '../../assets/images/social-logos/icons8-whatsapp-480.png';


const {width: SCREEN_WIDTH} = Dimensions.get('window');

const logos = [
    {
        source: facebookLogo,
        website: 'https://web.facebook.com',
    },
    {
        source: instagramLogo,
        website: 'https://www.instagram.com',
    },
    {
        source:tiktokLogo,
        website:'https://www.tiktok.com',
    },
    {
        source:twitterLogo,
        website:'https://x.com',
    },
    {
        source: youtubeLogo,
        website: 'https://www.youtube.com',
    },
    {
        source:whatsappLogo,
        website: 'https://web.whatsapp.com',
    },
    // Add more logos from your local assets directory
];

const Contact = () => {

    const translateX = useSharedValue(SCREEN_WIDTH); // Start off-screen

    useEffect(() => {
        translateX.value = withTiming(0, {duration: 800}); // Slide into view on mount
    }, []);

    const handleLogoPress = (website) => {
        Linking.openURL(website).catch((err) => {
            console.error("Failed to open URL:", err);
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}

            >
                {logos.map((logo, index) => {
                    const animatedStyle = useAnimatedStyle(() => {
                        return {
                            transform: [
                                {
                                    translateX: withDelay(index * 100, withTiming(0, {duration: 500})),
                                },
                                {
                                    scale: withDelay(index * 100, withTiming(1, {duration: 500})),
                                },
                            ],
                            opacity: withDelay(index * 100, withTiming(1, {duration: 500})),
                        };
                    });

                    return (
                        <Animated.View key={index} style={[styles.logoContainer, animatedStyle]}>
                            <Pressable key={index}
                                       onPress={() => handleLogoPress(logo.website)}>
                                <Image source={logo.source} style={styles.logo}/>
                            </Pressable>
                        </Animated.View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    scrollView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoContainer: {
        marginRight: 20,
        opacity: 0,
        transform: [{scale: 0.5}],
    },
    logo: {
        width: 60,
        height: 60,
        backgroundColor: '#ffacd9',
        borderRadius: theme.radius.xxl,
        resizeMode: 'contain',
    },
});

export default Contact;
