/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/Pages/Home/Home';
import PokemonDetail from './src/Pages/PokemonDetail/PokemonDetail';
import {NativeRouter, Route} from 'react-router-native';

const App = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon" component={PokemonDetail} />
    </NativeRouter>
  );
};

export default App;
