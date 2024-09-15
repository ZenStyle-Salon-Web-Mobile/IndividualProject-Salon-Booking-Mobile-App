import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Image } from 'expo-image';

const ImageCard = () => {
    function getImageHeight = () => {
        let {imageHeight:height, imageWidth: width} = item;
    }

    return (
        <Pressable>
            <Image style={[styles.image, getImageHeight()]}
                    // source={}
                   transition={100}
            >ImageCard Component</Image>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%'
    },
});

export default ImageCard;
