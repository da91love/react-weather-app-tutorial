import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';

export default class App extends Component{
  state = {
    isLoaded: false
  };

  render() {
    const {isLoaded} = this.state;

    return (
      <View style={styles.container}>
        {isLoaded? null : (
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