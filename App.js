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


  return (
    <SafeAreaView style={styles.container}>
      <DayWeather data={weather} style={styles.header} />
      <ScrollView style={styles.weekSection}>
        <AllDaysWeather data={weather} style={styles.weekSection} />
      </ScrollView>
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
