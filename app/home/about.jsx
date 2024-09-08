import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {hp} from "../../helpers/common";
import {theme} from "../../constants/theme";
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import {FontAwesome} from "@expo/vector-icons";


const { width } = Dimensions.get('window');
const testimonials = [
    {
        id: 1,
        text: "Hi Liyo Team, today is my first experience with you. I had a feather haircut and straightened my hair today. My haircut was done by one of the males. I don’t know his name but he was a friendly person. I especially want to say my hair was straightened by Ms. Ruchira and Ms. Dilshani. They were very friendly, and they did a great job.",
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

    const renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                {/* Quotation Icon */}
                <View style={styles.quoteIconContainer}>
                    <FontAwesome name="quote-right" size={50} color="gray" />
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
                    {Array.from({ length: item.rating }, (_, i) => (
                        <FontAwesome key={i} name="star" size={24} color="gold" />
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
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{fontSize:hp(5),fontWeight:theme.fonts.extraBold}}>
                ZenStyle Salon
            </Text>
            <Text style={{fontSize:hp(2),fontWeight:theme.fonts.extraBold,marginVertical:10}}>
                Our Journey
            </Text>
            <Text style={{textAlign: 'center',paddingHorizontal:20,fontSize:hp(1.9),fontWeight:theme.fonts.medium,}}>In the 21st century, beauty and make up are like the wheels of a cart or the two sides of a coin.
                Women are beautiful in themselves; but a little make-up does help a lot and it keeps one to make the day
                better and happier. Every woman wants to be pretty whether she’s young or old so the beauty salon is the
                place to go. Beauty salons are also like a temple; however, the difference is that we go to worship in
                the temple and in the beauty salon we go to be worshipped by the beauticians and by the other people
                around.
                The beauty salon has become an almost iconic figure in Western culture and Southeast Asian culture as
                well as in modern generation. The beauty salon is where a woman goes to have their hair and nails done,
                but is also a …</Text>
            <Text style={{fontSize:hp(2),fontWeight:theme.fonts.extraBold,marginVertical:10}}>
                Our Vision and Mission
            </Text>
            <Text style={{textAlign: 'center',paddingHorizontal:20,fontSize:hp(1.9),fontWeight:theme.fonts.medium,}}>In the 21st century, beauty and make up are like the wheels of a cart or the two sides of a coin.
                Women are beautiful in themselves; but a little make-up does help a lot and it keeps one to make the day
                better and happier. Every woman wants to be pretty whether she’s young or old so the beauty salon is the
                place to go. Beauty salons are also like a temple; however, the difference is that we go to worship in
                the temple and in the beauty salon we go to be worshipped by the beauticians and by the other people
                around.
                The beauty salon has become an almost iconic figure in Western culture and Southeast Asian culture as
                well as in modern generation. The beauty salon is where a woman goes to have their hair and nails done,
                but is also a …</Text>
            <View style={styles.carousel}>
                <Carousel
                    data={testimonials}
                    renderItem={renderItem}
                    width={width}
                    height={300}
                    onSnapToItem={(index) => setActiveSlide(index)}
                    loop={false}
                    style={{ flexGrow: 0 }}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#d7d7d7',
        borderRadius: 30,
        padding: 20,
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },
    quoteIconContainer: {
        marginBottom: 10,
    },
    reviewText: {
        fontSize: 16,
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
    carousel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default About;
