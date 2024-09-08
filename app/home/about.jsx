import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={{textAlign: 'center',paddingHorizontal:50}}>In the 21st century, beauty and make up are like the wheels of a cart or the two sides of a coin.
                Women are beautiful in themselves; but a little make-up does help a lot and it keeps one to make the day
                better and happier. Every woman wants to be pretty whether she’s young or old so the beauty salon is the
                place to go. Beauty salons are also like a temple; however, the difference is that we go to worship in
                the temple and in the beauty salon we go to be worshipped by the beauticians and by the other people
                around.
                The beauty salon has become an almost iconic figure in Western culture and Southeast Asian culture as
                well as in modern generation. The beauty salon is where a woman goes to have their hair and nails done,
                but is also a …</Text>
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

export default About;
