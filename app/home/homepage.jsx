import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Linking} from 'react-native';
import {themes} from "../../constants/themes";
import {hp, wp} from "../../helpers/common";
import Carousel from 'react-native-reanimated-carousel';
import {sliderImages} from "../../constants/imageIndex";
import {Entypo, FontAwesome, FontAwesome6, Ionicons} from "@expo/vector-icons";
import Animated, {useAnimatedStyle, useSharedValue, withSpring,} from "react-native-reanimated";
import HairSpecialistCont from "../../components/reusable/HairSpecialistCont";
import TimerComp from "../../components/reusable/TimerComp";
import {router} from "expo-router";
import OfferButton from "../../components/OfferButton";



const data = [
    {
        id: 'Acne',
        image: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
        price: 'Rs.5000.00',
        duration: '30 mins',
        rating: 4.5,
        description:'The youngest Sri Lankan to have qualified in Medical Cosmetology, Dr. Arsecularatne is also an Aesthetic Medicine and Anti-Aging Specialist. Teaming with knowledge, experience, and new technology, she doesn’t waver in creating new inventions that continue to inspire & inflame the industry. ',
    },
    {
        id: 'Facial',
        image: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),
        price: 'Rs.6000.00',
        duration: '45 mins',
        rating: 4.1,
        description:'The youngest Sri Lankan to have qualified in Medical Cosmetology, Dr. Arsecularatne is also an Aesthetic Medicine and Anti-Aging Specialist. Teaming with knowledge, experience, and new technology, she doesn’t waver in creating new inventions that continue to inspire & inflame the industry. ',
    },
    {
        id: 'Makeup',
        image: require('../../assets/images/services/anthony-tran-Sd9A6NVHsd4-unsplash.jpg'),
        price: 'Rs.7000.00',
        duration: '60 mins',
        rating: 5.1,
        description:'The youngest Sri Lankan to have qualified in Medical Cosmetology, Dr. Arsecularatne is also an Aesthetic Medicine and Anti-Aging Specialist. Teaming with knowledge, experience, and new technology, she doesn’t waver in creating new inventions that continue to inspire & inflame the industry. ',
    },
    {
        id: 'Rebounding',
        image: require('../../assets/images/services/content-pixie-9l7r-n1zt-Y-unsplash.jpg'),
        price: 'Rs.7000.00',
        duration: '60 mins',
        rating: 5.1,
        description:'The youngest Sri Lankan to have qualified in Medical Cosmetology, Dr. Arsecularatne is also an Aesthetic Medicine and Anti-Aging Specialist. Teaming with knowledge, experience, and new technology, she doesn’t waver in creating new inventions that continue to inspire & inflame the industry. ',

    },
    {
        id: 'Curly',
        image: require('../../assets/images/services/drew-dizzy-graham-cTKGZJTMJQU-unsplash.jpg'),
        price: 'Rs.7000.00',
        duration: '60 mins',
        rating: 5.1,
        description:'The youngest Sri Lankan to have qualified in Medical Cosmetology, Dr. Arsecularatne is also an Aesthetic Medicine and Anti-Aging Specialist. Teaming with knowledge, experience, and new technology, she doesn’t waver in creating new inventions that continue to inspire & inflame the industry. ',

    },
    // Add more images as needed
];

const HomePage = () => {

    const makePhoneCall = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`)
            .catch((err) => console.log('Error:', err));
    };


    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading user data, e.g., from AsyncStorage or an API
        const fetchUserData = async () => {
            // Simulated user data
            const user = {
                id: 1,
                name: 'Ramesh Kaushika',
                gender: 'Male',
                email: 'ramesh.kaushika2245.com',
                phoneNumber: '+94765341860',
                image: 'https://xsgames.co/randomusers/assets/avatars/male/77.jpg',
            };
            setLoggedInUser(user);
            setLoading(false); // Data loading completed
        };

        fetchUserData();
    }, []);




    const Card = ({item, navigation}) => {
        return (
            <TouchableOpacity
                onPress={() => router.push(`/listing/${item.id}?image=${item.image}&rating=${item.rating}&duration=${item.duration}&price=${item.price}&description=${item.description}`)}
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
                        <View style={{marginVertical: 10, width: 50, height: 50, borderRadius: 50}}>
                            {loggedInUser && (
                                <TouchableOpacity
                                    onPress={() => router.push({
                                    pathname: '/listing/[id]profile',
                                    params: { user: JSON.stringify(loggedInUser) } // Pass user data as a JSON string
                                })}
                                    >
                                    <Image
                                        source={{
                                            uri : loggedInUser.image
                                        }}
                                        style={{width: 50, height: 50, borderRadius: 50}}
                                    />
                                </TouchableOpacity>
                            )}
                        </View>

                        <Text style={styles.subHeadingText}>Hello Ramesh Kaushika</Text>
                        <Text style={styles.headingText}>{greeting}</Text>

                    </View>
                    <View style={{paddingTop: 10, width: wp(30), alignItems: 'flex-end', alignContent: 'space-between'}}>
                        <TouchableOpacity onPress={() => makePhoneCall('+94765341860')}>
                            <Text style={styles.subHeadingText}>CALL US NOW</Text>
                            <Text style={{fontSize: hp(1.8), fontWeight: themes.fonts.medium}}>+94765341860</Text>
                        </TouchableOpacity>

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
                <TouchableOpacity style={styles.booknowButton} onPress={() => router.push("modal/booking")}>
                    <Text style={styles.booknowText}>BOOK NOW</Text>
                    <Text style={styles.booknowTextOutline}>BOOK NOW</Text>
                </TouchableOpacity>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <Text style={styles.subTopic}>Special Offers</Text>
                        <View style={styles.timer}>
                            <Ionicons name='time-outline' size={16} color={'black'}/>
                            <TimerComp/>
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
                                <>
                                    <ItemCard item={item}/>
                                    <OfferButton  bottom={15} left={20} />
                                </>

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
        backgroundColor: '#ff90cc',
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
        color: '#002440',
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
    booknowButton: {
        marginVertical:12,
        width: wp(95),
        height: hp(7),
        backgroundColor: themes.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: themes.radius.xxl,
        elevation: 5, // For Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    booknowText: {
        textAlign: 'center',
        fontSize: hp(4),
        fontWeight: themes.fonts.extraBold,
        color: themes.colors.textLight,
        position: 'absolute', // Position text over outline
    },
    booknowTextOutline: {
        textAlign: 'center',
        fontSize: hp(4),
        fontWeight: themes.fonts.extraBold,
        color: 'black', // Outline color
        textShadowColor: 'white', // Shadow color for better contrast
        textShadowOffset: { width: 1, height: 1 }, // Shadow offset for outline
        textShadowRadius: 1, // Shadow blur radius for outline
        position: 'absolute', // Position this under the main text
    },


});

export default HomePage;
