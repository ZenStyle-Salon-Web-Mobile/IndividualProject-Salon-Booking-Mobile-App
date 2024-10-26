import { Stack } from 'expo-router';
import { View } from 'react-native';
import BackButton from "../../components/BackButton";
import React from "react";
import {useRouter} from "expo-router";

const _layout = () => {
    const router = useRouter();
    return (
        <Stack>
            {/* Stack navigation for nested screens under /services */}
            <Stack.Screen
                name="notification"
                options={{headerShown: true,
                    title: 'Notifications', // Title in the header
                    presentation: 'modal',
                    headerLeft: () => <BackButton router={router} />,

                }}
            />

        </Stack>


    );
}

export default _layout;
