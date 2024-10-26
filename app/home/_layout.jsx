import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {router, Stack} from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import {NavigationContainer} from "@react-navigation/native";
import Settings from "./settings";
import {themes} from "../../constants/themes";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "react-native/Libraries/NewAppScreen";

const _layout = () => {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
              screenOptions={{
                  swipeEnabled: false,
                  icon:{backgroundColor:'red'},
                  drawerStyle: {
                      backgroundColor: '#000000', // Customize the drawer background color
                      width: 240,
                  },
                  drawerActiveTintColor: '#ff74bf', // Customize active item color
                  drawerInactiveTintColor: themes.colors.darkLight,  // Customize inactive item color
                  headerTintColor: '#000000', // Change hamburger menu icon color to black
              }}
          >
              <Drawer.Screen
                  name="homepage" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Home Page',
                      title: 'Home',
                      headerStyle:{
                          backgroundColor: '#ffe5f3',
                      },
                      headerRight: () => (
                          <TouchableOpacity
                              onPress={() => router.push('modal/notification')}
                              style={{ marginRight: 12 ,
                                  marginBottom:5,
                                  backgroundColor: 'white',
                                  padding: 6,
                                  borderRadius:10,
                                  shadowColor: '#171717',
                                  shadowOffset: {width: 2, height:2},
                                  shadowOpacity:0.2,
                                  shadowRadius: 3,


                          }}
                          >
                              <Ionicons name="notifications" size={28} color={Colors.black} />
                          </TouchableOpacity>
                      ),

                  }}
              />
              <Drawer.Screen
                  name="services" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Services',
                      title: 'Services',
                      headerStyle:{
                          backgroundColor: '#ffe5f3',
                      } ,
                      swipeEnabled: false,

                  }}

              />
              <Drawer.Screen
                  name="promotions" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Promotions',
                      title: 'Promotions',
                      headerStyle:{
                          backgroundColor: '#ffe5f3',
                      }
                  }}
              />
              <Drawer.Screen
                  name="membership" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Membership',
                      title: 'Membership',
                      headerStyle:{
                          backgroundColor: '#ffe5f3',
                      }
                  }}
              />
              <Drawer.Screen
                  name="ratings" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Ratings',
                      title: 'Customer Feedback',
                      headerStyle:{
                          backgroundColor: '#ffe5f3',
                      }
                  }}
              />
              <Drawer.Screen
                  name="gallery" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Gallery',
                      title: 'Gallery',
                      headerStyle:{
                          backgroundColor: '#ffe5f3',
                      }
                  }}
              />
              <Drawer.Screen
                  name="locations" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Locations',
                      title: 'Locations',
                      headerStyle:{
                          backgroundColor: '#ffe5f3',
                      }
                  }}
              />
              <Drawer.Screen
                  name="about" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'About',
                      title: 'About',
                      headerStyle:{
                          backgroundColor: '#ffe5f3',
                      }
                  }}
              />
              <Drawer.Screen
                  name="contact" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Contact',
                      title: 'Contact',
                      headerStyle:{
                          backgroundColor: '#ffe5f3',
                      }
                  }}
              />
              <Drawer.Screen
                  name="settings" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Settings',
                      title: 'Settings',
                      headerStyle:{
                          backgroundColor: '#ffe5f3',
                      }
                  }}

              />
              <Drawer.Screen
                  name="terms&conditions" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Terms & Conditions',
                      title: 'Terms & Conditions',
                      headerStyle:{
                          backgroundColor: '#ffe5f3',
                      }
                  }}
              />
          </Drawer>

      </GestureHandlerRootView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default _layout;
