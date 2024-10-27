import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList , Image} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { themes } from "../../constants/themes";
import {hp, wp} from "../../helpers/common";
import BookingBtn from "../../components/BookingBtn";

// Sample image URLs; replace these with your actual image paths
const images = {
  1: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'), // Replace with actual image paths
  2: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
  3: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
  4: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
  5: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
  6: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
  7: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
  8: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),
  9: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'),

  // Add more images as needed
};

const blogData = [{
  id: '1',
  title: '1) LASER TATTOO REMOVAL',
  paragraph: 'Using a laser is one of the best methods of getting rid of your unwanted tattoos. Your tattoo is made up of colored pigment that has been injected into your skin through small deep holes. The laser tattoo removal treatment utilizes pulses of light from the laser directed at the tattoo to break up the pigment that makes the tattoo.\n' +
      '\n',
  date: '11th Jan 2022',

}, {
  id: '2',
  title: '2) STRETCH MARKS',
  paragraph: 'The technology used in treating stretch marks is laser skin resurfacing. It’s a minimally invasive skin barrier breakthrough treatment that’s ideal for skin repair and aesthetic improvement and is a quick, effective, and pain-free solution for your undesirable stretchmarks.',
  date: '5th Nov 2021',
}, {
  id: '3',
  title: '3) EXCESSIVE SWEATING',
  paragraph: 'Generally, sweating is caused by a hike in temperature, exercise, or a nervous or embarrassing situation. But for some individuals, even without these triggers, excessive sweating may occur. This is known as hyperthyroidism.',
  date: '24th Sept 2021',
}, {
  id: '4',
  title: '4) MEDICAL CAMOUFLAGING',
  paragraph: 'We offer the top-of-the-line latest technology in the field of medical tattooing used to reduce and disguise scarring from surgeries, injuries, trauma, or illness. Medical tattooing has been proven the world over to be beneficial in helping patients recover both physically as well as psychologically, rebuilding self-confidence and emotional well being.',
  date: '24th Sept 2021',
},];

export default function Body() {
  const [expandedId, setExpandedId] = useState(null);

  const handlePress = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.titleContainer}>

          <Text style={styles.title}>{item.title}</Text>
          <MaterialCommunityIcons
              name={expandedId === item.id ? "arrow-up-drop-circle" : "arrow-down-drop-circle"}
              size={24} color={themes.colors.textLight}
          />
        </TouchableOpacity>
        {expandedId === item.id && (
            <View style={styles.expandedContainer}>
              <Image resizeMode="cover" source={images[item.id]} style={styles.image} />
              <Text style={styles.paragraph}>{item.paragraph}</Text>
              <BookingBtn/>
            </View>
        )}
        <Text style={styles.date}>{item.date}</Text>
      </View>
  );

  return (
      <View style={styles.container}>
        <FlatList
            data={blogData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: 20 }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4000', // Background color of the whole screen
  },
  itemContainer: {

    backgroundColor: '#1e3799', // Background color of each item
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {
      width: 0,
      height: 2, // Vertical offset
    },
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow blur
    elevation: 5, // Shadow for Android
    padding: 15, // Padding inside each item
    marginBottom: 20, // Spacing between items
  },
  image: {
    width: wp(80), // Set the width of the image
    height: hp(25), // Set the height of the image
    borderRadius: 20,
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: {
      width: 0,
      height: 2, // Vertical offset
    },
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow blur
    elevation: 5, // Shadow for Android
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: themes.colors.textLight,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    marginTop: 10,
    color: themes.colors.textLight,
  },
  date: {
    fontSize: 14,
    color: themes.colors.textLight,
    marginTop: 5,
  },
  expandedContainer: {
    marginTop: 10, // Optional: Add some space above the expanded content
    flexDirection: 'column', // Optional: If you want to align image and text in a row
    alignItems: 'center', // Optional: Align items vertically centered

  },

});


