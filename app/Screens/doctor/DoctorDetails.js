import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const DoctorDetails = ({ navigation }) => {

    const [doctors, setDoctors] = useState([]);

    //api call
    useEffect(() => {
        axios.get("http://localhost:5001/doctors")
            .then((response) => {
                setDoctors(response.data);
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={doctors?.map(item => item) || []}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} style={styles.image} />
                        
                        <View style={styles.detailsAndButtonContainer}>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.specialization}>{item.specialization}</Text>
                            </View>
                            <TouchableOpacity style={styles.button}
                                onPress={() => navigation.navigate('Booking Details', { id: item.id })}>
                                <Text style={styles.buttonText}>MANAGE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default DoctorDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    detailsAndButtonContainer: {
        flex: 1,
        marginLeft: 40,
        justifyContent: 'center',
    },
    detailsContainer: {
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    specialization: {
        fontSize: 15,
        marginTop: 5,
        color: '#555',
    },
    button: {
        backgroundColor: '#7A1CAC',
        paddingVertical: 5, // Reduced padding for a smaller button
        paddingHorizontal: 15, // Adjusted horizontal padding
        borderRadius: 15, // Smaller radius for a smaller button
        shadowColor: '#000',
        padding:10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: 80, // Set a fixed width (use numeric value)
        elevation: 5,
        justifyContent: 'center', // Centers the text inside the button horizontally
        alignItems: 'center',     // Centers the text inside the button vertically
    },
    
    buttonText: {
        color: '#FFFFFF',
        fontSize: 12, // Reduced font size
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
