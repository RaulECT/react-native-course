import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function Button({children}) {
  const {button, buttonText} = styles;

  return (
    <TouchableOpacity style={button} onPress={() => {}}>
      <Text style={buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#E55934',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    minWidth: 430,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Button;
