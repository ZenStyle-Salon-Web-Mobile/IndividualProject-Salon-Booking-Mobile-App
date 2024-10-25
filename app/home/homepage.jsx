import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import {themes} from "../../constants/themes";
import {hp, wp} from "../../helpers/common";
import Carousel from 'react-native-reanimated-carousel';
import {sliderImages} from "../../constants/imageIndex";
import {Entypo, FontAwesome6, Ionicons} from "@expo/vector-icons";
import Animated, {useAnimatedStyle, useSharedValue, withSpring,} from "react-native-reanimated";

const data = [
    { id: '3', image: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg') },
    { id: '2', image: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg') },
    { id: '4', image: require('../../assets/images/services/anthony-tran-Sd9A6NVHsd4-unsplash.jpg') },
    { id: '5', image: require('../../assets/images/services/content-pixie-9l7r-n1zt-Y-unsplash.jpg') },
    { id: '6', image: require('../../assets/images/services/drew-dizzy-graham-cTKGZJTMJQU-unsplash.jpg') },
    // Add more images as needed
];

const HomePage = () => {

    const Card = ({ item, navigation }) => {
        return (
            <TouchableOpacity
                // onPress={() => navigation.navigate('Details', { image: item.image, id: item.id })}
                style={styles.card}
            >
                <Image source={item.image} style={styles.image2} resizeMode="cover" />
                <Text style={styles.cardText}>Card {item.id}</Text>
            </TouchableOpacity>
        );
    };

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
                    <Text style={{fontSize: hp(1.8), fontWeight: themes.fonts.medium}}>+94765341860</Text>
                    <View style={{height: 20}}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Entypo name="facebook" size={22} color={themes.colors.primaryDark}
                                style={{paddingHorizontal: 5}}/>
                        <Entypo name="instagram" size={22} color={themes.colors.primaryDark}
                                style={{paddingHorizontal: 5}}/>
                        <FontAwesome6 name="x-twitter" size={22} color={themes.colors.primaryDark}
                                      style={{paddingHorizontal: 5}}/>
                        <Entypo name="linkedin" size={22} color={themes.colors.primaryDark}
                                style={{paddingHorizontal: 5}}/>
                        <Entypo name="youtube" size={22} color={themes.colors.primaryDark}
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
                    <View style={styles.container}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <Card item={item}  />}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>


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
        fontWeight: themes.fonts.extraBold,
        fontSize: hp(3),
    },
    subHeadingText: {
        color: themes.colors.text,
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
        fontWeight: themes.fonts.extraBold,
        fontSize: hp(2.5),
        color: themes.colors.primaryDark,
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
    card: {
        width:wp(30),
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: themes.colors.primary,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    image2: {
        width: '100%',
        height: hp(15),
    },
    cardText: {
        color:'white',
        fontWeight:themes.fonts.bold,
        padding: 10,
        textAlign: 'center',
    },
});

export default HomePage;
