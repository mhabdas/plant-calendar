import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Picker } from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    color: '#244f44',
    fontFamily: 'Open Sans',
    fontSize: 15,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderColor: '#244f44',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

const Input = props => {
  let template = null;
  switch (props.type) {
    case 'textinput':
      template = (
        <TextInput
          {...props}
          style={[styles.input, props.overrideStyles && props.overrideStyles()]}
          placeholderTextColor="#244f44"
        />
      );
      break;
    default:
      return template;
  }
  return template;
};

export default Input;
