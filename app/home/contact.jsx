import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, View, Dimensions, Pressable, Linking, Text} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withDelay, withTiming} from "react-native-reanimated";
import {Image} from "expo-image";
import {theme} from "../../constants/theme";

import facebookLogo from '../../assets/images/social-logos/icons8-facebook-480.png';
import instagramLogo from '../../assets/images/social-logos/icons8-instagram-480.png';
import tiktokLogo from '../../assets/images/social-logos/icons8-tiktok-480.png';
import twitterLogo from '../../assets/images/social-logos/icons8-twitter-144.png';
import youtubeLogo from '../../assets/images/social-logos/icons8-youtube-480.png';
import whatsappLogo from '../../assets/images/social-logos/icons8-whatsapp-480.png';
import {hp} from "../../helpers/common";
import {Entypo, FontAwesome, Fontisto, MaterialIcons, SimpleLineIcons} from "@expo/vector-icons";
import Svg, {Defs, LinearGradient, Rect, Stop} from "react-native-svg";


const {width: SCREEN_WIDTH} = Dimensions.get('window');

const logos = [
    {source: facebookLogo, website: 'https://web.facebook.com'},
    {source: instagramLogo, website: 'https://www.instagram.com'},
    {source: tiktokLogo, website: 'https://www.tiktok.com'},
    {source: twitterLogo, website: 'https://x.com'},
    {source: youtubeLogo, website: 'https://www.youtube.com'},
    {source: whatsappLogo, website: 'https://web.whatsapp.com'},
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

            {/* Contact Info Section */}
            <View style={styles.contactSection}>
                <Text style={styles.contactTitle}>Contact Info</Text>
                <Text style={styles.textContent}>
                    We would love to respond to your queries & help you out. Feel free to get in touch with us. Premier
                    destination for professional hair care and beauty services, delivering award-winning excellence and
                    personalized treatments since 2009.
                </Text>
            </View>

            {/* Logo Scroll Section */}
            <View style={styles.logoScrollSection}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollView}
                >
                    {logos.map((logo, index) => {
                        const animatedStyle = useAnimatedStyle(() => ({
                            transform: [
                                {translateX: withDelay(index * 100, withTiming(0, {duration: 500}))},
                                {scale: withDelay(index * 100, withTiming(1, {duration: 500}))},
                            ],
                            opacity: withDelay(index * 100, withTiming(1, {duration: 500})),
                        }));

                        return (
                            <Animated.View key={index} style={[styles.logoContainer, animatedStyle]}>
                                <Pressable onPress={() => handleLogoPress(logo.website)}>
                                    <Image source={logo.source} style={styles.logo}/>
                                </Pressable>
                            </Animated.View>
                        );
                    })}
                </ScrollView>
            </View>

            {/* Additional Section (Address Section) */}
            <View style={{flex: 1, marginVertical: 10, marginHorizontal:30,}}>
                <View style={styles.addressSection}>
                    <SimpleLineIcons name="location-pin" size={24} color="black"/>
                    <Text style={{fontWeight: theme.fonts.bold, fontSize: hp(2.8), paddingTop: 5}}>
                        Address
                    </Text>
                    <Text style={styles.addressText}>No.6, Pagoda Road,
                        Nugegoda, 10250, Sri Lanka.</Text>
                </View>
                <View style={styles.addressSection}>
                    <FontAwesome name="mobile-phone" size={24} color="black"/>
                    <Text style={{fontWeight: theme.fonts.bold, fontSize: hp(2.8), paddingTop: 5}}>
                        Phone Number
                    </Text>
                    <Text style={styles.addressText}>123 Main St, Salon City</Text>
                </View>
                <View style={styles.addressSection}>
                    <Fontisto name="email" size={24} color="black"/>
                    <Text style={{fontWeight: theme.fonts.bold, fontSize: hp(2.8), paddingTop: 5}}>
                        E-mail
                    </Text>
                    <Text style={styles.addressText}>123 Main St, Salon City</Text>
                </View>
                <View style={styles.addressSection}>
                    <MaterialIcons name="access-time" size={24} color="black"/>
                    <Text style={{fontWeight: theme.fonts.bold, fontSize: hp(2.8), paddingTop: 5}}>
                        Opening Time
                    </Text>
                    <Text style={styles.addressText}>9.00 AM - 07.00 PM Tuesday - Sunday</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between', // Adjust spacing between sections
    },
    contactSection: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactTitle: {
        fontSize: hp(4),
        fontWeight: theme.fonts.extraBold,
        paddingVertical: 10,
    },
    textContent: {
        textAlign: 'center',
        fontSize: hp(1.6),
        fontWeight: theme.fonts.medium,
        marginBottom: 20,
    },
    logoScrollSection: {
        justifyContent: 'center',
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
    addressSection: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    addressText: {
        fontSize: hp(2),
        marginTop: 10,
        textAlign: 'center',
    },
});

export default Contact;
