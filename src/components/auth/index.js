import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import LogoComponent from './authLogo';
import AuthForm from './authForm';
import { getTokens } from '../../utils/funcs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#e1f7d2',
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

  componentDidMount() {
    getTokens(value => {
      console.log(value);
    });
  }

  render() {
    const { loading } = this.state;
    const {
      navigation: { navigate },
    } = this.props;
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
        <AuthForm navigate={navigate} />
      </ScrollView>
    );
  }
}

AuthComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
