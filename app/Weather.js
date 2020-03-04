import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const WEATHER_CASE = {
  Rain: {
    color: ['#00c6fb', '#005bea'],
    title: '비오는 날입니다',
    subtitle: '아침에는 차분한 재즈로 시작해보세요',
    icon: 'ios-rainy'
  },
  Clear: {
    color: ['#fef253', '#ff7300'],
    title: '오랜만에 맑은 날씨네요?',
    subtitle: '커튼을 겉고 힘차세 시작해볼까요!',
    icon: 'ios-sunny'
  },
  ThunderStorm: {
    color: ['#00ecbc', '#007adf'],
    title: '번개가 칩니다',
    subtitle: '낙뢰에 주의하세요',
    icon: 'ios-thunderstorm'
  },
  Clouds: {
    color: ['#d7d2cc', '#304352'],
    title: '흐린날 입니다',
    subtitle: '차분하게 책읽기 좋은 날이죠',
    icon: 'ios-cloudy'
  },
  Snow: {
    color: ['#7de2fc', '#b9b6e5'],
    title: '눈오는 날입니다',
    subtitle: '눈은 항상 설레요',
    icon: 'ios-snow'
  },
  Drizzle: {
    color: ['#b9f7fe', '#66a6ff'],
    title: '진눈깨비가 내립니다',
    subtitle: '게이같은 날시네요',
    icon: 'ios-rainy-outline'
  },
};

export default class Weather extends Component {
  render() {
    return (
        <LinearGradient colors={WEATHER_CASE[this.props.weather].color} style={styles.container}>

          <View style={styles.upper}>
            <Ionicons color='white' size={100} name={WEATHER_CASE[this.props.weather].icon}/>
            <Text style={styles.city}>{this.props.city}</Text>
          </View>

          <View style={styles.middle}>
            <Text style={styles.temperature}>Max {this.props.tempMax}℃</Text>
            <Text style={styles.temperature}>Min {this.props.tempMin}℃</Text>
          </View>

          <View style={styles.lower}>
            <Text style={styles.title}>{WEATHER_CASE[this.props.weather].title}</Text>
            <Text style={styles.subtitle}>{WEATHER_CASE[this.props.weather].subtitle}</Text>
          </View>

        </LinearGradient>
    );
  }
}

Weather.propTypes = {
  city: PropTypes.string.isRequired,
  tempMax: PropTypes.string.isRequired,
  tempMin: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  city: {
    fontSize: 40,
    color: 'white'
  },
  temperature: {
    fontSize: 32,
    color: 'white'
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lower: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 27,
    color: 'white'
  },
  subtitle: {
    fontSize: 18,
    color: 'white'
  }
});