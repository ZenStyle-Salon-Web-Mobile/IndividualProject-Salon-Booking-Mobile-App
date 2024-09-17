import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const membershipData = [
  {
    type: 'Gold',
    backgroundColor: '#FFD700',
    image: require('../../assets/images/adaptive-icon.png'), // Add a relevant gold image
  },
  {
    type: 'Platinum',
    backgroundColor: '#E5E4E2',
    image: require('../../assets/images/adaptive-icon.png'), // Add a relevant platinum image
  },
  {
    type: 'Silver',
    backgroundColor: '#C0C0C0',
    image: require('../../assets/images/adaptive-icon.png'), // Add a relevant silver image
  },
];

const MembershipCard = ({ item, parallaxProps }) => {
  return (
      <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
        <Image source={item.image} style={styles.image} {...parallaxProps} />
        <Text style={styles.title}>{item.type} Membership</Text>
      </View>
  );
};

const MembershipCarousel = () => {
  return (
      <View style={styles.container}>
        <Carousel
            loop
            width={300}
            height={400}
            data={membershipData}
            renderItem={({ item, index, animationValue }) => (
                <MembershipCard key={index} item={item} parallaxProps={{ animationValue }} />
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
    width: 300,
    height: 400,
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
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default MembershipCarousel;
