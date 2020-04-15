import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Layout from '../../Components/Layout';
import Title from '../../Components/Title';
import Searchbar from './Components/Searchbar';
import PokemonItem from './Components/PokemonItem';

const POKEMONS = [
  {name: 'Evee'},
  {name: 'Evee'},
  {name: 'Evee'},
  {name: 'Evee'},
  {name: 'Evee'},
  {name: 'Evee'},
  {name: 'Evee'},
  {name: 'Evee'},
  {name: 'Evee'},
  {name: 'Evee'},
];

function Home() {
  return (
    <Layout>
      <Title>Pokedex</Title>
      <Searchbar placeholder="Search pokemon..." />

      <FlatList
        data={POKEMONS}
        renderItem={({item, index}) => (
          <PokemonItem pokemon={item.name} number={index + 1} />
        )}
        keyExtractor={({name}) => `pokemon__${name}`}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({});

export default Home;
