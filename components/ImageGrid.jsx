import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MasonryFlashList} from "@shopify/flash-list";
import {wp} from "../helpers/common";
import ImageCard from "./ImageCard";

const ImageGrid = ({images}) => {
    return (
        <View style={styles.container}>
            <MasonryFlashList
                data={images}
                numColumns={2}
                initialNumToRender={1000}
                contentContainerStyle={styles.listContainerStyle}
                renderItem={({item, index}) => <ImageCard item={item} index={index} columns={2}/>} // Pass 'columns' if needed for layout
                estimatedItemSize={200}
                keyExtractor={(item, index) => index.toString()} // Ensure each item has a unique key
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 3,
        width: wp(100)
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    listContainerStyle: {
        paddingHorizontal: wp(4)
    },
});

export default ImageGrid;
