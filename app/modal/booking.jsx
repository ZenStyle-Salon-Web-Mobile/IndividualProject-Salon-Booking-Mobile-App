import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';

const { width } = Dimensions.get('window');

const sections = [
  {
    key: '1',
    title: 'Select Date',
    content: (
        <>
          <Calendar />
          <TextInput placeholder="First Name" />
          <TextInput  placeholder="Last Name" />
        </>
    ),
    buttonLabel: 'Next'
  },
  {
    key: '2',
    title: 'Payment',
    content: (
        <>
          <TextInput  placeholder="Card Number" />
          <TextInput  placeholder="Expiry Date" />
          <TextInput  placeholder="CVV" />
        </>
    ),
    buttonLabel: 'Next'
  },
  {
    key: '3',
    title: 'Confirmation',
    content: (
        <>
          <Text style={{backgroundColor:'red'}}>Thank you for your booking!</Text>
          <Text >Order ID: #123456</Text>
        </>
    ),
    buttonLabel: 'Finish'
  },
];

const BookingOnboarding = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      // Handle finish action, like navigating away
      console.log('Onboarding Complete');
    }
  };

  const renderItem = ({ item }) => (
      <View style={[styles.section, { width }]}>
        <Text style={styles.sectionTitle}>{item.title}</Text>
        {item.content}
        <Button title={item.buttonLabel} onPress={handleNext} />
      </View>
  );

  return (
      <FlatList
          data={sections}
          keyExtractor={(item) => item.key}
          horizontal
          pagingEnabled
          ref={flatListRef}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
            setCurrentIndex(newIndex);
          }}
      />
  );
};

const styles = StyleSheet.create({

  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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
  calendar: {
    marginBottom: 15,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
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
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#1E90FF',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BookingOnboarding;
