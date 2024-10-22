import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Svg, {Defs, LinearGradient, Rect, Stop} from "react-native-svg";
import {theme} from "../../constants/theme";
import {Fontisto, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {hp} from "../../helpers/common";

const membershipData = [
    {
        type: 'Gold',
        price:'1550',
        backgroundColor: 'black',
        image: require('../../assets/images/cards/1.png'), // Add a relevant gold image
        name: 'Priority Booking',
        name2: 'Membership Gift Bag',
        name3: 'VIP Club Parties',
        name4: 'VIP Club Parties',
        name5: 'VIP Club Parties',
        name6: 'VIP Club Parties',
        iconName: "menu-book",
        iconName2: "shopping-bag-1",
        iconName3: "book-account-outline",
        iconName4: "book-account-outline",
        iconName5: "book-account-outline",
        iconName6: "book-account-outline",
    },
    {
        type: 'Platinum',
        price:'1750',
        backgroundColor: 'black',
        image: require('../../assets/images/cards/3.png'), // Add a relevant platinum image
        name: 'Priority Booking',
        name2: 'Membership Gift Bag',
        name3: 'VIP Club Parties',
        name4: 'VIP Club Parties',
        iconName: "menu-book",
        iconName2: "shopping-bag-1",
        iconName3: "book-account-outline",
        iconName4: "book-account-outline",
    },
    {
        type: 'Silver',
        price:'1250',
        backgroundColor: 'black',
        image: require('../../assets/images/cards/2.png'), // Add a relevant silver image
        name: 'Priority Booking',
        name2: 'Membership Gift Bag',
        iconName: "menu-book",
        iconName2: "shopping-bag-1",
    },
];

const MembershipCard = ({item, parallaxProps}) => {
    return (
        <View style={[styles.card, {backgroundColor: item.backgroundColor}]}>
            <Text style={styles.title}>{item.type} Membership</Text>
            <Text style={{
                textAlign: 'center', color: theme.colors.textLight,
                paddingHorizontal:20
            }}> Become a VIP Loyalty Member today to look and feel your best all year long,
                while taking advantage of our best pricing!
                At "CHRISTELL EMPOWERED CLUB", it is our goal to listen to your concerns and find solutions that address
                all of your aesthetic needs.</Text>
            <Image source={item.image} style={styles.image} {...parallaxProps} />
            <Text style={{
                fontSize:hp(2),
                color: theme.colors.textLight,
                bottom:25
            }}>Rs.<Text style={styles.membershipText}>{item.price}</Text>.00</Text>
            <Text style={styles.title}> BENEFITS INCLUDE</Text>
            <View style={{flexDirection:'row',flexWrap:'wrap',width: '80%', justifyContent:'space-evenly'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', margin:10}}>
                    <MaterialIcons name={item.iconName} size={60} color="#ffe5f3"/>
                    <Text style={{textAlign: 'center', color: theme.colors.textLight,paddingVertical:10}}> {item.name}</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center',margin:10}}>
                    <Fontisto name={item.iconName2} size={60} color="#ffe5f3" />
                    <Text style={{textAlign: 'center', color: theme.colors.textLight,paddingVertical:10}}> {item.name2}</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center',margin:10}}>
                    <MaterialCommunityIcons name={item.iconName3} size={60} color="#ffe5f3" />
                    <Text style={{textAlign: 'center', color: theme.colors.textLight,paddingVertical:10}}> {item.name3}</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center',margin:10}}>
                    <MaterialCommunityIcons name={item.iconName3} size={60} color="#ffe5f3" />
                    <Text style={{textAlign: 'center', color: theme.colors.textLight,paddingVertical:10}}> {item.name3}</Text>
                </View>
            </View>
            <Pressable style={styles.membershipButton}>
                <Text style={{color: 'white'}}>
                    Become a Member
                </Text>
            </Pressable>


        </View>
    );
};

const MembershipCarousel = () => {
    return (
        <View style={styles.container}>
            <Svg height="100%" width="100%" style={styles.gradientBackground}>
                <Defs>
                    <LinearGradient id="grad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <Stop offset="0%" stopColor="#1a000e" stopOpacity="1"/>
                        <Stop offset="12.5%" stopColor="#531d3a" stopOpacity="1"/>
                        <Stop offset="25%" stopColor="#8c3a66" stopOpacity="1"/>
                        <Stop offset="37.5%" stopColor="#c55792" stopOpacity="1"/>
                        <Stop offset="50%" stopColor="#ff74bf" stopOpacity="1"/>
                        <Stop offset="62.5%" stopColor="#ff90cc" stopOpacity="1"/>
                        <Stop offset="75%" stopColor="#ffacd9" stopOpacity="1"/>
                        <Stop offset="87.5%" stopColor="#ffc8e6" stopOpacity="1"/>
                        <Stop offset="100%" stopColor="#ffe5f3" stopOpacity="1"/>
                    </LinearGradient>
                </Defs>
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)"/>
            </Svg>
            <Carousel
                loop
                width={400}
                height={800}
                data={membershipData}
                renderItem={({item, index, animationValue}) => (
                    <MembershipCard key={index} item={item} parallaxProps={{animationValue}}/>
                )}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    card: {
        width: 400,
        height: 800,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        paddingVertical: 5
    },
    image: {
        width: 400,
        height: 300,
    },
    gradientBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    membershipText:{
        fontSize:hp(6.5),
        color: theme.colors.textLight,
        fontWeight:theme.fonts.semibold

    },
});

export default MembershipCarousel;
