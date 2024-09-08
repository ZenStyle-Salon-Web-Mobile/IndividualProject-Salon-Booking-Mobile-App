import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, Image} from 'react-native';
import {Video} from 'expo-av';
import {hp} from "../../helpers/common";
import Marquee from 'react-native-marquee';


const {width, height} = Dimensions.get('window');

const logos = [
    require('../../assets/images/gallery/happy-womens-day-celebration-card-with-flowers-line-face.png'),
    require('../../assets/images/gallery/gradient-hair-salon-logo-template.png'),
    require('../../assets/images/gallery/gradient-hair-salon-logo-template (1).png'),
    require('../../assets/images/gallery/hand-drawn-happy-women-s-day-background.png'),
    require('../../assets/images/gallery/nail-salon-logo-template-design.png'),
    require('../../assets/images/gallery/spa-floral-badge.png'),
    // Add more logos from your local assets directory
];

const Gallery = () => {
    const videoRef = useRef(null);

    return (
        <View style={styles.container}>
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
                <View style={styles.containerMarq}>
                    <Marquee
                        style={styles.marquee}
                        duration={100000} // Adjust duration based on speed
                        marqueeOnStart
                    >
                        {logos.map((logo, index) => (
                            <Image key={index} source={logo} style={styles.logo}/>
                        ))}
                    </Marquee>
                </View>
            </View>

            {/* Additional Elements */}
            <View style={styles.additionalContent}>
                <Text style={styles.textContent}>Additional Text Content 1</Text>
                <Text style={styles.textContent}>Additional Text Content 2</Text>
                <Text style={styles.textContent}>Additional Text Content 3</Text>
                {/* Add more elements as needed */}
            </View>

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
    containerMarq: {

        width: width,
        height: 100, // Adjust height based on your logo size
       marginTop: 10,
        backgroundColor: '#c7ecee',
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
});

export default Gallery;

