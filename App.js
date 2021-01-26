import AllDaysWeather from './components/AllDaysWeather';
import axios from 'axios';
import DayWeather from './components/DayWeather';
import React, {useState, UseEffect } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

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
      <DayWeather data={dayTemp} style={styles.header} />
      <AllDaysWeather data={allDays} style={styles.weekSection} />
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
  },

  weekSection: {
    backgroundColor: 'white',
  }

});
