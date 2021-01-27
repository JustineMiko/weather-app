import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';


const DayWeather = ({weather}) => {
    
    const dayTemp = weather.current;
    const today = dayTemp.dt;
    const degrees = dayTemp.temp;
    const feelDegrees = dayTemp.feels_like;
    const weatherType = dayTemp.weather[0].description;
    const weatherIcon = dayTemp.weather[0].icon;

    // const date = Date();
    // let todayDate = Date.now();
    // document.getElementById('now').innerHTML = todayDate;

    return (
        <SafeAreaView>
            <SafeAreaView style={styles.header}>
            <Text id='now' style={styles.headerText}>Tuesday January 25 2021 : {today}</Text>
            <Text style={styles.headerText}>19° : {degrees}</Text>
            <Text style={styles.headerText}>12° :{feelDegrees}</Text>
            <View><Image style={styles.image}>{weatherIcon}</Image></View>
            <Text style={styles.headerText}>Cloudy : {weatherType}</Text>
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default DayWeather



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  
    },
  
    header: {
      backgroundColor: 'blue',
      width: 380,
      height: 300,
  
  
    },
  
    headerText: {
      color: 'white',
      textAlign: 'center',
      margin: 20,
      fontWeight: 'bold',
  
    },
  
    weekSection: {
      backgroundColor: 'white',
      width: 380,
      borderColor: 'grey',
      borderStyle: 'solid',
      borderWidth: 1,
  
    },
  
    weekText: {
      fontWeight: 'bold',
    },

    image: {
        position: 'absolute',
      }
  
  });
  