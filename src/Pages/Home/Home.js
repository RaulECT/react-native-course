import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import axios from '../../axios';

import Layout from '../../Components/Layout';
import Title from '../../Components/Title';
import Searchbar from './Components/Searchbar';
import PokemonItem from './Components/PokemonItem';
import Button from './Components/Button';

function Home() {
  const [apiData, updateApiData] = useState({
    pokemons: [],
    nextPokemons: null,
  });

  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    const endPoint = apiData.nextPokemons ? apiData.nextPokemons : '/pokemon';
    const {
      data: {results, next},
    } = await axios.get(endPoint);

    updateApiData((prevState) => ({
      pokemons: prevState.nextPokemons
        ? [...prevState.pokemons, ...results]
        : results,
      nextPokemons: next,
    }));
  }

  async function searchPokemonByName(name) {
    if (name === '') {
      updateApiData({pokemons: [], nextPokemons: null});
      getPokemons();
      return;
    }

    const res = await axios.get(`/pokemon/${name.toLowerCase()}`);

    if (res.data) {
      console.log(res.data);
      updateApiData({pokemons: [{name: res.data.name}], nextPokemons: null});
    }
  }

  return (
    <Layout>
      <Title>Pokedex</Title>
      <Searchbar
        placeholder="Search pokemon..."
        onChange={searchPokemonByName}
      />

      <FlatList
        style={styles.pokemonList}
        data={apiData.pokemons}
        renderItem={({item, index}) => (
          <PokemonItem
            key={`pk__${index}${item.name}`}
            pokemon={item.name}
            number={index + 1}
          />
        )}
        keyExtractor={({name}) => name}
      />

      <Button onPress={getPokemons}>See pokemons...</Button>
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
