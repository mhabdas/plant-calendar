import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Picker } from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '100%',
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
        />
      );
      break;
    default:
      return template;
  }
  return template;
};

export default Input;
