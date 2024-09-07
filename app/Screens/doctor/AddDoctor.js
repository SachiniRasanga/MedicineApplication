import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const AddDoctor = ({ navigation }) => {
  const [name, setName] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmitBtn = () => {
    // Handle form submission
    const doctorData = {
      name,
      hospitalName,
      specialization,
      mobileNumber,
      address,
      age,
      description
    }

    console.log(doctorData);

    saveDoctor(doctorData)

  };

  function saveDoctor(doctorData) {
    axios.post("http://localhost:5001/doctors", doctorData)
      .then(() => {
        alert("Doctor Saved")
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Doctor Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter doctor name"
      />

      <Text style={styles.label}>Hospital Name</Text>
      <TextInput
        style={styles.input}
        value={hospitalName}
        onChangeText={setHospitalName}
        placeholder="Enter hospital name"
      />

      <Text style={styles.label}>Specialization</Text>
      <TextInput
        style={styles.input}
        value={specialization}
        onChangeText={setSpecialization}
        placeholder="Enter specialization"
      />

      <Text style={styles.label}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        value={mobileNumber}
        onChangeText={setMobileNumber}
        placeholder="Enter mobile number"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter address"
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Enter age"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        multiline
      />

      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('Doctor Details')}

        onPress={() => {
          handleSubmitBtn()
          navigation.navigate('Doctor Details')
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
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

export default AddDoctor;
