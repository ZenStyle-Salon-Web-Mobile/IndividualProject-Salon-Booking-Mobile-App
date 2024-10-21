import React from 'react';
import { View, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native';
import {hp} from "../../helpers/common";

// Get the width of the screen
const { width, height } = Dimensions.get('window');

// Sample data for firstPromo
const firstPromo = [
  {
    id: '1',
    imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),
    heightPercentage: 0.25,  // 25% height
  },
  {
    id: '2',
    imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),
    heightPercentage: 0.50,  // 50% height
  },
  {
    id: '3',
    imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),
    heightPercentage: 0.25,  // 25% height
  },
  {
    id: '4',
    imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),
    heightPercentage: 0.50,  // 50% height
  },
];

const secondPromo = [
  {
    id: '1',
    imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

  },
  {
    id: '2',
    imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

  },
  {
    id: '3',
    imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

  },
  {
    id: '4',
    imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

  },
];

const thirdPromo = [
  {
    id: '1',
    imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

  },
  {
    id: '2',
    imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

  },
  {
    id: '3',
    imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

  },
  {
    id: '4',
    imageUrl: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'),

  },
];

const Promotions = () => {

  // Render each banner item
  const renderBannerItem = ({ item }) => (
      <View style={styles.bannerContainer}>
        <Image source={item.imageUrl} style={styles.bannerImage} />
      </View>
  );

  return (
      <View style={styles.container}>
        <FlatList
            data={firstPromo}
            renderItem={renderBannerItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />
        <FlatList
            data={firstPromo}
            renderItem={renderBannerItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />
        <FlatList
            data={firstPromo}
            renderItem={renderBannerItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />
        <FlatList
            data={firstPromo}
            renderItem={renderBannerItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />
        <FlatList
            data={firstPromo}
            renderItem={renderBannerItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />
        <FlatList
            data={firstPromo}
            renderItem={renderBannerItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />
        <FlatList
            data={firstPromo}
            renderItem={renderBannerItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />
        <FlatList
            data={firstPromo}
            renderItem={renderBannerItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />
        <FlatList
            data={firstPromo}
            renderItem={renderBannerItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />
          <FlatList
              data={firstPromo}
              renderItem={renderBannerItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
          />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer: {
    height: hp(20),
    width: width,  // Full width banner
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',  // Image covers the container
  },
});

export default Promotions;
