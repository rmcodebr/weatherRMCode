import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import WeatherForecast from "./WeatherForecast";
import { IMAGESCIVILLIGHT, WIND } from "../services/ImageHelper";
import moment from "moment-timezone";
import "moment/locale/pt-br";

const CurrentWeather = ({ wCLD }) => {
  if (wCLD) {
    return (
      <View>
        <FlatList
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: "#00000023", width: 1 }} />
          )}
          horizontal={true}
          data={wCLD?.dataseries}
          renderItem={({ item: wCLD, index }) => {
            return (
              <View>
                <Image
                  source={IMAGESCIVILLIGHT[wCLD.weather]}
                  style={styles.currentWeatherImage}
                />
                <View style={styles.currentWeatherContainer}>
                  <View>
                    <Text style={styles.day}>
                      {moment(wCLD.date.toString()).format("dddd")}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Text style={styles.max}>{wCLD.temp2m.max}&#176;C</Text>
                      <Image
                        style={{ height: 40, width: 40, marginHorizontal: 10 }}
                        source={require("../../assets/img/maxMinTemp.png")}
                      />
                      <Text style={styles.min}>{wCLD.temp2m.min}&#176;C</Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        marginTop: 20,
                      }}
                    >
                      <Image
                        style={{ height: 30, width: 30 }}
                        source={require("../../assets/weatherIcons/weather/windy.png")}
                      />
                      <Text style={styles.wind}>
                        {wCLD.wind10m_max * 3.6}{" "}
                        <Text style={{ fontSize: 16 }}>km/h</Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
};

const WeatherScroll = ({ wCLD }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <CurrentWeather wCLD={wCLD} />
      {/* <WeatherForecast /> */}
    </View>
  );
};

export default WeatherScroll;

const styles = StyleSheet.create({
  currentWeatherImage: {
    height: 150,
    width: 200,
    backgroundColor: "#18181B11",
    borderRadius: 60,
  },
  scrollView: {
    flex: 0.9,
    backgroundColor: "#18181BCC",
    padding: 30,
  },
  currentWeatherContainer: {
    backgroundColor: "#FFFFFF69",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 14,
    borderColor: "#eee",
    borderWidth: 0.2,
    padding: 10,
    margin: 8,
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3C3AA2A1",
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    overflow: "hidden",
    fontWeight: 200,
    marginBottom: 20,
  },
  max: {
    fontSize: 30,
    color: "#d82b47",
    fontWeight: "900",
    textAlign: "center",
    marginTop: 4,
  },
  min: {
    fontSize: 30,
    color: "#18527c",
    fontWeight: "900",
    textAlign: "center",
    marginTop: 4,
  },

  wind: {
    fontSize: 25,
    color: "#3C3AA9",
    fontWeight: "900",
    textAlign: "center",
  },
});
