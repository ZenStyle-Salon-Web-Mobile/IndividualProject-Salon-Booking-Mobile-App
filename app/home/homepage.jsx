import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {theme} from "../../constants/theme";
import {hp, wp} from "../../helpers/common";
import Carousel from 'react-native-reanimated-carousel';
import {sliderImages} from "../../constants/imageIndex";
import {Entypo, FontAwesome6, Ionicons} from "@expo/vector-icons";
import Animated, {useAnimatedStyle, useSharedValue, withSpring,} from "react-native-reanimated";

const HomePage = () => {

    const currentIndex = useSharedValue(0); // Track the current slide index

    // Handle onProgressChange to update the currentIndex shared value
    const handleProgressChange = (_, absoluteProgress) => {
        currentIndex.value = Math.round(absoluteProgress);
    };

    // Pagination Dot Component
    const PaginationDots = () => {
        return (
            <View style={styles.paginationContainer}>
                {sliderImages.map((_, index) => {
                    return <PaginationDot key={index} index={index} currentIndex={currentIndex}/>;
                })}
            </View>
        );
    };


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
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                <View style={{paddingTop: 10, width: wp(30), alignItems: 'flex-end', alignContent: 'space-between'}}>
                    <Text style={styles.subHeadingText}>CALL US NOW</Text>
                    <Text style={{fontSize: hp(1.8), fontWeight: theme.fonts.medium}}>+94765341860</Text>
                    <View style={{height: 20}}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Entypo name="facebook" size={22} color={theme.colors.primaryDark}
                                style={{paddingHorizontal: 5}}/>
                        <Entypo name="instagram" size={22} color={theme.colors.primaryDark}
                                style={{paddingHorizontal: 5}}/>
                        <FontAwesome6 name="x-twitter" size={22} color={theme.colors.primaryDark}
                                      style={{paddingHorizontal: 5}}/>
                        <Entypo name="linkedin" size={22} color={theme.colors.primaryDark}
                                style={{paddingHorizontal: 5}}/>
                        <Entypo name="youtube" size={22} color={theme.colors.primaryDark}
                                style={{paddingHorizontal: 5}}/>
                    </View>
                </View>
            </View>

            <ScrollView>
                <Text style={styles.subTopic}>Special Offers</Text>
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
                        onProgressChange={handleProgressChange} // Updates the currentIndex as the user scrolls
                        renderItem={({item}) => (
                            <ItemCard item={item}/>
                        )}
                    />
                    {/* Render the pagination dots below the carousel */}
                    <PaginationDots/>
                </View>

                {/* Topics under the image */}
                <View style={styles.topicContainer}>

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

// Individual Pagination Dot Component
const PaginationDot = ({index, currentIndex}) => {
    const animatedStyle = useAnimatedStyle(() => {
        const isActive = currentIndex.value === index;

        return {
            width: withSpring(isActive ? 10 : 6), // Animate width based on active state
            height: withSpring(isActive ? 10 : 6), // Animate height based on active state
            backgroundColor: withSpring(isActive ? '#FF6347' : '#d3d3d3'), // Change color on active state
        };
    });

    return <Animated.View style={[styles.dot, animatedStyle]}/>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
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
        width: wp(100) - 40, // Image container width with some space on sides
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
        marginVertical: 15, // Increased space between each topic : 15,  // Increased space between each topic
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        borderRadius: 5,
        marginHorizontal: 5,
    },
});

export default HomePage;
