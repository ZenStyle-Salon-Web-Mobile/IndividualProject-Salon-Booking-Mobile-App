import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {hp} from "../../helpers/common";
import {themes} from "../../constants/themes";
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import {FontAwesome} from "@expo/vector-icons";
import Svg, {Defs, LinearGradient, Rect, Stop} from "react-native-svg";
import {StatusBar} from "expo-status-bar";




const {width} = Dimensions.get('window');
const testimonials = [
    {
        id: 1,
        text: "Had an amazing experience. The staff was very friendly, and I loved the results of my haircut and color. I will definitely come back.",
        name: 'Shalika Prasadi',
        rating: 5,
    },
    {
        id: 2,
        text: "Had an amazing experience. The staff was very friendly, and I loved the results of my haircut and color. I will definitely come back.",
        name: 'Jane Doe',
        rating: 4,
    },
    // Add more testimonials as needed
];

const About = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const renderItem = ({item}) => {
        return (
            <View style={styles.card}>
                {/* Quotation Icon */}
                <View style={styles.quoteIconContainer}>
                    <FontAwesome name="quote-right" size={30} color="#000000"/>
                </View>

                {/* Review Text */}
                <Text style={styles.reviewText}>
                    {item.text}
                </Text>

                {/* Name of Reviewer */}
                <Text style={styles.reviewerName}>
                    {item.name}
                </Text>

                {/* Star Rating */}
                <View style={styles.ratingContainer}>
                    {Array.from({length: item.rating}, (_, i) => (
                        <FontAwesome key={i} name="star" size={24} color="gold"/>
                    ))}
                </View>

                {/* Footer */}
                <View style={styles.cardFooter}>
                    <Text style={styles.footerText}>Read More</Text>
                </View>
            </View>
        );
    };

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

            {/* ScrollView for the Text Content */}
                <Text style={{fontSize: hp(5), fontWeight: themes.fonts.extraBold, paddingVertical: 10}}>
                    ZenStyle Salon
                </Text>
                <ScrollView contentContainerStyle={styles.textContainer}>
                    <Text style={{fontSize: hp(2), fontWeight: themes.fonts.extraBold, marginVertical: 10}}>
                        Our Journey
                    </Text>
                    <Text style={styles.textContent}>
                        ZenStyle was founded on June 10th, 2024, by Ramesh Kaushika at High level Road,
                        Wijerama, with a vision to provide exceptional beauty services. In 2012, to better serve our growing
                        clientele, we expanded our services and relocated to a larger, more sophisticated space at
                        Jambugasmulla, Nugegoda. This move allowed us to offer a wider range of services and enhance our
                        client experience, further establishing our reputation for excellence in the beauty industry.
                    </Text>
                    <Text style={styles.textTitle}>
                        Our Vision and Mission
                    </Text>
                    <Text style={styles.textContent}>
                        <Text style={{fontWeight: themes.fonts.bold}}> Our vision</Text>
                        is to set the standard for beauty and wellness in Sri Lanka by combining cutting-edge
                        techniques with a personalized touch. We are dedicated to continually improving our services and
                        facilities to meet the evolving needs of our clients.
                        {"\n"}{"\n"}
                        <Text style={{fontWeight: themes.fonts.bold}}> Our mission</Text>
                        is to provide exceptional beauty services that enhance the natural beauty of our
                        clients. We strive to create a welcoming and relaxing environment where every client feels valued
                        and pampered.
                    </Text>
                    <Text style={styles.textTitle}>
                        Who We Are
                    </Text>
                    <Text style={styles.textContent}>
                        The foremost cosmetology clinic in Sri Lanka, ZenStyle Salon offers cutting-edge,
                        non-invasive medical treatments for all skin, hair, and body care needs for both men and women. Led
                        by the mother-daughter duo, Prof. Ramani Arsecularatne, and Dr. Shanika Arsecularatne brings with
                        them over 25 years of industry expertise.
                    </Text>
                    <Text style={styles.textTitle}>
                        Our Technologies
                    </Text>
                    <Text style={styles.textContent}>
                        We use state-of-the-art US Food & Drug Administration (US FDA) approved technology and treatments,
                        ensuring safety and accountability in all our services. Our treatments are upgraded by the latest
                        research and developments in the industry. The ZenStyle Salon
                        utilizes the most up-to-date technology from global leaders in cosmetology and skin care, while our
                        staff undergoes regular international training and refreshers.
                    </Text>
                    <Text style={styles.textTitle}>
                        Our Commitment
                    </Text>
                    <Text style={styles.textContent}>
                        At ZenStyle Salon, your satisfaction is our top priority. We are committed to maintaining the
                        highest
                        standards of quality and hygiene in all our services. We continuously invest in training and
                        development to ensure our team stays at the forefront of industry trends and innovations.
                    </Text>


                    {/* Add more text sections as needed */}
                </ScrollView>

                {/* Carousel Fixed at the Bottom */}
                <View style={styles.carouselContainer}>
                    <Carousel
                        data={testimonials}
                        renderItem={renderItem}
                        width={width}
                        height={400}
                        onSnapToItem={(index) => setActiveSlide(index)}
                        loop={true}
                    />
                </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,

    },
    textContent: {
        textAlign: 'center',
        fontSize: hp(1.6),
        fontWeight: themes.fonts.medium,
        marginBottom: 20,
    },
    textTitle: {
        fontSize: hp(2),
        fontWeight: themes.fonts.extraBold,
        marginVertical: 10,
    },
    carouselContainer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: 270, // Adjust as per your carousel height
    },
    card: {
        backgroundColor: '#fb008d',
        borderRadius: 30,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.9,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 5},
        elevation: 5,
    },
    quoteIconContainer: {
        marginBottom: 10,
    },
    reviewText: {
        fontWeight: themes.fonts.medium,
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    reviewerName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    gradientBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

export default About;
