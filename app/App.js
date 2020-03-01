import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image, StatusBar } from 'react-native';
import Weather from './Weather';

export default class App extends Component{
  state = {
    isLoaded: true
  };

  render() {
    const {isLoaded} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded? <Weather/> : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>Getting weather</Text>
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