import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {theme} from "../../constants/theme";
import {hp, wp} from "../../helpers/common";
import Carousel from 'react-native-reanimated-carousel';
import {sliderImages} from "../../constants/imageIndex";
import {Entypo, Ionicons} from "@expo/vector-icons";

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
            {/*header*/}
            <View style={{flexDirection:'row'}}>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                        }}
                        style={{marginVertical: 10}}
                    >
                        <Image
                            source={{
                                uri: "https://xsgames.co/randomusers/assets/avatars/male/77.jpg"
                            }}
                            style={{width: 50, height: 50, borderRadius: 50}}
                        />
                    </TouchableOpacity>
                    <Text style={styles.subHeadingText}>Hello Ramesh Kaushika</Text>
                    <Text style={styles.headingText}>{greeting}</Text>
                </View>
                <View>
                    <Text style={styles.subHeadingText}>CALL US NOW</Text>
                    <Text style={styles.headingText}>+94765341860</Text>
                    <View style={{flexDirection:'row'}}>
                        <Entypo name="facebook" size={32} color={theme.colors.primaryDark} />
                        <Entypo name="facebook" size={32} color="green" />
                        <Entypo name="facebook" size={32} color="green" />
                        <Entypo name="facebook" size={32} color="green" />
                        <Entypo name="facebook" size={32} color="green" />
                    </View>
                </View>
            </View>

            <ScrollView>

                {/* Carousel Section */}
                <View style={styles.carouselContainer}>
                    <Carousel
                        loop
                        width={wp(100)}
                        height={hp(25)}
                        autoPlay={true}
                        autoPlayInterval={4000}
                        data={sliderImages}
                        scrollAnimationDuration={1000}
                        mode="parallax-horizontal"
                        parallaxScrollingScale={0.9}
                        parallaxScrollingOffset={50}
                        renderItem={({item}) => (
                            <ItemCard item={item}/>
                        )}
                    />
                </View>

                {/* Topics under the image */}
                <View style={styles.topicContainer}>
                    <Text style={styles.subTopic}>Special Offers</Text>
                    <Text style={styles.subTopic}>Top Services</Text>
                    <Text style={styles.subTopic}>Hair Specialist</Text>
                </View>
            </ScrollView>

        </View>
    );
};

const ItemCard = ({item}) => {
    return (
        <View style={styles.imageContainer}>
            <Image
                source={item}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    headingText: {
        fontWeight: theme.fonts.extraBold,
        fontSize: hp(3),
    },
    subHeadingText: {
        color: theme.colors.text,
        fontSize: hp(1.5),
    },
    carouselContainer: {
        marginVertical: 10,
    },
    imageContainer: {
        width: wp(100) - 70, // Image container width with some space on sides
        height: hp(25), // 25% height
        marginHorizontal: 10, // Horizontal space between images
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    topicContainer: {
        marginTop: 10,  // Increased space between the carousel and topics
        paddingHorizontal: 10,  // Space around the topics
    },
    subTopic: {
        fontWeight: theme.fonts.extraBold,
        fontSize: hp(2.5),
        color: theme.colors.primaryDark,
        marginBottom: 15,  // Increased space between each topic
    },
});

export default HomePage;
