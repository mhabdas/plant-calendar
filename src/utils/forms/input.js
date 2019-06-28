import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    color: '#244f44',
    fontFamily: 'Open Sans',
    fontSize: 15,
    backgroundColor: '#fff',
    padding: 10,
    paddingLeft: 20,
    marginTop: 10,
    borderRadius: 30,
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
