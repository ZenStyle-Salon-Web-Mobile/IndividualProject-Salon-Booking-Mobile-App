import React from 'react';
import { View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Icon} from "react-native-paper";
import {Ionicons} from "@expo/vector-icons";
import {theme} from "../../constants/theme";
// import Icon from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from "@react-native-async-storage/async-storage";


const SettingsScreen = ({navigation}) => {


  const handleLogout = async () => {
    Alert.alert(
        'Log Out',
        'Are you sure you want to log out?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Log Out',
            onPress: async () => {
              // Implement logout functionality
              try {
                // Clear any stored tokens or user data
                await AsyncStorage.removeItem("authToken");
                await AsyncStorage.removeItem("refreshToken");
                await AsyncStorage.setItem('isLoggedIn', JSON.stringify(false));

                // Navigate to the login page
                navigation.replace("LoginPage");
                console.log('Logged out');
                Alert.alert('Logged out');


              } catch (error) {
                Alert.alert("Error", "An error occurred during logout.");
                console.error(error);
              }
            },
          },
        ],
        { cancelable: false }
    );
  };
  const handleAccountDelete = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Implement account delete functionality
            console.log('Account deleted');
            Alert.alert('Account deleted');
          },
          style: 'destructive', // iOS-specific style for destructive actions
        },
      ],
      { cancelable: false }
    );
  };

  const handleEditAccount = () => {
    Alert.alert(
      'Edit Account',
      'Do you want to edit your account details?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Edit',
          onPress: () => {
            // Navigate to edit account screen
            console.log('Navigating to EditAccount screen');
            navigation.navigate('EditeAccount');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.option} onPress={handleEditAccount}>
          <Text style={styles.optionText}>Edit Account</Text>
          <Icon name="chevron-forward" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <Text style={styles.optionText}>Log Out</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleAccountDelete}>
          <Text style={styles.optionText}>Delete Account</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>version 0.0.2</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },
  optionText: {
    fontSize: 16,
    color:'black',
  },
  versionContainer: {
    padding: 10,
    alignItems: 'center',
  },
  versionText: {
    color: theme.colors.primary,
    fontSize: 17,
    fontWeight:"bold"
  },
});

export default SettingsScreen;
