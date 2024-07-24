import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const days = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemValue}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTime = ({ loc, revG }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "pm" : "am";

      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.heading}>{time}</Text>
        </View>
        <View>
          <Text style={styles.subHeading}>{date}</Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem title="Temperarura Máxima" value="79" unit="&#176;C" />
          <WeatherItem title="Temperatura Mínima" value="79" unit="&#176;C" />
          <WeatherItem title="Nuvens" value="79" unit="%" />
          <WeatherItem title="Vento" value="79" unit="m/s" />
        </View>
      </View>
      <View style={styles.rightAlign}>
        <Text style={styles.cityText}>{revG.city}</Text>
        <Text style={styles.districtyText}>{revG.locality}</Text>
        <WeatherItem
          title="Alt"
          value={loc.coords?.altitude.toString().split(".")[0]}
          unit="m"
        />
        <WeatherItem
          title="Lat"
          value={loc.coords?.latitude.toString().slice(0, 7)}
          unit="&#176;"
        />
        <WeatherItem
          title="Lon"
          value={loc.coords?.longitude.toString().slice(0, 7)}
          unit="&#176;"
        />
      </View>
    </View>
  );
};

export default DateTime;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  heading: {
    fontSize: 45,
    color: "white",
    fontWeight: "300",
  },
  subHeading: {
    fontSize: 24,
    color: "#EEE",
    fontWeight: "500",
  },
  rightAlign: {
    alignItems: "center",
  },
  cityText: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
  },
  districtyText: {
    fontSize: 20,
    color: "white",
    fontWeight: "400",
  },
  weatherItemContainer: {
    backgroundColor: "#18181C99",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "200",
  },
  weatherItemValue: {
    color: "white",
    fontSize: 14,
    fontWeight: "300",
    marginLeft: 10,
  },
});
