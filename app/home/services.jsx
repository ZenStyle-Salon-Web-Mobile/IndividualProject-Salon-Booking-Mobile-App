import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native';
import {theme} from "../../constants/theme";
import {hp} from "../../helpers/common";

const DATA = [
  {
    id: '1',
    title: 'HAIR',
    image: require('../../assets/images/services/andrea-giardini-ND44-6Dk2vk-unsplash.jpg'), // Use require for local image
  },
  {
    id: '2',
    title: 'MAKEUP',
    image: require('../../assets/images/services/anna-keibalo-LZmPAULkFUc-unsplash.jpg'), // Use require for local image
  },
  {
    id: '3',
    title: 'NAILS',
    image: require('../../assets/images/services/anthony-tran-Sd9A6NVHsd4-unsplash.jpg'), // Use require for local image
  },
];

type ItemProps = {
  title: string;
  image: any;
};

const Item = ({ title, image }: ItemProps) => (
    <View style={styles.item}>
      <ImageBackground source={image} style={styles.imageBackground} resizeMode="cover">
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
);

const Services = () => {
  return (
      <SafeAreaView style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} image={item.image} />}
            keyExtractor={item => item.id}
        />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 200, // Adjust height as needed
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: hp(4),
    letterSpacing: 10,
    fontWeight: theme.fonts.bold,
    color: '#fff', // Adjust the text color for readability over the background
  },
});

export default Services;
