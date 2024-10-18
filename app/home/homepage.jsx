import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {theme} from "../../constants/theme";
import {hp, wp} from "../../helpers/common";
import Carousel from 'react-native-reanimated-carousel';
import {sliderImages} from "../../constants/imageIndex";
import {Entypo, FontAwesome6, Ionicons} from "@expo/vector-icons";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {measure, useAnimatedRef, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";


const HomePage = () => {

    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)
    const scale = useSharedValue(0)
    const boxWidth = useSharedValue(0)
    const boxHeight = useSharedValue(0)
    const opacity = useSharedValue(0.3)

    const boxRef = useAnimatedRef()

    const tap = Gesture.Tap().onStart((event) => {
        opacity.value = 0.3

        translateX.value = event.x
        translateX.value = event.y
        scale.value = 0
        scale.value = withTiming(1, {duration: 1000})
    }).onFinalize(()=>{
        opacity.value = withTiming(0, {duration: 1000})
    })

    const animatedCircle = useAnimatedStyle(() => {

        const boxLayout = measure(boxRef)

        console.log("Box Layout", boxLayout)

        if (boxLayout) {
            boxWidth.value = boxLayout.width
                boxHeight.value = boxLayout.height
        }

        const radius = Math.sqrt(boxWidth.value ** 2 + boxHeight.value ** 2)
        const width = radius * 2
        const height = radius * 2

        return {
            width,
            height,
            borderRadius: radius,
            backgroundColor: theme.colors.roseLight,
            position: "absolute",
            top: 0,
            left: 0,
            opacity: opacity.value,
            transform: [{translateX: translateX.value - radius}, {translateY: translateY.value - radius}, {scale: scale.value}]


        }
    })

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
                <View style={{paddingTop: 10, width: 150}}>
                    <Text style={styles.subHeadingText}>CALL US NOW</Text>
                    <Text style={{fontSize: hp(1.8), fontWeight: theme.fonts.medium}}>+94765341860</Text>
                    <Text style={{fontSize: hp(1.8), fontWeight: theme.fonts.medium}}>+94765341860</Text>
                    <Text style={{fontSize: hp(1.8), fontWeight: theme.fonts.medium}}>+94765341860</Text>
                    <Text style={{fontSize: hp(1.8), fontWeight: theme.fonts.medium}}>+94765341860</Text>
                    <View style={{height: 20}}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Entypo name="facebook" size={22} color={theme.colors.primaryDark}/>
                        <Entypo name="instagram" size={22} color={theme.colors.primaryDark}/>
                        <FontAwesome6 name="x-twitter" size={22} color={theme.colors.primaryDark}/>
                        <Entypo name="linkedin" size={22} color={theme.colors.primaryDark}/>
                        <Entypo name="youtube" size={22} color={theme.colors.primaryDark}/>
                    </View>
                </View>
            </View>

            <ScrollView>
                <Text style={styles.subTopic}>Special Offers</Text>
                {/* Carousel Section */}
                <GestureDetector gesture={tap}>
                    <View style={styles.boxView}>
                        <Animated.View style={styles.carouselContainer} ref={boxRef}>
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
                            <Animated.View style={animatedCircle}>
                            </Animated.View>
                        </Animated.View>
                    </View>

                </GestureDetector>


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

    boxView: {
        shadowColor: "#2c2c2c",
        shadowOpacity: 0.3,
        textShadowRadius: 8,
    },
    carouselContainer: {
        width: wp(100),// Image container width with some space on sides
        height: hp(25), // 25% height
        marginVertical: 10,
        borderRadius: 20,

        shadowOffset:
            {width: 8, height: 2},
        overflow: 'hidden',
    },
    imageContainer: {
        width: wp(100) - 40, // Image container width with some space on sides
        height: hp(25), // 25% height
        marginHorizontal: 10, // Horizontal space between images
        borderRadius: 20,

        shadowOffset:
            {width: 8, height: 2}
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
        marginVertical: 15,  // Increased space between each topic
    },
});

export default HomePage;
