import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from "@react-navigation/native"

const UpdateDoctor = ({ navigation }) => {

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

  const handleChange = (name, value) => {
    setSingleDoctor({
      ...singleDoctor,
      [name]: value
    });
  };

  const handleUpdateBtn = () => {

    axios.put(`http://localhost:5001/doctors/${id}`, singleDoctor)
      .then(() => {
        alert("Doctor Update");
        navigation.navigate("Booking Details");
      })
      .catch((err) => {
        console.log(err);
      })

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Doctor Name</Text>
      <TextInput
        style={styles.input}
        value={singleDoctor.name}
        onChangeText={(text) => handleChange('name', text)}
        placeholder="Enter doctor name"
      />

      <Text style={styles.label}>Hospital Name</Text>
      <TextInput
        style={styles.input}
        value={singleDoctor.hospitalName}
        onChangeText={(text) => handleChange('hospitalName', text)}
        placeholder="Enter hospital name"
      />

      <Text style={styles.label}>Specialization</Text>
      <TextInput
        style={styles.input}
        value={singleDoctor.specialization}
        onChangeText={(text) => handleChange('specialization', text)}
        placeholder="Enter specialization"
      />

      <Text style={styles.label}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        value={singleDoctor.mobileNumber}
        onChangeText={(text) => handleChange('mobileNumber', text)}
        placeholder="Enter mobile number"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={singleDoctor.address}
        onChangeText={(text) => handleChange('address', text)}
        placeholder="Enter address"
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        value={singleDoctor.age}
        onChangeText={(text) => handleChange('age', text)}
        placeholder="Enter age"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={singleDoctor.description}
        onChangeText={(text) => handleChange('description', text)}
        placeholder="Enter description"
        multiline
      />

      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('Doctor Details')}

        onPress={() => {
          handleUpdateBtn();
          navigation.navigate('Doctor Details')
        }}
      >
        <Text style={styles.buttonText}>Update Doctor</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#7A1CAC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default UpdateDoctor;
