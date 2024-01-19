// home.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToChatbot = () => {
    // Navigate to the Ayurvedic medicine recommendations (chatbot) screen
    navigation.navigate('Chatbot', { category: 'Ayurvedic Medicine Recommendations' });
  };

  const navigateToMentalHealthChatbot = () => {
    // Navigate to the Mental Health Support (chatbot) screen
    navigation.navigate('Chatbot', { category: 'Mental Health Support' });
  };

  const navigateToDoctorAppointments = () => {
    // Navigate to the Doctor Appointments screen
    navigation.navigate('DoctorAppointments');
  };

  const navigateToOrganDonation = () => {
    // Navigate to the Organ Donation Facilitation screen
    navigation.navigate('OrganDonation');
  };

  const navigateToNearbyHospitals = () => {
    // Navigate to the Nearby Hospital Discovery screen
    navigation.navigate('NearbyHospitals');
  };

  const navigateToMedicationReminders = () => {
    // Navigate to the Medication Reminders screen
    navigation.navigate('MedicationReminders');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToChatbot}>
        <Text style={styles.buttonText}>Ayurvedic Medicine Recommendations (Chatbot)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToMentalHealthChatbot}>
        <Text style={styles.buttonText}>Mental Health Support (Chatbot)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToDoctorAppointments}>
        <Text style={styles.buttonText}>Doctor Appointments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToOrganDonation}>
        <Text style={styles.buttonText}>Organ Donation Facilitation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToNearbyHospitals}>
        <Text style={styles.buttonText}>Nearby Hospital Discovery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToMedicationReminders}>
        <Text style={styles.buttonText}>Medication Reminders</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    marginTop: 15,
    width: '80%',
    maxWidth: 400,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
