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
               name="body"
               options={{headerShown: true,
                   title: 'Body', // Title in the header
                   headerStyle:{
                       backgroundColor: '#ffe5f3',
                   },
                   headerLeft: () => <BackButton router={router} />, // Set custom BackButton in the header
           }}

           />
           <Stack.Screen
               name="hair"
               options={{headerShown: true,
                   title: 'Hair', // Title in the header
                   headerStyle:{
                       backgroundColor: '#ffe5f3',
                   },
                   headerLeft: () => <BackButton router={router} />, // Set custom BackButton in the header
               }}
           />
           <Stack.Screen
               name="skin_face"
               options={{
                   headerShown: true,  // Show header with back button
                   title: 'Skin & Face', // Title in the header
                   headerStyle:{
                       backgroundColor: '#ffe5f3',
                   },
                   headerLeft: () => <BackButton router={router} />, // Set custom BackButton in the header
               }}
           />
       </Stack>


    );
}

export default _layout;
