import React from 'react';
import {StyleSheet} from 'react-native';

import ScreenWrapper from "../components/ScreenWrapper";
import Welcome from "./welcome";

import {AuthProvider} from "./authProvider";

const index = () => {
    return (
        <ScreenWrapper>
            <Welcome/>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default index;

