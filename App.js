import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import DateTime from "./src/components/DateTime";
import WeatherScroll from "./src/components/WeatherScroll";
import { useEffect, useState } from "react";
import { getLocation } from "./src/services/getLocation";
import { getReverseGeocoding } from "./src/services/getReverseGeocoding";
import { getWeatherCivilLightData } from "./src/services/getWeatherCivilLightData";
const img = require("./assets/img/backimage.png");

export default function App() {
  const [location, setLocation] = useState({});
  const [reverseGeocoding, setReverseGeocoding] = useState({});
  const [weatherCivilLightData, setWeatherCivilLightData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const location = await getLocation();
    console.log(location);
    setLocation(location);
    let [lat, lon] = [location.coords.latitude, location.coords.longitude];
    const reverseGeocoding = await getReverseGeocoding(lat, lon);
    setReverseGeocoding(reverseGeocoding);
    console.log(reverseGeocoding);
    const weatherCivilLightData = await getWeatherCivilLightData(lat, lon);
    console.log(weatherCivilLightData);
    setWeatherCivilLightData(weatherCivilLightData);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <StatusBar style="auto" />
        <DateTime loc={location} revG={reverseGeocoding} />
        <WeatherScroll wCLD={weatherCivilLightData} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    opacity: 1,
  },
});
