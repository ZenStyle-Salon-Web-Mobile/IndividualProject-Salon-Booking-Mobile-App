import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, Animated } from 'react-native';
import { hp, wp } from "../../helpers/common";
import { themes } from "../../constants/themes";
import Banner from "../../components/Banner";
import Carousel from "react-native-reanimated-carousel";
import { sale } from "../../components/reusable/Sale";
import OfferButton from "../../components/OfferButton";

const Promotions = () => {
    const [activeSlide, setActiveSlide] = useState(0); // Tracks current slide for pagination
    const carouselRef = useRef();
    const animatedValue = useRef(new Animated.Value(0)).current; // Animated value for pagination dots

    // Function to handle slide change and animate pagination
    const handleSnapToItem = (index) => {
        setActiveSlide(index);
        Animated.spring(animatedValue, {
            toValue: index,
            useNativeDriver: false,
        }).start();
    };

    // Animated dot style
    const getDotStyle = (index) => {
        const isActive = index === activeSlide;
        const scale = animatedValue.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.8, 1.5, 0.8],
            extrapolate: 'clamp',
        });
        return { transform: [{ scale }] };
    };

    // Render the banner carousel
    const renderBannerCarousel = (promoData) => (
        <View style={styles.carouselContainer}>
            <Carousel
                ref={carouselRef}
                loop
                autoPlay
                autoPlayInterval={3000}
                width={wp(90)}
                height={hp(20)} // 50% of screen height
                data={promoData} // Pass the promo data directly
                scrollAnimationDuration={500}
                renderItem={({ item }) => (
                    <View style={styles.bannerContainer}>
                        <Image source={item.imageUrl} style={styles.bannerImage} />
                        <OfferButton bottom={25} left={29}  />
                    </View>
                )}
                onSnapToItem={handleSnapToItem} // Updates active slide
            />
            <View style={styles.paginationContainer}>
                {promoData.map((_, index) => (
                    <Animated.View key={index} style={[styles.dot, getDotStyle(index)]}>
                        {index === activeSlide ? (
                            <View style={styles.activeDot} />
                        ) : (
                            <View style={styles.inactiveDot} />
                        )}
                    </Animated.View>
                ))}
            </View>
        </View>
    );

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={styles.container}>

            <Banner text={"SALE 75% OFF"} backgroundColor={themes.colors.darkLight} />
            {renderBannerCarousel(sale.firstPromo)}


            <Banner text={"SALE 50% OFF"} backgroundColor={themes.colors.primary} />
            {renderBannerCarousel(sale.SecPromo)}


            <Banner text={"SALE 25% OFF"} backgroundColor={themes.colors.dark} textColor={themes.colors.darkLight} />
            {renderBannerCarousel(sale.thirdPromo)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe5f3',
        marginBottom: 10,
    },
    carouselContainer: {
        alignItems: 'center',
    },
    bannerContainer: {
        height: hp(20),
        width: wp(90), // Adjust width for padding effect
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
        borderRadius: 20, // Rounded corners
        paddingHorizontal: 15, // Horizontal padding
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20, // Rounded corners
        resizeMode: 'cover',
    },
    paginationContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    activeDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'black', // Dot style
        marginHorizontal: 5,
    },
    inactiveDot: {
        width: 20, // Dash style
        height: 10,
        backgroundColor: 'gray', // Dash style
        marginHorizontal: 2,
        borderRadius: 5, // Optional rounded corners for dashes
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Promotions;
