import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import LogoComponent from './authLogo';
import AuthForm from './authForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#F3FAEE',
  },
  loading: {
    flex: 1,
    backgroundColor: '#F3FAEE',
  },
});

export default class AuthComponent extends Component {
  state = {
    loading: false,
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <LogoComponent />
        <AuthForm />
      </ScrollView>
    );
  }
}
