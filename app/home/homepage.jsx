import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { theme } from "../../constants/theme";
import { hp, wp } from "../../helpers/common";
import Carousel from 'react-native-reanimated-carousel';
import { sliderImages } from "../../constants/imageIndex";

const HomePage = () => {

    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting('Good Morning!');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good Afternoon!');
        } else {
            setGreeting('Good Evening!');
        }
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => {}}
                    style={{ marginVertical: 10 }}
                >
                    <Image
                        source={{
                            uri: "https://xsgames.co/randomusers/assets/avatars/male/77.jpg"
                        }}
                        style={{ width: 50, height: 50, borderRadius: 50 }}
                    />
                </TouchableOpacity>
                <Text style={styles.subHeadingText}>
                    Hello Ramesh Kaushika
                </Text>
                <Text style={styles.HeadingText}>
                    {greeting}
                </Text>
            </View>

            <View style={styles.carouselOffer}>
                <Text style={styles.subTopic}>Special Offers</Text>
                <Carousel
                    loop
                    width={wp(100)}
                    height={hp(25)}
                    autoPlay={true}
                    autoPlayInterval={4000}
                    data={sliderImages}
                    scrollAnimationDuration={1000}
                    // Enabling parallax-horizontal mode
                    mode="parallax-horizontal"
                    parallaxScrollingScale={0.9}
                    parallaxScrollingOffset={50}
                    renderItem={({ item, index, animatedValue }) => (
                        <ItemCard item={item} index={index} animatedValue={animatedValue} />
                    )}
                />
            </View>

            <View style={styles.carouselOffer}>
                <Text style={styles.subTopic}>Top Services</Text>
                <Text style={styles.subTopic}>Top Services</Text>
                <Text style={styles.subTopic}>Top Services</Text>
                <Text style={styles.subTopic}>Top Services</Text>
                <Text style={styles.subTopic}>Top Services</Text>
                <Text style={styles.subTopic}>Top Services</Text>
                <Text style={styles.subTopic}>Top Services</Text>
                <Text style={styles.subTopic}>Top Services</Text>
                <Text style={styles.subTopic}>Top Services</Text>
            </View>

            <View style={styles.carouselOffer}>
                <Text style={styles.subTopic}>Hair Specialist</Text>
            </View>
        </View>
    );
};

const ItemCard = ({ item }) => {
    return (
        <View style={{  width: wp(100) - 70,   // Full width with 70 units of horizontal space
            height: hp(25),        // 25% of the screen height
            marginHorizontal: 10,  // Horizontal space between images
            borderRadius: 20,      // Optional: Adds some rounding to image edges
            overflow: 'hidden', }}>
            <Image
                source={item}
                style={{
                    width: '100%',          // Full width of the container
                    height: '100%',         // Full height of the container (25% of screen height)
                    resizeMode: 'cover',    // Ensures image covers the container
                }}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    HeadingText: {
        fontWeight: theme.fonts.extraBold,
        fontSize: hp(3),
    },
    subHeadingText: {
        color: theme.colors.text,
        fontSize: hp(1.5),
    },
    carouselOffer: {
        marginVertical: 10,
    },
    subTopic: {
        fontWeight: theme.fonts.extraBold,
        fontSize: hp(2.5),
        color: theme.colors.primaryDark,
    },
});

export default HomePage;
