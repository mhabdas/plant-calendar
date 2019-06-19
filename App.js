import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text>Welcome to Plant App!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
