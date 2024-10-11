import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {theme} from "../../constants/theme";
import {hp} from "../../helpers/common";

const HomePage = () => {

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
                <Text style={styles.subHeadingText}>
                    Hello Ramesh Kaushika
                </Text>
                <Text style={styles.HeadingText}>
                    {greeting}
                </Text>
            </View>
            <View style={styles.carousalOffer}>
                <Text style={styles.subTopic}>
                    Special Offers
                </Text>
            </View>
            <View style={styles.carousalOffer}>
                <Text style={styles.subTopic}>
                    Top Services
                </Text>
            </View>
            <View style={styles.carousalOffer}>
                <Text style={styles.subTopic}>
                    Hair Specialist
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    HeadingText:{
        fontWeight:theme.fonts.extraBold,
        fontSize: hp(3),
    },
    subHeadingText:{
        color: theme.colors.text,
        fontSize: hp(1.5),
    },
    carousalOffer:{
        marginVertical:10,
    },
    subTopic:{
        fontWeight:theme.fonts.extraBold,
        fontSize: hp(2.5),
        color: theme.colors.primaryDark,
    },

});

export default HomePage;
