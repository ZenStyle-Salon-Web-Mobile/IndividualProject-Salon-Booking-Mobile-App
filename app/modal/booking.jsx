import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Dimensions, Alert} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {hp, wp} from "../../helpers/common";
import {themes} from "../../constants/themes";
import DropDownPicker from "react-native-dropdown-picker";

const BookingOnboarding = () => {

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
                        style={styles.input}
                        placeholder="Select Expert"
                        value={formData.expert}
                        onChangeText={(text) => setFormData({...formData, expert: text})}
                    />
                    <TextInput
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
                    <TextInput
                        style={styles.input}
                        placeholder="Card Number"
                        keyboardType="numeric"
                        value={formData.cardNumber}
                        onChangeText={(text) => setFormData({...formData, cardNumber: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Expiry Date (MM/YY)"
                        value={formData.expiryDate}
                        onChangeText={(text) => setFormData({...formData, expiryDate: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CVV"
                        keyboardType="numeric"
                        secureTextEntry
                        value={formData.cvv}
                        onChangeText={(text) => setFormData({...formData, cvv: text})}
                    />
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

    const {title, content, buttonLabel} = sections[currentStep];

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
});

export default BookingOnboarding;
