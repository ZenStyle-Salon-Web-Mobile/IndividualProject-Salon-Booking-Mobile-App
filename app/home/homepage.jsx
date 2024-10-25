import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import {themes} from "../../constants/themes";
import {hp, wp} from "../../helpers/common";
import Carousel from 'react-native-reanimated-carousel';
import {sliderImages} from "../../constants/imageIndex";
import {Entypo, FontAwesome, FontAwesome6, Ionicons} from "@expo/vector-icons";
import Animated, {useAnimatedStyle, useSharedValue, withSpring,} from "react-native-reanimated";
import HairSpecialistCont from "../../components/reusable/HairSpecialistCont";

const data = [
    {
        id: 'Acne',
        image: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
        price: 'Rs.5000.00',
        duration: '30 mins',
        rating: 4.5,
    },
    {
        id: 'Facial',
        image: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),
        price: 'Rs.6000.00',
        duration: '45 mins',
        rating: 4.1,
    },
    {
        id: 'Makeup',
        image: require('../../assets/images/services/anthony-tran-Sd9A6NVHsd4-unsplash.jpg'),
        price: 'Rs.7000.00',
        duration: '60 mins',
        rating: 5.1,
    },
    {
        id: 'Rebounding',
        image: require('../../assets/images/services/content-pixie-9l7r-n1zt-Y-unsplash.jpg'),
        price: 'Rs.7000.00',
        duration: '60 mins',
        rating: 5.1,

    },
    {
        id: 'Curly',
        image: require('../../assets/images/services/drew-dizzy-graham-cTKGZJTMJQU-unsplash.jpg'),
        price: 'Rs.7000.00',
        duration: '60 mins',
        rating: 5.1,

    },
    // Add more images as needed
];

const HomePage = () => {

    const saleEndDate = new Date();
    saleEndDate.setDate(saleEndDate.getDate() + 2);
    saleEndDate.setHours(23, 59, 59);

    const [timeUnits, setTimeUnits] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeUnits = (timeDifference: number) => {
            const seconds = Math.floor(timeDifference / 1000);
            setTimeUnits({
                days: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
                hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
                minutes: Math.floor((seconds % (60 * 60)) / 60),
                seconds: seconds % 60,
            })
        }

        const updateCountdown = () => {
            const currentDate = new Date().getTime();
            const expiryTime = saleEndDate.getTime();
            const timeDifference = expiryTime - currentDate;

            if (timeDifference <= 0) {
                calculateTimeUnits(0);
            } else {
                calculateTimeUnits(timeDifference);
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time: number) => {
        return time.toString().padStart(2, "0");
    };

    const Card = ({item, navigation}) => {
        return (
            <TouchableOpacity
                // onPress={() => navigation.navigate('Details', { image: item.image, id: item.id })}
                style={styles.card}
            >
                <Image source={item.image} style={styles.image2} resizeMode="cover"/>
                <View style={styles.addIcon}>
                    <FontAwesome6 name="add" size={20} color="black"/>
                </View>
                <Text style={styles.cardText}> {item.id}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <FontAwesome
                        name={"star"} // Filled or outlined stars
                        size={20}
                        color={"#FFD700"} // Gold for filled, gray for outline
                        style={{
                            shadowColor: '#000',
                            shadowOpacity: 0.2,
                            shadowRadius: 5,
                            shadowOffset: {width: 0, height: 2},
                            elevation: 2,
                        }}
                    />
                    <Text style={styles.rating}>
                        {item.rating}
                    </Text>
                    <Text style={styles.durationText}>{item.duration}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                    <Text style={styles.priceText}>{item.price}</Text>

                </View>


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

            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <Text style={styles.subTopic}>Special Offers</Text>
                    <View style={styles.timer}>
                        <Ionicons name='time-outline' size={16} color={'black'}/>
                        <Text
                            style={styles.timerText}>{`${formatTime(timeUnits.days)}:${formatTime(timeUnits.hours)}:${formatTime(timeUnits.minutes)}:${formatTime(timeUnits.seconds)}`}</Text>
                    </View>
                </View>

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
                    <View style={{height: hp(23)}}>
                        <FlatList
                            data={data}
                            renderItem={({item}) => <Card item={item}/>}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>


                    <Text style={styles.subTopic}>Hair Specialist</Text>
                    <View style={{height: hp(21)}}>
                        <HairSpecialistCont/>
                    </View>
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
        marginTop: 10,
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
        marginBottom: 20,  // Increased space between the carousel and topics

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
        width: wp(55),
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: themes.colors.primary,
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
        paddingBottom: 2,

    },
    image2: {
        width: '100%',
        height: hp(15),
    },
    cardText: {
        color: 'white',
        fontWeight: themes.fonts.bold,
        textAlign: 'center',
        fontSize: hp(2),
    },
    addIcon: {
        position: 'absolute',
        top: 115,
        right: 12,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: themes.colors.primary,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
    },
    priceText: {
        fontWeight: themes.fonts.bold,
        color: 'white',
        fontSize: hp(2.5),
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2},
        elevation: 2,
        fontStyle: 'italic',
    },
    durationText: {
        fontWeight: themes.fonts.bold,
        color: '#666',
        fontSize: hp(1.8),

    },
    rating: {
        paddingHorizontal: 5,
        color: '#666',
        fontWeight: themes.fonts.bold,
        fontSize: hp(1.5),
    },
    timer: {
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#F4CE14',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 12,
    },
    timerText: {
        color: '#333',
        fontWeight: '500'
    }
});

export default HomePage;
