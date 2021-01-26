import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';


const DayWeather() {
    
    const dayTemp = setWeather(res.data.current.weather[0].temp);
    
    return (
        <div>
            
        </div>
    )
}

export default DayWeather;
