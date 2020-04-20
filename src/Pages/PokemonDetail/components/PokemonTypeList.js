import React from 'react';
import {View, StyleSheet} from 'react-native';

import PokemonType from './PokemonType';

function PokemonTypeList({types}) {
  const typesLabel = types.map((pokemon) => (
    <PokemonType key={`pktp__${pokemon.type.name}`} type={pokemon.type.name} />
  ));

  return <View style={styles.list}>{typesLabel}</View>;
}

const styles = StyleSheet.create({
  list: {flexDirection: 'row'},
});

export default PokemonTypeList;
