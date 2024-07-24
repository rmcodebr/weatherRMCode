import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { getWeatherData } from "../services/getWeatherData";
import { getReverseGeocoding } from "../services/getReverseGeocoding";
import { getLocation } from "../services/getLocation";

const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemTitle}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const HomeScreen = ({ wData }) => {
  const [location, setLocation] = useState("");
  const [reverseGeocoding, setReverseGeocoding] = useState({});
  const [weatherData, setWeatherData] = useState([]);

  const ts = location.coords?.latitude;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <View>
            <Text style={styles.cityText}>{reverseGeocoding.city}</Text>
            <Text style={styles.localityText}>{reverseGeocoding.locality}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnLocation}
              onPress={async () => {
                const location = await getLocation();
                setLocation(location);
                console.log(location);
                let [lat, lon] = [
                  location.coords.latitude,
                  location.coords.longitude,
                ];

                const reverseGeocoding = await getReverseGeocoding(lat, lon);
                setReverseGeocoding(reverseGeocoding);

                console.log(reverseGeocoding);

                const weatherData = await getWeatherData(lat, lon);

                setWeatherData(weatherData);
                console.log(weatherData);
              }}
            >
              <FontAwesome name="map-marker" size={50} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem
            title="Latitude"
            value={reverseGeocoding.latitude?.toString().slice(0, 7)}
            unit="&#176;"
          />
          <WeatherItem
            title="Longitude"
            value={reverseGeocoding.longitude?.toString().slice(0, 7)}
            unit="&#176;"
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  cityText: {
    color: "white",
    fontSize: 30,
  },
  localityText: { color: "white", fontSize: 20 },

  weatherItemContainer: {
    backgroundColor: "#18181b99",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemTitle: {
    color: "#eee",
    fontSize: 14,
    fontWeight: "100",
  },
});
