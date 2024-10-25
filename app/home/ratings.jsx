import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    FlatList,
    Image,
    Modal,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback, Appearance
} from 'react-native';
import {themes} from "../../constants/themes";
import {hp, wp} from "../../helpers/common";
import {FontAwesome} from "@expo/vector-icons";
import * as Progress from 'react-native-progress';
import ScreenWrapper from "../../components/ScreenWrapper";
import {StatusBar} from "expo-status-bar";

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

    const [theme, setTheme] = useState(Appearance.getColorScheme());

    // Listen for theme changes
    useEffect(() => {
        const listener = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme);
        });

        // Cleanup the event listener
        return () => listener.remove();
    }, []);

    const [openModel, setOpenModel] = useState(false);

    // Initial state for rating counts
    const [ratings, setRatings] = useState({
        fiveStars: 5,
        fourStars: 10,
        threeStars: 3,
        twoStars: 1,
        oneStar: 1,
        total: 20,
    });

    // Calculate percentage of ratings for each category
    const getPercentage = (count) => (ratings.total === 0 ? 0 : (count / ratings.total) * 100);

    const getOverallRating = () => {
        const totalStars = (ratings.fiveStars * 5) + (ratings.fourStars * 4) + (ratings.threeStars * 3) +
            (ratings.twoStars * 2) + (ratings.oneStar);
        return ratings.total === 0 ? 0 : (totalStars / ratings.total).toFixed(1);
    };
    const [rating, setRating] = useState(0);

    const handleStarPress = (star) => {
        setRating(star);
    };
    return (

        <View style={styles.container}>
            <StatusBar   barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
                         backgroundColor={theme === 'dark' ? '#000' : '#fff'} />
            <View style={styles.ratingContainer}>
                <Text style={{fontSize: hp(3.7)}}>Overall Rating</Text>
                <Text style={{fontSize: hp(12), fontWeight: themes.fonts.bold}}>3.9</Text>
                <View style={styles.starContainer}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FontAwesome
                            key={star}
                            name="star" size={30}
                            style={styles.star}
                            color={star <= Math.round(getOverallRating()) ? '#e7cc33' : '#ccc'}/>
                    ))}
                </View>
                <Text style={{fontSize: hp(2.3), fontWeight: themes.fonts.medium}}>Based
                    on {ratings.total} reviews</Text>
            </View>
            {/* Progress Bars for Ratings */}
            <View style={styles.progressSection}>
                <View style={styles.progressRow}>
                    <Text style={styles.label}>Excellent</Text>
                    <Progress.Bar progress={getPercentage(ratings.fiveStars) / 100} width={200} color="#ff74bf"/>
                </View>
                <View style={styles.progressRow}>
                    <Text style={styles.label}>Good</Text>
                    <Progress.Bar progress={getPercentage(ratings.fourStars) / 100} width={200} color="#ff74bf"/>
                </View>
                <View style={styles.progressRow}>
                    <Text style={styles.label}>Average</Text>
                    <Progress.Bar progress={getPercentage(ratings.threeStars) / 100} width={200} color="#ff74bf"/>
                </View>
                <View style={styles.progressRow}>
                    <Text style={styles.label}>Poor</Text>
                    <Progress.Bar progress={getPercentage(ratings.twoStars) / 100} width={200} color='#ff74bf'/>
                </View>
            </View>

            <View style={{flex: 1, marginBottom: 10}}>
                <FlatList
                    data={reviewsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View style={styles.reviewCard}>
                            <Image source={{uri: item.avatar}} style={styles.avatar}/>
                            <View style={styles.reviewContent}>
                                <Text style={styles.name}>{item.name}</Text>
                                <View style={styles.starContainer}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FontAwesome key={star} name="star"
                                                     size={20} color={star <= item.rating ? '#e7cc33' : '#ccc'}
                                                     style={styles.star}
                                        />
                                    ))}
                                </View>
                                <Text style={styles.date}>{item.date}</Text>
                                <Text style={styles.review}>{item.review}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>

            <Modal visible={openModel} transparent={true}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.modalCard}>
                            <Text>Add Ratings</Text>
                            <View style={styles.startContainer}>
                                {Array(5).fill().map((_, index) => (
                                    <Pressable key={index} onPress={() => handleStarPress(index + 1)}>
                                        <FontAwesome
                                            name={index < rating ? "star" : "star-o"} // Filled or outlined stars
                                            size={35}
                                            color={index < rating ? "#FFD700" : "#808080"} // Gold for filled, gray for outline
                                        />
                                    </Pressable>
                                ))}
                            </View>
                            <TextInput style={styles.modalDesc}
                                       placeholder="Type here to Comment!"
                                       multiline
                                       editable
                                       keyboardType
                            ></TextInput>
                            <Pressable style={styles.cancelButton} onPress={() => setOpenModel(false)}>
                                <Text style={styles.reviewButtonText}>Cancel</Text>
                            </Pressable>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>

            {/* Reviews List */}
            <Pressable style={styles.reviewButton} onPress={() => setOpenModel(true)}>
                <Text style={styles.reviewButtonText}>
                    Write a review
                </Text>
            </Pressable>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: wp(6),
        top: hp(2),
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalCard: {
        backgroundColor: 'white',
        width: wp(90),
        height: hp(50),
        borderRadius: themes.radius.xl,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    startContainer: {
        backgroundColor:'black',
        borderWidth: 2,
        borderStyle: 'solid', // Set the border style to solid
        width: wp(80),
        height: hp(8),
        borderRadius: themes.radius.xl,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:"center"

    },
    modalDesc: {
        borderWidth: 2,
        borderStyle: 'solid', // Set the border style to solid
        width: wp(80),
        height: hp(25),
        borderRadius: themes.radius.xl,
        fontSize: hp(2),
        padding: 10,
    },
    reviewButton: {
        alignItems: 'center',
        backgroundColor: themes.colors.primary,
        padding: '5%',
        borderRadius: themes.radius.lg,
        marginBottom: 40,
    },
    cancelButton:{
        alignItems: 'center',
        backgroundColor: themes.colors.dark,
        paddingHorizontal: wp(30),
        borderRadius: themes.radius.lg,
        paddingVertical:hp(1.2),
    },
    reviewButtonText: {
        fontSize: hp(2.2),
        color: '#ffffff',
        fontWeight: themes.fonts.semibold,
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
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        width: 70,
        fontSize: 16,
        fontWeight: themes.fonts.medium
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
        borderRadius: themes.radius.md,
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
