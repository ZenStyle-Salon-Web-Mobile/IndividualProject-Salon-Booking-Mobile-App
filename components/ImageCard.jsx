import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image';
import { getImageSize, wp } from "../helpers/common";
import { themes } from "../constants/themes";


const ImageCard = ({ item, index, columns }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const isLastInRow = () => {
        return (index + 1) % columns === 0;
    };

    const getImageHeight = () => {
        let { imageHeight: height, imageWidth: width } = item;
        return { height: getImageSize(height, width) };
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            {/* Main Image Clickable Area */}
            <Pressable
                onPress={openModal}
                style={[styles.imageWrapper, !isLastInRow() && styles.spacing]}>
                <Image style={styles.image} source={item} transition={100} />
            </Pressable>

            {/* Modal to display the image in the center with a blurred/darkened background */}
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade" // You can also use 'slide' or 'none'
                onRequestClose={closeModal} // Close modal on back button press
            >
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={styles.modalBackground}>
                        <TouchableWithoutFeedback onPress={() => {}}>
                            <View style={styles.modalContent}>
                                <Image
                                    style={styles.modalImage}
                                    source={item} // The image to be displayed
                                    transition={100}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: '100%',
        borderRadius: themes.radius.xl,
    },
    imageWrapper: {
        backgroundColor: themes.colors.gray,
        borderRadius: themes.radius.xl,
        marginBottom: wp(2),
    },
    spacing: {
        marginRight: wp(2), // Space between image columns
    },
    // Modal Background for Blurred/Dark Effect
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background with opacity
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImage: {
        width: '100%',
        height: '100%',
        borderRadius: themes.radius.lg, // Rounded corners if desired
    },
});

export default ImageCard;
