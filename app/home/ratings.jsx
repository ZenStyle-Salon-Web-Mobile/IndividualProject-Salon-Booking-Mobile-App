import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, FlatList, Image} from 'react-native';
import {theme} from "../../constants/theme";
import {hp, wp} from "../../helpers/common";
import {FontAwesome} from "@expo/vector-icons";
import * as Progress from 'react-native-progress';
import ScreenWrapper from "../../components/ScreenWrapper";

const reviewsData = [
    {
        id: '1',
        name: 'Martin Luther',
        date: '2 days ago',
        rating: 4,
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
        id: '2',
        name: 'Johan Smith',
        date: '3 days ago',
        rating: 3,
        review: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        id: '3',
        name: 'Johan Smith',
        date: '3 days ago',
        rating: 3,
        review: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        id: '4',
        name: 'Johan Smith',
        date: '3 days ago',
        rating: 3,
        review: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },

];


const Ratings = () => {

    // Initial state for rating counts
    const [ratings, setRatings] = useState({
        excellent: 0,
        good: 0,
        average: 0,
        poor: 0,
        total: 0,  // Total ratings
    });

    const rating = 4.5;
    // Create an array for star rendering
    const totalStars = 5; // Assuming 5 stars
    const stars = [];

    // Loop through total stars to render filled and empty stars
    for (let i = 1; i <= totalStars; i++) {
        stars.push(
            <FontAwesome
                key={i}
                name={i <= rating ? 'star' : 'star-o'} // 'star' for filled, 'star-o' for empty
                size={30} // Size of the star
                color="#e7cc33" // Gold color for stars
                style={styles.star}
            />
        );
    }

    // Calculate percentages for progress bars
    const getPercentage = (count) => {
        return ratings.total === 0 ? 0 : (count / ratings.total) * 100;
    };


    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <View style={styles.ratingContainer}>
                    <Text style={{fontSize: hp(3.7)}}>Overall Rating</Text>
                    <Text style={{fontSize: hp(12), fontWeight: theme.fonts.bold}}>3.9</Text>
                    <View style={styles.starContainer}>
                        {stars}
                    </View>
                    <Text style={{fontSize: hp(2.3), fontWeight: theme.fonts.medium}}>Based on 20 reviews</Text>


                </View>
                {/* Progress Bars for Ratings */}
                <View style={styles.progressSection}>
                    <View style={styles.progressRow}>
                        <Text style={styles.label}>Excellent</Text>
                        <Progress.Bar progress={0.5} width={200} color="pink" />
                    </View>
                    <View style={styles.progressRow}>
                        <Text style={styles.label}>Good</Text>
                        <Progress.Bar progress={0.5} width={200} color="pink" />
                    </View>
                    <View style={styles.progressRow}>
                        <Text style={styles.label}>Average</Text>
                        <Progress.Bar progress={0.5} width={200} color="pink" />
                    </View>
                    <View style={styles.progressRow}>
                        <Text style={styles.label}>Poor</Text>
                        <Progress.Bar progress={0.5} width={200} color="pink" />
                    </View>
                </View>

                {/* Reviews List */}
                <FlatList
                    data={reviewsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.reviewCard}>
                            <Image source={{ uri: item.avatar }} style={styles.avatar} />
                            <View style={styles.reviewContent}>
                                <Text style={styles.name}>{item.name}</Text>
                                <View style={styles.starContainer}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FontAwesome key={star} name="star" size={20} color={star <= item.rating ? 'gold' : '#ccc'} />
                                    ))}
                                </View>
                                <Text style={styles.date}>{item.date}</Text>
                                <Text style={styles.review}>{item.review}</Text>
                            </View>
                        </View>
                    )}
                />
                <Pressable style={styles.reviewButton}>
                    <Text style={styles.reviewButtonText}>
                        Write a review
                    </Text>
                </Pressable>
            </View>
        </ScreenWrapper>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: wp(6),
    },
    reviewButton: {
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        padding: '5%',
        borderRadius: theme.radius.lg,
        marginBottom:20,
    },
    reviewButtonText: {
        fontSize: hp(2.2),
        color: '#ffffff',
        fontWeight: theme.fonts.semibold,
    },
    ratingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    starContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    star: {
        marginHorizontal: 6, // Add space between stars
    },
    progressSection: {
        paddingHorizontal: wp(3),
        paddingVertical: hp(3)

    },
    progressRow: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        width: 70,
        fontSize: 16,
    },
    progressBar: {
        flex: 1,
        height: 8,
        borderRadius: 4,
    },
    reviewCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    reviewContent: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
    },
    date: {
        color: '#888',
        fontSize: 12,
    },
    review: {
        marginTop: 5,
    },
});

export default Ratings;
