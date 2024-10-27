import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable, TouchableOpacity, Button, TextInput} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Svg, {Defs, LinearGradient, Rect, Stop} from "react-native-svg";
import {themes} from "../../constants/themes";
import {
    AntDesign,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    MaterialCommunityIcons,
    MaterialIcons
} from "@expo/vector-icons";
import {hp} from "../../helpers/common";
import BottomSheet, {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {CardField, useStripe} from "@stripe/stripe-react-native";

const membershipData = [
    {
        type: 'Gold',
        price: '1550',
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
        price: '1750',
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
        price: '1250',
        backgroundColor: 'black',
        image: require('../../assets/images/cards/2.png'), // Add a relevant silver image
        name: 'Priority Booking',
        name2: 'Membership Gift Bag',
        iconName: "menu-book",
        iconName2: "shopping-bag-1",
    },
];

const MembershipCard = ({item, parallaxProps}) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        billingAddress: '',
        zipCode: '',
    });

    // Input handler with format restrictions
    const handleInputChange = (name, value) => {
        if (name === 'cardNumber') {
            value = value.replace(/\D/g, '').slice(0, 16); // Allow only numbers, max 16 digits
        } else if (name === 'expiryDate') {
            value = value.replace(/\D/g, '').slice(0, 4); // Allow only numbers, max 4 digits
            if (value.length >= 2) value = value.slice(0, 2) + ' / ' + value.slice(2); // Auto-insert '/'
        } else if (name === 'cvc') {
            value = value.replace(/\D/g, '').slice(0, 4); // Allow only numbers, max 4 digits
        } else if (name === 'zipCode') {
            value = value.replace(/\D/g, '').slice(0, 5); // Allow only numbers, max 5 digits
        }
        setCardDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const [activeOption, setActiveOption] = useState(null);

    const bottomSheetRef = useRef(null);

    // Define snap points (height at which the bottom sheet should open)
    const snapPoints = useMemo(() => [ '50%', '80%'], []);

    const handleOpenPaymentSheet = () => {
        bottomSheetRef.current?.expand();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOpenPaymentSheet}>
                <View style={[styles.card, {backgroundColor: item.backgroundColor}]}>
                    <Text style={styles.title}>{item.type} Membership</Text>
                    <Text style={{
                        textAlign: 'center', color: themes.colors.textLight,
                        paddingHorizontal: 20
                    }}> Become a VIP Loyalty Member today to look and feel your best all year long,
                        while taking advantage of our best pricing!
                        At "CHRISTELL EMPOWERED CLUB", it is our goal to listen to your concerns and find solutions that
                        address
                        all of your aesthetic needs.</Text>
                    <Image source={item.image} style={styles.image} {...parallaxProps} />
                    <Text style={{
                        fontSize: hp(2),
                        color: themes.colors.textLight,
                        bottom: 25
                    }}>Rs.<Text style={styles.membershipText}>{item.price}</Text>.00</Text>
                    <Text style={styles.title}> BENEFITS INCLUDE</Text>
                    <View
                        style={{flexDirection: 'row', flexWrap: 'wrap', width: '80%', justifyContent: 'space-evenly'}}>
                        <View style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
                            <MaterialIcons name={item.iconName} size={60} color="#ffe5f3"/>
                            <Text style={{
                                textAlign: 'center',
                                color: themes.colors.textLight,
                                paddingVertical: 10
                            }}> {item.name}</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
                            <Fontisto name={item.iconName2} size={60} color="#ffe5f3"/>
                            <Text style={{
                                textAlign: 'center',
                                color: themes.colors.textLight,
                                paddingVertical: 10
                            }}> {item.name2}</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
                            <MaterialCommunityIcons name={item.iconName3} size={60} color="#ffe5f3"/>
                            <Text style={{
                                textAlign: 'center',
                                color: themes.colors.textLight,
                                paddingVertical: 10
                            }}> {item.name3}</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
                            <MaterialCommunityIcons name={item.iconName3} size={60} color="#ffe5f3"/>
                            <Text style={{
                                textAlign: 'center',
                                color: themes.colors.textLight,
                                paddingVertical: 10
                            }}> {item.name3}</Text>
                        </View>
                    </View>
                    <Pressable style={styles.membershipButton}>
                        <Text style={{color: 'white'}}>
                            Become a Member Touch the Payment
                        </Text>
                    </Pressable>
                </View>
            </TouchableOpacity>

            {/* Bottom Sheet */}
            <BottomSheet enablePanDownToClose ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
                <View style={styles.contentContainer}>
                    <Text style={styles.sheetTitle}>Select Payment Method</Text>

                    {/* Example Payment Options */}
                    <TouchableOpacity
                        style={[styles.paymentOption, activeOption === 'apple' && styles.activeBorder]}
                        onPressIn={() => setActiveOption('apple')}
                    >
                        <AntDesign name="apple1" size={24} color="black" />
                        <Text style={styles.paymentText}>Apple Pay</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.paymentOption, activeOption === 'google' && styles.activeBorder]}
                        onPressIn={() => setActiveOption('google')}
                    >
                        <FontAwesome5 name="google-pay" size={24} color="black" />
                        <Text style={styles.paymentText}>Google Pay</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.paymentOption, activeOption === 'card' && styles.activeBorder]}
                        onPressIn={() => setActiveOption('card')}
                        onPress={() => bottomSheetRef.current?.expand(2)}
                    >
                        <FontAwesome name="credit-card-alt" size={24} color="black" />
                        <Text style={styles.paymentText}>Credit or Debit Card</Text>
                    </TouchableOpacity>

                    {/* Card Details Form */}

                    <View style={styles.cardForm}>
                        <TextInput
                            style={[styles.input, focusedInput === 'cardNumber' && styles.focusedBorder]}
                            placeholder="0000-0000-0000-0000"
                            keyboardType="numeric"
                            value={cardDetails.cardNumber}
                            onFocus={() => setFocusedInput('cardNumber')}
                            onBlur={() => setFocusedInput(null)}
                            onChangeText={value => handleInputChange('cardNumber', value)}
                        />

                        <View style={styles.row}>
                            <TextInput
                                style={[styles.input, styles.smallInput, focusedInput === 'expiryDate' && styles.focusedBorder]}
                                placeholder="MM / YY"
                                keyboardType="numeric"
                                value={cardDetails.expiryDate}
                                onFocus={() => setFocusedInput('expiryDate')}
                                onBlur={() => setFocusedInput(null)}
                                onChangeText={value => handleInputChange('expiryDate', value)}
                            />

                            <TextInput
                                style={[styles.input, styles.smallInput, focusedInput === 'cvc' && styles.focusedBorder]}
                                placeholder="CVC"
                                keyboardType="numeric"
                                value={cardDetails.cvc}
                                onFocus={() => setFocusedInput('cvc')}
                                onBlur={() => setFocusedInput(null)}
                                onChangeText={value => handleInputChange('cvc', value)}
                            />
                        </View>

                        <TextInput
                            style={[styles.input, focusedInput === 'billingAddress' && styles.focusedBorder]}
                            placeholder="Billing Address"
                            value={cardDetails.billingAddress}
                            onFocus={() => setFocusedInput('billingAddress')}
                            onBlur={() => setFocusedInput(null)}
                            onChangeText={value => handleInputChange('billingAddress', value)}
                        />

                        <TextInput
                            style={[styles.input, focusedInput === 'zipCode' && styles.focusedBorder]}
                            placeholder="ZIP Code"
                            keyboardType="numeric"
                            value={cardDetails.zipCode}
                            onFocus={() => setFocusedInput('zipCode')}
                            onBlur={() => setFocusedInput(null)}
                            onChangeText={value => handleInputChange('zipCode', value)}
                        />
                        <TouchableOpacity style={styles.confirmButton}>
                            <Text style={styles.confirmButtonText}>Confirm Payment</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </BottomSheet>
        </View>
)
    ;
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
    membershipText: {
        fontSize: hp(6.5),
        color: themes.colors.textLight,
        fontWeight: themes.fonts.semibold

    },


    payButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    payButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 20,
    },
    sheetTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 16,
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: 'transparent',  // Default border color is transparent
    },
    activeBorder: {
        borderColor: 'red',  // Border color when the button is pressed
    },
    paymentText: {
        fontSize: 16,
        paddingLeft:10,
    },
    cardForm: {
        marginTop: 16,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallInput: {
        flex: 0.45,
    },
    confirmButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    focusedBorder: {
        borderColor: 'blue', // Highlight border color on focus
    },
});

export default MembershipCarousel;
