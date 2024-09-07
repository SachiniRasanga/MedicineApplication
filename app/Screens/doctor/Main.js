import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor Management</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Doctor Details')}>
        <Text style={styles.buttonText}>View Doctor Details</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Add Doctors')}>
        <Text style={styles.buttonText}>Add Doctor Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:'20',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#7A1CAC', // Button color
    paddingVertical: 12,        // Adjust button height
    paddingHorizontal: 24,      // Adjust button width
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,                // Button text size
    fontWeight: 'bold',
  },
});

export default Main;
