import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';


const DayWeather = ({weather}) => {
    
    const dayTemp = weather.current;
    const today = Date(dayTemp.dt * 1000);
    const degrees = dayTemp.temp;
    const feelDegrees = dayTemp.feels_like;
    const weatherType = dayTemp.weather[0].description;
    const weatherIcon = 'http://openweathermap.org/img/wn/"+dayTemp.weather[0].icon+"@2x.png';


    return (
        <SafeAreaView>
            <SafeAreaView style={styles.header}>
            <Text style={styles.headerText}>{today}</Text>
            <Text style={styles.headerText}>{degrees}</Text>
            <Text style={styles.headerText}>{feelDegrees}</Text>
            <View><Image source={{ uri: weatherIcon }} style={styles.images} /></View>
            <Text style={styles.headerText}>{weatherType}</Text>
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
  