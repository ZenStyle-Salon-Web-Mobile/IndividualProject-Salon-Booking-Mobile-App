import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Dimensions, Alert, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {hp, wp} from "../../helpers/common";
import {themes} from "../../constants/themes";
import DropDownPicker from "react-native-dropdown-picker";

const BookingOnboarding = () => {

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
        setCardDetails(prevState => ({...prevState, [name]: value}));
    };

    const [open, setOpen] = useState(false);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const [timeSlots, setTimeSlots] = useState([
        {label: "08:00 AM - 09:00 AM", value: "08:00 AM - 09:00 AM"},
        {label: "09:00 AM - 10:00 AM", value: "09:00 AM - 10:00 AM"},
        {label: "10:00 AM - 11:00 AM", value: "10:00 AM - 11:00 AM"},
        {label: "11:00 AM - 12:00 PM", value: "11:00 AM - 12:00 PM"},
        {label: "12:00 PM - 01:00 PM", value: "12:00 PM - 01:00 PM"},
        {label: "01:00 PM - 02:00 PM", value: "01:00 PM - 02:00 PM"},
        {label: "02:00 PM - 03:00 PM", value: "02:00 PM - 03:00 PM"},
        {label: "03:00 PM - 04:00 PM", value: "03:00 PM - 04:00 PM"},
        {label: "04:00 PM - 05:00 PM", value: "04:00 PM - 05:00 PM"},
    ]);

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        status: '',
        expert: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        selectedDate: null,

    });

    const handleDateSelect = (day) => {
        setFormData({...formData, selectedDate: day.dateString});
    }

    const sections = [
        {
            title: 'Select Date',
            content: (
                <>
                    <Calendar
                        style={{
                            borderRadius: '10',
                            width: wp(78),
                            marginBottom: 10,

                        }}
                        onDayPress={handleDateSelect}
                        markedDates={{
                            [formData.selectedDate]: {
                                selected: true,
                                selectedColor: 'transparent',
                                customStyles: {
                                    container: {
                                        borderColor: 'red',
                                        borderWidth: 2,
                                        borderRadius: 5,
                                    },
                                    text: {
                                        color: 'black',
                                    },
                                },
                            },
                        }}
                        theme={{
                            selectedDayBackgroundColor: 'transparent',
                            selectedDayTextColor: 'red',
                        }}
                    />
                    <DropDownPicker
                        open={open}
                        value={selectedTimeSlot}
                        items={timeSlots}
                        setOpen={setOpen}
                        setValue={setSelectedTimeSlot}
                        setItems={setTimeSlots}
                        placeholder="Select a time slot"
                        containerStyle={{marginTop: 10, width: wp(78),}}
                        style={{backgroundColor: "#fafafa", width: wp(78), marginBottom: 30,}}
                        dropDownStyle={{backgroundColor: "#fafafa"}}
                    />
                    <TextInput
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        placeholder="Select Expert"
                        value={formData.expert}
                        onChangeText={(text) => setFormData({...formData, expert: text})}
                    />
                    <TextInput
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        placeholder="Status"
                        value={formData.status}
                        onChangeText={(text) => setFormData({...formData, status: text})}
                    />

                </>
            ),
            buttonLabel: 'Next',
            validation: () => formData.status && formData.expert && formData.selectedDate && selectedTimeSlot,
        },
        {
            title: 'Payment',
            content: (
                <>
                    <View style={styles.cardForm}>
                        <TextInput
                            placeholderTextColor={'gray'}
                            style={[styles.inputPayment, focusedInput === 'cardNumber' && styles.focusedBorder]}
                            placeholder="0000-0000-0000-0000"
                            keyboardType="numeric"
                            value={cardDetails.cardNumber}
                            onFocus={() => setFocusedInput('cardNumber')}
                            onBlur={() => setFocusedInput(null)}
                            onChangeText={value => handleInputChange('cardNumber', value)}
                        />

                        <View style={styles.row}>
                            <TextInput
                                placeholderTextColor={'gray'}
                                style={[styles.inputPayment, styles.smallInput, focusedInput === 'expiryDate' && styles.focusedBorder]}
                                placeholder="MM / YY"
                                keyboardType="numeric"
                                value={cardDetails.expiryDate}
                                onFocus={() => setFocusedInput('expiryDate')}
                                onBlur={() => setFocusedInput(null)}
                                onChangeText={value => handleInputChange('expiryDate', value)}
                            />

                            <TextInput
                                placeholderTextColor={'gray'}
                                style={[styles.inputPayment, styles.smallInput, focusedInput === 'cvc' && styles.focusedBorder]}
                                placeholder="CVC"
                                keyboardType="numeric"
                                value={cardDetails.cvc}
                                onFocus={() => setFocusedInput('cvc')}
                                onBlur={() => setFocusedInput(null)}
                                onChangeText={value => handleInputChange('cvc', value)}
                            />
                        </View>

                        <TextInput
                            placeholderTextColor={'gray'}
                            style={[styles.inputPayment, focusedInput === 'billingAddress' && styles.focusedBorder]}
                            placeholder="Billing Address"
                            value={cardDetails.billingAddress}
                            onFocus={() => setFocusedInput('billingAddress')}
                            onBlur={() => setFocusedInput(null)}
                            onChangeText={value => handleInputChange('billingAddress', value)}
                        />

                        <TextInput
                            placeholderTextColor={'gray'}
                            style={[styles.inputPayment, focusedInput === 'zipCode' && styles.focusedBorder]}
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
                        <Text>Personal Info</Text>
                        <TextInput
                            placeholderTextColor={'gray'}
                            style={styles.inputPayment}
                            placeholder="Name"
                            value={formData.name}
                            onChangeText={(text) => setFormData({...formData, name: text})}
                        />
                        <TextInput
                            placeholderTextColor={'gray'}
                            style={styles.inputPayment}
                            placeholder="Gender"
                            value={formData.gender}
                            onChangeText={(text) => setFormData({...formData, gender: text})}
                        />
                        <TextInput
                            placeholderTextColor={'gray'}
                            style={styles.inputPayment}
                            placeholder="E-mail"
                            value={formData.email}
                            onChangeText={(text) => setFormData({...formData, email: text})}
                        />
                        <TextInput
                            placeholderTextColor={'gray'}
                            style={styles.inputPayment}
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChangeText={(text) => setFormData({...formData, phone: text})}
                        />
                    </View>
                </>
            ),
            buttonLabel: 'Next',
            validation: () => formData.cardNumber && formData.expiryDate && formData.cvv,
        },
        {
            title: 'Confirmation',
            content: (
                <>
                    <Text style={styles.confirmationText}>Thank you for your booking!</Text>
                    <Text style={styles.orderId}>Order ID: #123456</Text>
                </>
            ),
            buttonLabel: 'Finish',
            validation: () => true,
        },
    ];

    const handleNext = () => {
        if (sections[currentStep].validation()) {
            if (currentStep < sections.length - 1) {
                setCurrentStep(currentStep + 1);
            } else {
                Alert.alert('Booking Complete', 'Thank you for your booking!');
            }
        } else {
            Alert.alert('Incomplete Information', 'Please fill in all required fields.');
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const {title, content, buttonLabel,} = sections[currentStep];

    return (
        <View style={[styles.section]}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {content}
            <View style={styles.buttonContainer}>
                {currentStep > 0 && (
                    <Button title="Back" onPress={handleBack} color="red"/>
                )}
                <Button title={buttonLabel} onPress={handleNext}/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    section: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: themes.colors.subColor,
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 38,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5, // for Android shadow


    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 20,
    },
    input: {
        width: wp(78),
        height: hp(6),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 30,
        paddingHorizontal: 10,
        backgroundColor: '#F9F9F9',
    },
    confirmationText: {
        fontSize: 16,
        color: '#333333',
        textAlign: 'center',
        marginBottom: 10,
    },
    orderId: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E90FF',
        textAlign: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20,
        bottom: 30,

    },
    label: {fontSize: 16, marginBottom: 10},
    dropdown: {
        width: 200,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#009688',
    },
    dropdownContainer: {
        width: 200,
        borderColor: '#009688',
    },

    cardForm: {
        width: wp(78)
    },
    inputPayment: {
        height: 50,
        borderColor: 'gray',
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

export default BookingOnboarding;
