import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function PokemonType({type}) {
  const {labelLayout, text} = styles;

  return (
    <View style={labelLayout}>
      <Text style={text}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  labelLayout: {
    borderRadius: 100,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: '#E55934',
    marginRight: 5,
  },
  text: {
    color: '#fff',
    textTransform: 'capitalize',
  },
});

export default PokemonType;
