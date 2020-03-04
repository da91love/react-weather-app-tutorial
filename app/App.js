import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = '222a6b0f26a9bc1a6ad4f991e02ad143';
const KELVIN_STATIC = 273.15;

export default class App extends Component{
  state = {
    isLoaded: false,
    error: null,
    city: null,
    tempMax: null,
    tempMin: null,
    desc: null,
    weather: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);

        const {latitude, longitude} = position.coords;
        this._getWeather(latitude, longitude);

        this.setState({
          isLoaded: true
        });
      },
      error => {
        this.setState({
          error: error
        });
      });
  }

  _getWeather = (lati, long) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(jsonRes => {
          const {name: city, main:{temp_max, temp_min}, weather:[{ description: desc, main:weather }]} = jsonRes;
          console.log(city, temp_max, temp_min, desc, weather);
          console.log(temp_max - KELVIN_STATIC);
          console.log(temp_min - KELVIN_STATIC);
          this.setState({
            city: city,
            tempMax: (temp_max - KELVIN_STATIC).toFixed(1),
            tempMin: (temp_min - KELVIN_STATIC).toFixed(1),
            desc: desc,
            weather: weather
          })
        })
  }

  render() {
    const {isLoaded, error, city, tempMax, tempMin, desc, weather} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded? <Weather tempMax={tempMax} tempMin={tempMin} city={city} desc={desc} weather={weather}/> : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>Getting weather</Text>
              { error ? <Text style={styles.errorText}>{error}</Text>: null}
            </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: "red",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fdf6aa',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 30,
    marginBottom: 100
  }
});