import AllDaysWeather from './components/AllDaysWeather';
import axios from 'axios';
import DayWeather from './components/DayWeather';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function App() {

  const [Weather, setWeather] = useState([]);

  useEffect(() => {
    axios.get('http://api.openweathermap.org/data/2.5/onecall?lat=50.633333&lon=3.066667&exclude=minutely,hourly,alerts&&appid=6e2c8f258ad2ee898b5f95e8ee374d29')
    .then(res => {
      setWeather(res.data);
    })
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        <DayWeather />
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'

  },

  title: {
    color: 'white',
  }

});
