import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, StyleSheet, View } from 'react-native';

const AllDaysWeather = ({weather}) => {
    
    // Jour 1 : 
    const dayOne = weather.daily[0];
    const dayOneDate = Date(dayOne.dt * 1000);
    const dayOneTemp = dayOne.temp.day;
    const dayOneFeels = dayOne.feels_like.day;
    const dayOneWeatherType = dayOne.weather[0].description;
    const dayOneIcon = dayOne.weather[0].icon;

    // Jour 2:

    const dayTwo = weather.daily[1];
    const dayTwoDate = Date(dayTwo.dt * 1000);
    const dayTwoTemp = dayTwo.temp.day;
    const dayTwoFeels = dayTwo.feels_like.day;
    const dayTwoWeatherType = dayTwo.weather[0].description;
    const dayTwoIcon = dayTwo.weather[0].icon;
    
    // Jour 3 :

    const dayThree = weather.daily[2];
    const dayThreeDate = Date(dayThree.dt * 1000);
    const dayThreeTemp = dayThree.temp.day;
    const dayThreeFeels = dayThree.feels_like.day;
    const dayThreeWeatherType = dayThree.weather[0].description;
    const dayThreeIcon = dayThree.weather[0].icon;

    // Jour 4 :

    const dayFour = weather.daily[3];
    const dayFourDate = Date(dayFour.dt * 1000);
    const dayFourTemp = dayFour.temp.day;
    const dayFourFeels = dayFour.feels_like.day;
    const dayFourWeatherType = dayFour.weather[0].description;
    const dayFourIcon = dayFour.weather[0].icon;

     // Jour 5 :

    const dayFive = weather.daily[4];
    const dayFiveDate = Date(dayFive.dt * 1000);
    const dayFiveTemp = dayFive.temp.day;
    const dayFiveFeels = dayFive.feels_like.day;
    const dayFiveWeatherType = dayFive.weather[0].description;
    const dayFiveIcon = dayFive.weather[0].icon;
    
    // Jour 6 :

    const daySix = weather.daily[5];
    const daySixDate = Date(daySix.dt * 1000);
    const daySixTemp = daySix.temp.day;
    const daySixFeels = daySix.feels_like.day;
    const daySixWeatherType = daySix.weather[0].description;
    const daySixIcon = daySix.weather[0].icon;
    
    // Jour 7 :

    const daySeven = weather.daily[6];
    const daySevenDate = Date(daySeven.dt * 1000);
    const daySevenTemp = daySeven.temp.day;
    const daySevenFeels = daySeven.feels_like.day;
    const daySevenWeatherType = daySeven.weather[0].description;
    const daySevenIcon = daySeven.weather[0].icon;
    

    return (
        <ScrollView>
        <SafeAreaView style={styles.weekSection}>
        <View><Image source={{ uri: dayOneIcon }} style={styles.images} /></View>
        <Text style={styles.weekText}>{dayOneDate}</Text>
        <Text style={styles.weekText}>16° / {dayOneTemp}</Text>
        <Text style={styles.weekText}>{dayOneWeatherType}</Text>
        </SafeAreaView>
       
       <SafeAreaView style={styles.weekSection}>
        <View><Image source={{ uri: dayTwoIcon }} style={styles.images} /></View>
        <Text style={styles.weekText}>{dayTwoDate}</Text>
        <Text style={styles.weekText}>16° / {dayTwoTemp}</Text>
        <Text style={styles.weekText}>{dayTwoWeatherType}</Text>
        </SafeAreaView> 

        <SafeAreaView style={styles.weekSection}>
        <View><Image source={{ uri: dayThreeIcon }} style={styles.images} /></View>
        <Text style={styles.weekText}>{dayThreeDate}</Text>
        <Text style={styles.weekText}>16° / {dayThreeTemp}</Text>
        <Text style={styles.weekText}>{dayThreeWeatherType}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.weekSection}>
        <View><Image source={{ uri: dayFourIcon }} style={styles.images} /></View>
        <Text style={styles.weekText}>{dayFourDate}</Text>
        <Text style={styles.weekText}>16° / {dayFourTemp}</Text>
        <Text style={styles.weekText}>{dayFourWeatherType}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.weekSection}>
        <View><Image source={{ uri: dayFiveIcon }} style={styles.images} /></View>
        <Text style={styles.weekText}>{dayFiveDate}</Text>
        <Text style={styles.weekText}>16° / {dayFiveTemp}</Text>
        <Text style={styles.weekText}>{dayFiveWeatherType}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.weekSection}>
        <View><Image source={{ uri: daySixIcon }} style={styles.images} /></View>
        <Text style={styles.weekText}>{daySixDate}</Text>
        <Text style={styles.weekText}>16° / {daySixTemp}</Text>
        <Text style={styles.weekText}>{daySixWeatherType}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.weekSection}>
        <View><Image source={{ uri: daySevenIcon }} style={styles.images} /></View>
        <Text style={styles.weekText}>{daySevenDate}</Text>
        <Text style={styles.weekText}>16°/ {daySevenTemp}</Text>
        <Text style={styles.weekText}>{daySevenWeatherType}</Text>
        </SafeAreaView>

        </ScrollView>
    )
}

export default AllDaysWeather



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
  

