import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ForecastWeather = () => {
  return (
    <View style={styles.forecastWeatherContainer}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/weatherIcons/weather/clearday.png")}
          style={styles.currentWeatherImage}
        />
        <Text style={styles.day}>Segunda</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Text style={styles.max}>Max</Text>
          <Text style={styles.min}>Min</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Text style={styles.cloud}>Nuvens</Text>
          <Text style={styles.wind}>Vent</Text>
        </View>
      </View>
    </View>
  );
};

const WeatherForecast = () => {
  return (
    <View>
      <ForecastWeather />
    </View>
  );
};

export default WeatherForecast;

const styles = StyleSheet.create({
  currentWeatherImage: {
    right: 10,
    height: 80,
    width: 80,
  },
  forecastWeatherContainer: {
    flex: 1,
    backgroundColor: "#00000033",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 14,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 20,
    margin: 15,
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3C3C22",
    padding: 10,
    textAlign: "center",
    borderRadius: 14,
    overflow: "hidden",
    fontWeight: 200,
    marginTop: 10,
    marginBottom: 20,
  },
  max: {
    fontSize: 20,
    color: "red",
    fontWeight: 200,
    textAlign: "center",
  },
  min: {
    fontSize: 20,
    color: "blue",
    fontWeight: 200,
    textAlign: "center",
  },
  cloud: {
    fontSize: 20,
    color: "red",
    fontWeight: 200,
    textAlign: "center",
  },
  wind: {
    fontSize: 20,
    color: "red",
    fontWeight: 200,
    textAlign: "center",
  },
});
