import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component {
  render() {
    return (
        <LinearGradient colors={['#00c6fb', '#005bea']} style={styles.container}>

          <View style={styles.upper}>
            <Ionicons color='white' size={100} name='ios-rainy'/>
            <Text style={styles.temperature}>36℃</Text>
          </View>

          <View style={styles.lower}>
            <Text style={styles.title}>WEATHER TITLE</Text>
            <Text style={styles.subtitle}>FOR MORE INFO</Text>
          </View>

        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  temperature: {
    fontSize: 32,
    color: 'white'
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