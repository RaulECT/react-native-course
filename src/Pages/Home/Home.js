import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import axios from '../../axios';

import Layout from '../../Components/Layout';
import Title from '../../Components/Title';
import Searchbar from './Components/Searchbar';
import PokemonItem from './Components/PokemonItem';
import Button from './Components/Button';

function Home() {
  const [pokemons, updatePokemons] = useState([]);
  const nextPokemons = null;

  useEffect(() => {
    console.log('Ya me ejecute');
    getPokemons();
  }, []);

  async function getPokemons() {
    // const endPoint = nextPokemons ? nextPokemons : '/pokemon'
    const {
      data: {results, next},
    } = await axios.get('/pokemon');
    console.log('Pokemons: ', results.length);
    updatePokemons(results);
  }

  return (
    <Layout>
      <Title>Pokedex</Title>
      <Searchbar placeholder="Search pokemon..." />

      <FlatList
        style={styles.pokemonList}
        data={pokemons}
        renderItem={({item, index}) => (
          <PokemonItem
            key={`pk__${index}${item.name}`}
            pokemon={item.name}
            number={index + 1}
          />
        )}
        keyExtractor={({name}) => name}
      />

      <Button>See pokemons...</Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  pokemonList: {
    marginTop: 30,
    marginBottom: 75,
  },
});

export default Home;
