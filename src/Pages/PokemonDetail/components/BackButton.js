import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BackButton as BackButtonNative} from 'react-router-native';

function BakcButton({onPress}) {
  const {button, text} = styles;

  return (
    <BackButtonNative>
      <TouchableOpacity onPress={onPress} style={button}>
        <Text style={text}>Back</Text>
      </TouchableOpacity>
    </BackButtonNative>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
  },
  text: {
    color: '#fff',
  },
});

export default BakcButton;
