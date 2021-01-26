import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';


const DayWeather = ({dayTemp}) => {
    
    const degrees = dayTemp.temp;


    return (
        <SafeAreaView>
            <Text>
            Température : {degrees} 
            </Text>
        </SafeAreaView>
    )
}

export default DayWeather

