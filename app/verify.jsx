import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Verify = () => {
    return (
        <View style={styles.container}>
            <Text>Verify Component</Text>
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

export default Verify;
