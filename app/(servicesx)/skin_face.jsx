import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const skin_Face = () => {
    return (
        <View style={styles.container}>
            <Text>skin_Face Component</Text>

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

export default skin_Face;
