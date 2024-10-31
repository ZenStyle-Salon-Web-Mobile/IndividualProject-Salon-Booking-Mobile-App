import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {router} from "expo-router";

const CustomDrawerContent = (props:any) => {

    const {bottom} = useSafeAreaInsets();
    const navigation = useNavigation();

    const closeDrawer = () => {
        navigation.dispatch(DrawerActions.closeDrawer)
        router.push('login')
    }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView{...props}>
          <DrawerItemList {...props}/>
      </DrawerContentScrollView>

        <Pressable onPress={closeDrawer} style={{padding:20, paddingBottom: bottom+10}}>
            <Text style={{color:'white'}}>
                LOGOUT
            </Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawerContent;
