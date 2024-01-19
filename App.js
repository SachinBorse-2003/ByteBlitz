import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import HomeScreen from './Screens/HomeScreen';  // Import the HomeScreen
import ChatbotScreen from './Screens/ChatbotScreen';  // Import the ChatbotScreen
import DoctorAppointmentsScreen from './Screens/DoctorAppointmentsScreen';  // Import the DoctorAppointmentsScreen
import OrganDonationScreen from './Screens/OrganDonationScreen';  // Import the OrganDonationScreen
import NearbyHospitalsScreen from './Screens/NearbyHospitalsScreen';  // Import the NearbyHospitalsScreen
import MedicationRemindersScreen from './Screens/MedicationRemindersScreen';  // Import the MedicationRemindersScreen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chatbot" component={ChatbotScreen} />
        <Stack.Screen name="DoctorAppointments" component={DoctorAppointmentsScreen} />
        <Stack.Screen name="OrganDonation" component={OrganDonationScreen} />
        <Stack.Screen name="NearbyHospitals" component={NearbyHospitalsScreen} />
        <Stack.Screen name="MedicationReminders" component={MedicationRemindersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
