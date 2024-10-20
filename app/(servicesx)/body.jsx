import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Svg, {Defs, LinearGradient, Rect, Stop} from "react-native-svg";
import {theme} from "../../constants/theme";

const blogData = [{
  id: '1',
  title: '1) Registration and Account Verification',
  paragraph: 'Users are required to register on the Salon Liyo website to book appointments. The registration process involves providing personal information such as name, contact number, email address, residential address, postal code, and city. Verification of the user\'s mobile number is necessary to activate the account.',
  date: '11th Jan 2022',
}, {
  id: '2',
  title: '2) Payment and Booking Confirmation',
  paragraph: 'Payment for appointments can be made through online payment methods or via bank transfer. Immediate confirmation of the appointment is provided upon successful online payment.' + 'For payments made by bank transfer, users must deposit the booking advance within 48 hours and confirm the payment by sending the transfer receipt to our designated WhatsApp number. If the payment is not verified within this timeframe, the booking will be automatically cancelled without prior notification.',
  date: '5th Nov 2021',
}, {
  id: '3',
  title: '3) Appointment Rescheduling and Cancellations',
  paragraph: 'Appointments can be rescheduled or cancelled without penalty up to 72 hours prior to the scheduled appointment time. Refunds for cancellations are processed manually and can take up to two working days to complete, provided via the original method of payment or through direct bank transfer.' + 'No rescheduling or cancellations are allowed within 72 hours of the appointment time, and no refunds will be provided under these circumstances.',
  date: '24th Sept 2021',
}, {
  id: '4',
  title: '4) Service Limitations and Liability',
  paragraph: 'Specific services such as hair coloring, straightening, keratin treatments, and facials include a mandatory, free allergy test that must be conducted at least two days before the scheduled service. Salon Liyo will not be held responsible for any adverse effects or medical conditions that arise due to treatments administered at the salon or resulting from failure to conduct the allergy tests.',
  date: '24th Sept 2021',
}, {
  id: '5',
  title: '5) Data Privacy',
  paragraph: 'Salon Liyo respects the privacy of its clients. Personal data collected during registration and booking is used solely for processing appointments and will not be shared with third parties, except as required by law.',
  date: '24th Sept 2021',
}, {
  id: '6',
  title: '6) Dispute Resolution',
  paragraph: 'In the event of a dispute, customers are encouraged to contact our customer service team through the provided hotline or email. Salon Liyo commits to resolving disputes amicably and efficiently.',
  date: '24th Sept 2021',
}, {
  id: '7',
  title: '7) Modifications to Terms',
  paragraph: 'Salon Liyo reserves the right to amend these terms and conditions at any time. All changes will be effective immediately upon their posting on the website. Continued use of the booking system after any changes constitutes acceptance of the new terms.',
  date: '24th Sept 2021',
}, {
  id: '8',
  title: '8) Contact Information',
  paragraph: 'For further information or assistance, please contact us via our WhatsApp number, hotline, or email. Contact details are available on our website and through your booking confirmation.',
  date: '24th Sept 2021',
}, {
  id: '9',
  title: '9) Legal Compliance',
  paragraph: 'Salon Liyo operates in compliance with applicable local and national laws. Users agree to not use the booking system for any unlawful activities.',
  date: '24th Sept 2021',
},];

export default function Body() {
  const [expandedId, setExpandedId] = useState(null);

  const handlePress = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderItem = ({item}) => (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <MaterialCommunityIcons
              name={expandedId === item.id ? name = "arrow-up-drop-circle" : name = "arrow-down-drop-circle"}
              size={24} color="black"/>
        </TouchableOpacity>
        {expandedId === item.id && (<Text style={styles.paragraph}>{item.paragraph}</Text>)}
        <Text style={styles.date}>{item.date}</Text>
      </View>
  );

  return (
      <View style={{flex:1, backgroundColor: '#ffe5f3'}}>
        <FlatList
            data={blogData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.container}
        />
      </View>


  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex:1,
    backgroundColor: '#ffe5f3',
  },
  itemContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: "auto",
  },
  paragraph: {
    fontSize: 16,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
    color: theme.colors.text,
    marginTop: 5,
  },
});
