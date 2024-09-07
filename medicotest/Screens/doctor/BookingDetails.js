import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

const BookingDetails = () => {

  // Example doctor data
  const doctor = {
    image: 'https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww',
    name: 'Dr. John Doe',
    description: 'Specialist in Cardiology with 10 years of experience.',
    bookingTime: '10:00 AM - 11:00 AM',
  };

  const handleEditBooking = () => {
    Alert.alert("Edit Booking", "Redirect to booking editing screen.");
  };

  const handleDeleteBooking = () => {
    Alert.alert("Delete Booking", "Are you sure you want to delete this booking?", [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', onPress: () => console.log('Booking deleted') },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Doctor Image */}
      <Image source={{ uri: doctor.image }} style={styles.doctorImage} />

      {/* Doctor Name */}
      <Text style={styles.doctorName}>{doctor.name}</Text>

      {/* Doctor Description */}
      <Text style={styles.description}>{doctor.description}</Text>

      {/* Booking Time */}
      <Text style={styles.bookingTime}>Booking Time: {doctor.bookingTime}</Text>

      {/* Edit Booking Button */}
      <TouchableOpacity style={styles.editButton} onPress={handleEditBooking}>
        <Text style={styles.buttonText}>Edit Booking</Text>
      </TouchableOpacity>

      {/* Delete Booking Button */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteBooking}>
        <Text style={styles.buttonText}>Delete Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
  },
  doctorImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  doctorName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  bookingTime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 30,
  },
  editButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BookingDetails;

