import React, {useEffect, useState} from 'react';
import axios from '../../axios';

import Layout from '../../Components/Layout';
import Title from '../../Components/Title';
import BackButton from './components/BackButton';
import PokemonTypeList from './components/PokemonTypeList';
import PokemonSpritesView from './components/PokemonSpritesView';

function PokemonDetail({history, location}) {
  const [pokemonData, updatePokemonData] = useState(null);
  const types = pokemonData ? pokemonData.types : [];
  const sprites = pokemonData ? pokemonData.sprites : null;

  useEffect(() => {
    getPokemonInfo();
  }, [0]);

  async function getPokemonInfo() {
    const {
      state: {pokemon},
    } = location;

    const response = await axios.get(`/pokemon/${pokemon}`);
    console.log('Res: ', response.data);
    updatePokemonData(response.data);
  }

  return (
    <Layout>
      <BackButton onPress={history.goBack} />
      <Title>{location.state.pokemon}</Title>
      <PokemonTypeList types={types} />
      <PokemonSpritesView sprites={sprites} />
    </Layout>
  );
}

export default PokemonDetail;
