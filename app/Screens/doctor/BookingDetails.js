import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import axios from 'axios';
import { useRoute } from "@react-navigation/native"

const BookingDetails = ({navigation}) => {

  const route = useRoute();
  const id = route.params?.id;

  const [singleDoctor, setSingleDoctor] = useState([]);

  // Get by id
  useEffect(() => {
    axios.get(`http://localhost:5001/doctors/${id}`)
      .then((response) => {
        setSingleDoctor(response.data);
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

const handleEditBooking = () => {
    Alert.alert("Edit Booking", "Redirect to booking editing screen.");
  };

  const handleDeleteBooking = () => {
    const flag = confirm("Are you sure you want to delete ?")
    if (flag) {
      axios.delete(`http://localhost:5001/doctors/${id}`)
        .then(() => {
          alert("Doctor deleted");
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
return (
    <View style={styles.container}>
      {/* Doctor Image */}
      <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww" }} style={styles.doctorImage} />

      {/* Doctor Name */}
      <Text style={styles.doctorName}>{singleDoctor.name}</Text>

      {/* Doctor Description */}
      <Text style={styles.description}>{singleDoctor.description}</Text>

      {/* Booking Time */}
      <Text style={styles.mobileNumber}>{singleDoctor.mobileNumber}</Text>

      {/* Edit Booking Button */}
      <TouchableOpacity style={styles.editButton} onPress={() => {
        navigation.navigate("Update Doctor",{id: singleDoctor.id})
      }
      }>
        <Text style={styles.buttonText}>Edit Booking</Text>
      </TouchableOpacity>

      {/* Delete Booking Button */}
      <TouchableOpacity style={styles.deleteButton} onPress={() => {
        handleDeleteBooking()
      }}>
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
  mobileNumber: {
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

