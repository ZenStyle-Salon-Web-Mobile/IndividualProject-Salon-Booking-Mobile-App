import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Hair = () => {
    return (
        <View style={styles.container}>
            <Text>Hair Component</Text>
            <Text>Hair Component</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Hair;
