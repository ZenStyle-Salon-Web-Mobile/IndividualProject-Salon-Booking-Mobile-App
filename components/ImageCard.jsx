import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { Image } from 'expo-image';
import {getImageSize, wp} from "../helpers/common";
import {theme} from "../constants/theme";
import index from "../app";

const ImageCard = ({item, index, columns}) => {

    const isLastInRow = () => {
      return (index+1) % columns === 0;
    }

    const getImageHeight = () => {
        let {imageHeight: height, imageWidth: width} = item;
        return {height: getImageSize(height, width)}
    }


    return (
        <Pressable style={[styles.imageWrapper, !isLastInRow() && styles.spacing]}>
            <Image style={styles.image}
                   source={item} // If item is a URI or require statement
                   transition={100}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%',
        borderRadius: theme.radius.xl,
    },
    imageWrapper: {
      backgroundColor: theme.colors.gray,
      borderRadius: theme.radius.xl,
        borderCurve: 'continuous',
        marginBottom: wp(2)
    },
    spacing: {
        marginRight: wp(2), // Space between image columns
    },
});

export default ImageCard;
