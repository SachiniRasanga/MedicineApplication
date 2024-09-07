import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const DoctorDetails = ({ navigation }) => {

    const [doctors, setDoctors] = useState([]);
    const [singleUser ,setsingleUser]=useState([]);

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
     

    // Get by id

   function getsingleUser(id){
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/doctors/${id}`)
            .then((response) => {
                setsingleUser(response.data);
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err);
            })

    },[])

   }

    return (
        <View style={styles.container}>

            <FlatList

                data={doctors?.map(item => item) || []}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>

                        <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} style={styles.image} />
                        <View>
                            <TouchableOpacity style={styles.button} 
                             onPress={() => navigation.navigate('Booking Details')}>
                                <Text style={styles.buttonText}>BOOK</Text>
                            </TouchableOpacity></View>
                        <View style={styles.detailsContainer}>

                            <Text style={styles.name}>{item.name}</Text>

                            <Text style={styles.specialization}>{item.specialization}</Text>
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
    detailsContainer: {
        marginLeft: 15,
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: '20px'
    },
    specialization: {
        fontSize: 15,
        marginLeft: '20px',
        marginTop: 10,
        color: '#555',

    },
    button: {
        backgroundColor: '#7A1CAC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20, // Center vertically
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft: 25, // Use numbers for positioning in React Native, not 'px'
    },
    buttonText: {
        color: '#FFFFFF', // Use the correct spelling 'color'
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});


