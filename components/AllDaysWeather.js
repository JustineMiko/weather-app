import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text} from 'react-native';

const AllDaysWeather = ({weather}) => {
    
    
    // Jour 1 : 
    const dayOne = weather.daily[0];
    const dayOneDate = dayOne.dt;
    const dayOneTemp = dayOne.temp.day;
    const dayOneFeels = dayOne.feels_like.day;
    const dayOneWeatherType = dayOne.weather[0].description;
    const dayOneIcon = dayOne.weather[0].icon;

    // Jour 2:

    const dayTwo = weather.daily[1];
    const dayTwoDate = dayTwo.dt;
    const dayTwoTemp = dayTwo.temp.day;
    const dayTwoFeels = dayTwo.feels_like.day;
    const dayTwoWeatherType = dayTwo.weather[0].description;
    const dayTwoIcon = dayTwo.weather[0].icon;
    
    // Jour 3 :

    const dayThree = weather.daily[2];
    const dayThreeDate = dayThree.dt;
    const dayThreeTemp = dayThree.temp.day;
    const dayThreeFeels = dayThree.feels_like.day;
    const dayThreeWeatherType = dayThree.weather[0].description;
    const dayThreeIcon = dayThree.weather[0].icon;

    // Jour 4 :

    const dayFour = weather.daily[3];
    const dayFourDate = dayFour.dt;
    const dayFourTemp = dayFour.temp.day;
    const dayFourFeels = dayFour.feels_like.day;
    const dayFourWeatherType = dayFour.weather[0].description;
    const dayFourIcon = dayFour.weather[0].icon;

     // Jour 5 :

    const dayFive = weather.daily[4];
    const dayFiveDate = dayFive.dt;
    const dayFiveTemp = dayFive.temp.day;
    const dayFiveFeels = dayFive.feels_like.day;
    const dayFiveWeatherType = dayFive.weather[0].description;
    const dayFiveIcon = dayFive.weather[0].icon;
    
    // Jour 6 :

    const daySix = weather.daily[5];
    const daySixDate = daySix.dt;
    const daySixTemp = daySix.temp.day;
    const daySixFeels = daySix.feels_like.day;
    const daySixWeatherType = daySix.weather[0].description;
    const daySixIcon = daySix.weather[0].icon;
    
    // Jour 7 :

    const daySeven = weather.daily[6];
    const daySevenDate = daySeven.dt;
    const daySevenTemp = daySeven.temp.day;
    const daySevenFeels = daySeven.feels_like.day;
    const daySevenWeatherType = daySeven.weather[0].description;
    const daySevenIcon = daySeven.weather[0].icon;
    

    return (
        <ScrollView>
        <SafeAreaView style={styles.weekSection}>
        <Image>{dayOneIcon}</Image>
        <Text style={styles.weekText}>Tuesday January 25 2021 / {dayOneDate}</Text>
        <Text style={styles.weekText}>16° / {dayOneTemp}</Text>
        <Text style={styles.weekText}>Rain / {dayOneWeatherType}</Text>
        </SafeAreaView>
       
        <SafeAreaView style={styles.weekSection}>
        <Image>{dayTwoIcon}</Image>
        <Text style={styles.weekText}>Tuesday January 25 2021 / {dayTwoDate}</Text>
        <Text style={styles.weekText}>16° / {dayTwoTemp}</Text>
        <Text style={styles.weekText}>Rain</Text>
        </SafeAreaView>
        
        <SafeAreaView style={styles.weekSection}>
        <Image>{dayThreeIcon}</Image>
        <Text style={styles.weekText}>Tuesday January 25 2021 / {dayTwoDate}</Text>
        <Text style={styles.weekText}>16°/ {dayTwoTemp}</Text>
        <Text style={styles.weekText}>Rain / {dayTwoWeatherType}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.weekSection}>
        <Image>{dayFourIcon}</Image>
        <Text style={styles.weekText}>Tuesday January 25 2021 / {dayForDate}</Text>
        <Text style={styles.weekText}>16° / {dayFourTemp}</Text>
        <Text style={styles.weekText}>Rain / {dayFourWeatherType}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.weekSection}>
        <Image>{dayFiveIcon}</Image>
        <Text style={styles.weekText}>Tuesday January 25 2021 / {dayFiveDate}</Text>
        <Text style={styles.weekText}>16° / {dayFiveTemp}</Text>
        <Text style={styles.weekText}>Rain / {dayFiveWeatherType}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.weekSection}>
        <Image>{daySixIcon}</Image>
        <Text style={styles.weekText}>Tuesday January 25 2021 / {daySixDate}</Text>
        <Text style={styles.weekText}>16° / {daySixTemp}</Text>
        <Text style={styles.weekText}>Rain / {daySixWeatherType}</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.weekSection}>
        <Image>{daySevenIcon}</Image>
        <Text style={styles.weekText}>Tuesday January 25 2021 / {daySevenDate}</Text>
        <Text style={styles.weekText}>16°/ {daySevenTemp}</Text>
        <Text style={styles.weekText}>Rain / {daySevenWeatherType}</Text>
        </SafeAreaView>

        </ScrollView>
    )
}

export default AllDaysWeather

