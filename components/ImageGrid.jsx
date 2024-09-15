import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {MasonryFlashList} from "@shopify/flash-list";
import {wp} from "../helpers/common";

const ImageGrid = () => {
  return (
    <View style={styles.container}>
      <MasonryFlashList
          data={images}
          numColumns={2}
          initialNumToRender = {1000}
          contentContainerStyle={styles.listContainerStyle}
          renderItem={({item, index}) => <ImageGrid columns={columns} item={item} index={index} />}
          estimatedItemSize={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight:3,
    width:wp(100)
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default ImageGrid;
