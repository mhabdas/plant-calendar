import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../../utils/forms/input';

const styles = StyleSheet.create({
  form: {
    margin: 20,
    backgroundColor: 'white',
    padding: 20,
    color: '#244f44',
  },
});

class AuthForm extends Component {
  state = {
    type: 'Login',
    action: 'Login',
    actionMode: 'I want to register',
    hasError: false,
    form: {
      email: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
          isEmail: true,
        },
      },
      password: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          confirmPass: true,
          minLength: 6,
        },
      },
      confirmedPassword: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          confirmPass: 'password',
        },
      },
    },
  };

  render() {
    const {
      form: {
        email: { type, value },
      },
    } = this.state;

    return (
      <View style={styles.form}>
        <Input
          placeholder="Enter e-mail"
          placeholderTextColor="black"
          autoCapitalize="none"
          type={type}
          value={value}
          keyboardType="email-address"
        />
      </View>
    );
  }
}

export default AuthForm;
