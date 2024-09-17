import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Stack} from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import {NavigationContainer} from "@react-navigation/native";
import Settings from "./settings";

const _layout = () => {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer>
              <Drawer.Screen
                  name="homepage" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Home Page',
                      title: 'Homepage',
                  }}
              />
              <Drawer.Screen
                  name="services" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Services',
                      title: 'Services',
                  }}
              />
              <Drawer.Screen
                  name="promotions" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Promotions',
                      title: 'Promotions',
                  }}
              />
              <Drawer.Screen
                  name="membership" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Membership',
                      title: 'Membership',
                  }}
              />

              <Drawer.Screen
                  name="careers" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Careers',
                      title: 'Careers',
                  }}
              />
              <Drawer.Screen
                  name="ratings" // This is the name of the page and must match the url from root
                  options={{
                      drawerLabel: 'Ratings',
                      title: 'Ratings',
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
