import React, { seEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';


const DayWeather = ({weather}) => {
    
    const today = weather.current.dt;
    const degrees = weather.current.temp;
    const feelDegrees = weather.current.feels_like;
    const dayTemp = weather.current;
    const weatherType = weather.current.weather[0].description;
    const weatherIcon = weather.current.weather[0].icon;

    return (
        <SafeAreaView>
            <SafeAreaView style={styles.header}>
            <Text style={styles.headerText}>Tuesday January 25 2021 : {today}</Text>
            <Text style={styles.headerText}>19° : {degrees}</Text>
            <Text style={styles.headerText}>12° :{feelDegrees}</Text>
            <Image>{weatherIcon}</Image>
            <Text style={styles.headerText}>Cloudy : {weatherType}</Text>
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default DayWeather

