import React from 'react';
import {View, Text, FlatList, Image, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {hp, wp} from "../../helpers/common";
import {theme} from "../../constants/theme";
import Banner from "../../components/Banner";
import Carousel from "react-native-reanimated-carousel";

// Get the width of the screen
const {width, height} = Dimensions.get('window');

// Sample data for firstPromo
const firstPromo = [
    {
        id: '1',
        imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

    },
    {
        id: '2',
        imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

    },
    {
        id: '3',
        imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

    },
    {
        id: '4',
        imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

    },
];

const secondPromo = [
    {
        id: '1',
        imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

    },
    {
        id: '2',
        imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

    },
    {
        id: '3',
        imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

    },
    {
        id: '4',
        imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

    },
];

const thirdPromo = [
    {
        id: '1',
        imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

    },
    {
        id: '2',
        imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

    },
    {
        id: '3',
        imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

    },
    {
        id: '4',
        imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

    },
];

const Promotions = () => {

    // Render each banner item
    const renderBannerItem = ({item}) => (
        <View style={styles.subContainer}>
            <Carousel
                loop
                autoPlay
                autoPlayInterval={3000}
                width={screenWidth}
                height={screenWidth * 0.5} // 50% of screen height
                data={banners}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View style={styles.bannerContainer}>
                        <Image source={item.imageUrl} style={styles.bannerImage} />
                    </View>
                )}
                onSnapToItem={(index) => setActiveSlide(index)} // Updates active slide
            />
            {/* Pagination */}
            <Pagination
                dotsLength={banners.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.paginationContainer}
                dotStyle={styles.activeDot}
                inactiveDotStyle={styles.inactiveDot}
            />
        </View>
        // <View style={styles.bannerContainer}>
        //     <Image source={item.imageUrl} style={styles.bannerImage}/>
        // </View>
    );

    return (
        <ScrollView style={styles.container}>
            <Banner
                text={"SALE 75% OFF"}
                backgroundColor={theme.colors.darkLight}
            />
            <FlatList
                data={firstPromo}
                renderItem={renderBannerItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <Banner
                text={"SALE 50% OFF"}
                backgroundColor={theme.colors.primary}
            />
            <FlatList
                data={firstPromo}
                renderItem={renderBannerItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <Banner
                text={"SALE 25% OFF"}
                backgroundColor={theme.colors.dark}
                textColor={theme.colors.darkLight}
            />
            <FlatList
                data={firstPromo}
                renderItem={renderBannerItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe5f3',
        marginBottom: 10,
    },
    bannerContainer: {
        height: hp(20),
        width: wp(100),  // Full width banner
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.radius.xxl

    },
    bannerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',  // Image covers the container
    },
});

export default Promotions;
