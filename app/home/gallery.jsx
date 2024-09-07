import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import {hp} from "../../helpers/common";


const { width, height } = Dimensions.get('window');

const Gallery = () => {
  const videoRef = useRef(null);

  return (
      <View style={styles.container}>
        {/* Video Component */}
        <Video
            ref={videoRef}
            source={require('../../assets/3997198-uhd_4096_2160_25fps.mp4')} // Replace with your actual video file path
            style={styles.backgroundVideo}
            resizeMode="cover"
            shouldPlay
            isLooping
        />

        {/* Text Overlay */}
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Experience {"\n"} the Elegance of {"\n"}ZenStyle
            Salon</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    width: width,
    height: hp(30),
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    position: 'absolute',
    top: hp(15), // Adjust the position as needed
    left: '10%', // Adjust the position as needed
  },
  overlayText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Gallery;

