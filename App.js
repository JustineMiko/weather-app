import AllDaysWeather from './components/AllDaysWeather';
import axios from 'axios';
import DayWeather from './components/DayWeather';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function App() {

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios.get('http://api.openweathermap.org/data/2.5/onecall?lat=50.633333&lon=3.066667&exclude=minutely,hourly,alerts&&appid=6e2c8f258ad2ee898b5f95e8ee374d29')
    .then(res => {
      setWeather(res.data);
    })
  }, []);

  const dayTemp = weather.current;
  const allDays = weather.daily;


  return (
    <SafeAreaView style={styles.container}>
      {/* <DayWeather data={dayTemp} style={styles.header} /> */}
      
      <SafeAreaView style={styles.header}>
      <Text style={styles.headerText}>Tuesday January 25 2021</Text>
      <Text style={styles.headerText}>19°</Text>
      <Text style={styles.headerText}>12°</Text>
      <Image></Image>
      <Text style={styles.headerText}>Cloud</Text>
      </SafeAreaView>

      <ScrollView style={styles.weekSection}>
        <SafeAreaView style={styles.weekSection}>
        <Image></Image>
        <Text style={styles.weekText}>Tuesday January 25 2021</Text>
        <Text style={styles.weekText}>16°</Text>
        <Text style={styles.weekText}>Rain</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.weekSection}>
        <Image></Image>
        <Text style={styles.weekText}>Tuesday January 25 2021</Text>
        <Text style={styles.weekText}>16°</Text>
        <Text style={styles.weekText}>Rain</Text>
        </SafeAreaView>

      </ScrollView>

      {/* <AllDaysWeather data={allDays} style={styles.weekSection} /> */}


    </SafeAreaView>


  );
}

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
  }

});
