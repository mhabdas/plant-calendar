import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signIn, signUp } from '../../store/actions/userActions';
import Input from '../../utils/forms/input';
import ValidationRules from '../../utils/forms/validationRules';

const styles = StyleSheet.create({
  form: {
    margin: 20,
    padding: 20,
  },
  errorContainer: {
    padding: 10,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#FC4458',
  },
  errorText: {
    fontFamily: 'Open Sans',
    fontSize: 15,
    color: 'white',
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
          isRequired: true,
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

    const { rules } = formCopy[name];

    formCopy[name].valid = ValidationRules(value, rules, formCopy);

    this.setState({
      form: formCopy,
    });
  };

  confirmPassword = () => {
    const {
      form: { confirmedPassword },
    } = this.state;
    return (
      <Input
        placeholder="Confirm password"
        autoCapitalize="none"
        type={confirmedPassword.type}
        value={confirmedPassword.value}
        keyboardType="email-address"
        onChange={input => this.updateInput('confirmedPassword', input.nativeEvent.text)}
        secureTextEntry
      />
    );
  };

  formHasErrors = () => {
    const { hasErrors } = this.state;
    return hasErrors ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Oops, something wasn&apos;t right...</Text>
      </View>
    ) : null;
  };

  changeFormType = () => {
    const { type } = this.state;
    const typeCopy = type;
    this.setState({
      type: typeCopy === 'Login' ? 'Register' : 'Login',
      action: typeCopy === 'Sign in' ? 'Sign in' : 'Sign up',
      actionMode: typeCopy === 'Sign in' ? 'Sign up' : 'Sign in',
    });
  };

  goNext = () => {
    const { navigate } = this.props;
    navigate('App');
  };

  submitUser = () => {
    let isFormValid = true;
    const formToSubmit = {};

    const { type, form } = this.state;

    const { signInDispatch, signUpDispatch } = this.props;

    const formCopy = form;

    Object.keys(formCopy).forEach(key => {
      if (type === 'Login') {
        if (key !== 'confirmedPassword') {
          isFormValid = isFormValid && formCopy[key].valid;
          formToSubmit[key] = formCopy[key].value;
        }
      } else {
        isFormValid = isFormValid && formCopy[key].valid;
        formToSubmit[key] = formCopy[key].value;
      }
    });

    if (isFormValid) {
      return type === 'Login' ? signInDispatch(formToSubmit) : signUpDispatch(formToSubmit);
    }
    return this.setState({
      hasErrors: true,
    });
  };

  render() {
    const {
      form: { email, password },
      action,
      actionMode,
      type,
    } = this.state;

    console.log(this.props.user);

    return (
      <View style={styles.form}>
        <Input
          placeholder="Enter e-mail"
          autoCapitalize="none"
          type={email.type}
          value={email.value}
          keyboardType="email-address"
          onChange={input => this.updateInput('email', input.nativeEvent.text)}
        />
        <Input
          placeholder="Enter password"
          autoCapitalize="none"
          type={password.type}
          value={password.value}
          onChange={input => this.updateInput('password', input.nativeEvent.text)}
          secureTextEntry
        />
        {type !== 'Login' && this.confirmPassword()}
        {this.formHasErrors()}
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={[styles.button, styles.buttonSignIn]}
            onPress={() => this.submitUser()}
          >
            <Text style={[styles.buttonText, styles.buttonTextSignIn]}>{action.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, styles.buttonSignUp]}
            onPress={this.changeFormType}
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

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signInDispatch: form => dispatch(signIn(form)),
    signUpDispatch: form => dispatch(signUp(form)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
