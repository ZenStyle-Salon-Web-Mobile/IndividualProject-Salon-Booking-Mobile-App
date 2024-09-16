import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, Image, ScrollView} from 'react-native';
import {Video} from 'expo-av';
import {getColumnCount, hp, wp} from "../../helpers/common";
import Marquee from 'react-native-marquee';
import ImageGrid from "../../components/ImageGrid";
import Svg, {Defs, LinearGradient, Rect, Stop} from "react-native-svg";
import imageMapping from "../../components/imageMapping";


const {width, height} = Dimensions.get('window');

const logos = [
    require('../../assets/images/gallery/nail-salon-logo-template-design.png'),
    require('../../assets/images/gallery/happy-womens-day-celebration-card-with-flowers-line-face.png'),
    require('../../assets/images/gallery/nail-salon-logo-template-design.png'),
    require('../../assets/images/gallery/nail-salon-logo-template-design.png'),
    require('../../assets/images/gallery/nail-salon-logo-template-design.png'),
    require('../../assets/images/gallery/nail-salon-logo-template-design.png'),
    require('../../assets/images/gallery/nail-salon-logo-template-design.png'),
    require('../../assets/images/gallery/nail-salon-logo-template-design.png'),
    require('../../assets/images/gallery/nail-salon-logo-template-design.png'),
    require('../../assets/images/gallery/gradient-hair-salon-logo-template.png'),
    require('../../assets/images/gallery/hand-drawn-happy-women-s-day-background.png'),
    require('../../assets/images/gallery/toa-heftiba-ewpTmN9pQJM-unsplash.jpg'),
    require('../../assets/images/gallery/spa-floral-badge.png'),
    // Add more logos from your local assets directory
];

const Gallery = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImage();
    }, []);

    const fetchImage = async () => {
        const imageKeys = ['image1', 'image2', 'image3','image4', 'image5', 'image6','image7', 'image8' ]; // Keys matching the ones in imageMapping.js
        const loadedImages = imageKeys.map(key => imageMapping[key]);
        setImages(loadedImages);
    }

    const videoRef = useRef(null);
    const columns = getColumnCount();

    return (
        <View style={styles.container}>
            <Svg height="100%" width="100%" style={styles.gradientBackground}>
                <Defs>
                    <LinearGradient id="grad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <Stop offset="0%" stopColor="#1a000e" stopOpacity="1" />
                        <Stop offset="12.5%" stopColor="#531d3a" stopOpacity="1" />
                        <Stop offset="25%" stopColor="#8c3a66" stopOpacity="1" />
                        <Stop offset="37.5%" stopColor="#c55792" stopOpacity="1" />
                        <Stop offset="50%" stopColor="#ff74bf" stopOpacity="1" />
                        <Stop offset="62.5%" stopColor="#ff90cc" stopOpacity="1" />
                        <Stop offset="75%" stopColor="#ffacd9" stopOpacity="1" />
                        <Stop offset="87.5%" stopColor="#ffc8e6" stopOpacity="1" />
                        <Stop offset="100%" stopColor="#ffe5f3" stopOpacity="1" />
                    </LinearGradient>
                </Defs>
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
            </Svg>
            <ScrollView contentContainerStyle={{gap: 15}}>
                <View>
                    {/* Video Component */}
                    <Video
                        ref={videoRef}
                        source={require('../../assets/3997198-uhd_4096_2160_25fps.mp4')} // Replace with your actual video file path
                        style={styles.backgroundVideo}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                    />

                    {/* Text Overlay */}
                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>Experience {"\n"} the Elegance of {"\n"}ZenStyle
                            Salon</Text>
                    </View>
                    {/*<View style={styles.containerMarq}>*/}
                    {/*    <Marquee*/}
                    {/*        style={styles.marquee}*/}
                    {/*        duration={100000} // Adjust duration based on speed*/}
                    {/*        marqueeOnStart*/}
                    {/*    >*/}
                    {/*        {logos.map((logo, index) => (*/}
                    {/*            <Image key={index} source={logo} style={styles.logo}/>*/}
                    {/*        ))}*/}
                    {/*    </Marquee>*/}
                    {/*</View>*/}
                </View>

                {/* Additional Elements */}
                <View style={styles.gridContainor}>
                    {images.length > 0 ? (
                        <ImageGrid images={images} /> // Custom component to display images in a grid
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </View>

            </ScrollView>


        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundVideo: {
        width: width,
        height: hp(30),
        position: 'relative', // Ensure video container is positioned correctly
        top: 0,
        left: 0,
    },
    overlay: {
        position: 'absolute',
        top: hp(15), // Adjust the position as needed
        left: '10%', // Adjust the position as needed
    },
    overlayText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },

    marquee: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 100, // Adjust width based on your logo size
        height: 100, // Adjust height based on your logo size
        borderRadius: 50,
        marginHorizontal: 20,
    },
    additionalContent: {
        padding: 20,
    },
    textContent: {
        fontSize: 18,
        marginBottom: 10,
    },
    gridContainor: {
        minHeight: 3,
        width: wp(100)
    },
    gradientBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

export default Gallery;

