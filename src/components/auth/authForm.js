import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from '../../utils/forms/input';

const styles = StyleSheet.create({
  form: {
    margin: 20,
    padding: 20,
  },
  errorContainer: {
    color: 'white',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#FC4458',
    fontFamily: 'Open Sans',
    fontSize: 15,
  },
});

class AuthForm extends Component {
  state = {
    type: 'Login',
    action: 'Login',
    actionMode: 'I want to register',
    hasErrors: false,
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

  updateInput = (name, value) => {
    const { form } = this.state;

    this.setState({
      hasErrors: false,
    });

    const formCopy = form;
    formCopy[name].value = value;

    this.setState({
      form: formCopy,
    });
  };

  confirmPassword = () => {
    const {
      form: {
        email: { type, value },
      },
    } = this.state;
    return type !== 'Login' ? (
      <Input
        placeholder="Confirm password"
        placeholderTextColor="black"
        autoCapitalize="none"
        type={type}
        value={value}
        keyboardType="email-address"
        onChange={input => this.updateInput('confirmedPassword', input)}
        secureTextEntry
      />
    ) : null;
  };

  formHasErrors = () => {
    const { hasErrors } = this.state;
    return hasErrors ? (
      <View>
        <Text style={styles.errorContainer}>Oops, something wasn&apos;t right...</Text>
      </View>
    ) : null;
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
          onChange={input => this.updateInput('email', input)}
        />
        <Input
          placeholder="Enter password"
          placeholderTextColor="black"
          autoCapitalize="none"
          type={type}
          value={value}
          keyboardType="email-address"
          onChange={input => this.updateInput('password', input)}
          secureTextEntry
        />
        {this.confirmPassword()}
        {this.formHasErrors()}
      </View>
    );
  }
}

export default AuthForm;
