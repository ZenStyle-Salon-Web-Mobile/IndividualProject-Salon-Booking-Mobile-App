import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {themes} from "../../constants/themes";


const Notification = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const [notifications, setNotifications] = useState([
        {
            id: '1',
            title: 'It’s Payday! Time to Recharge',
            time: '06:26 PM',
            description: 'Recharge today and enjoy benefits!'
        },
        {
            id: '2',
            title: 'The Truly Unlimited Plan Is Here!',
            time: '11:36 AM',
            description: 'Unlimited calling and data with our new plan.'
        },
        {
            id: '3',
            title: 'Answer & Win Smart Bands!',
            time: '03:03 PM',
            description: 'Participate in our quiz and win exciting prizes.'
        },
        // Add more notifications as needed
    ]);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); // Toggle expand/collapse
    };

    const renderItem = ({item, index}) => (
        <View>
            <TouchableOpacity
                style={styles.notificationItem}
                onPress={() => toggleExpand(index)}
            >
                <Ionicons name="notifications" size={20} color={themes.colors.primary}/>
                <View style={styles.notificationContent}>
                    <Text style={styles.notificationTitle}>{item.title}</Text>
                    <Text style={styles.notificationTime}>{item.time}</Text>
                </View>
                <Ionicons
                    name={expandedIndex === index ? name = "arrow-down-circle-sharp" : name = "arrow-forward-circle-sharp"}
                    size={24} color="black"/>
            </TouchableOpacity>
            {expandedIndex === index && (
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsText}>{item.description}</Text>
                </View>
            )}
        </View>

    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Notifications</Text>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    notificationItem: {
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    notificationContent: {
        marginLeft: 10,
    },
    notificationTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    notificationTime: {
        fontSize: 12,
        color: '#666',
    },
    detailsContainer: {
        padding: 15,
        backgroundColor: '#e9e9e9',

    },
    detailsText: {
        fontSize: 14,
        color: '#333',
    },
});
