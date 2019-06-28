import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
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
  button: {
    marginBottom: 10,
    width: '100%',
    borderRadius: 30,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
  },
  buttonSignIn: {
    backgroundColor: '#244f44',
    padding: 10,
  },
  buttonSignUp: {
    borderColor: '#244f44',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 8,
  },
  buttonTextSignIn: {
    color: '#fff',
  },
  buttonTextSignUp: {
    color: '#244f44',
  },
});

class AuthForm extends Component {
  state = {
    type: 'Login',
    action: 'Sign in',
    actionMode: 'Sign up',
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

  changeFormType = () => {
    const { type, form } = this.state;
    const formCopy = form;
    formCopy.type = type === 'Login' ? 'Register' : 'Login';
    formCopy.action = type === 'Sign in' ? 'Sign up' : 'Sign in';
    formCopy.actionMode = type === 'Sign in' ? 'Sign in' : 'Sign up';
    this.setState({
      form: formCopy,
    });
  };

  goNext = () => {
    const { navigate } = this.props;
    navigate('App');
  };

  render() {
    const {
      form: {
        email: { type, value },
      },
      action,
      actionMode,
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
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={[styles.button, styles.buttonSignIn]}
            onPress={() => this.goNext()}
          >
            <Text style={[styles.buttonText, styles.buttonTextSignIn]}>{action.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, styles.buttonSignUp]}
            onPress={() => this.changeFormType()}
          >
            <Text style={[styles.buttonText, styles.buttonTextSignUp]}>
              {actionMode.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AuthForm.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default AuthForm;
