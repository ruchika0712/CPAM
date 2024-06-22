import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';

const WCard = () => {
    return (
        <TouchableOpacity
            style={{
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                elevation: 3,
                shadowColor: '#000',
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
                alignContent: 'center'
            }}
        >

            <View style={{
                padding: 16,
                marginRight: 5,
                height: 250,
                width: 300,
                overflow: 'hidden',
                justifyContent: 'center', // Align items vertically in the space between
                alignItems: 'center',
                alignContent: 'center'
            }}>
            <Image 

                source={require('../assets/plane.gif')}
                style={{
                    height: 200,
                    width: 300,
                    borderRadius: 20,
                    
                }}
                
            />
                
            </View>
            
        </TouchableOpacity>
    );
};

export default WCard;
