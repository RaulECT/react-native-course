import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const DEFAULT_IMAGE =
  'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

function PokemonSpritesView({sprites}) {
  const {spritesLayout, imageContainer, image} = styles;

  const front = sprites ? sprites.front_default : DEFAULT_IMAGE;
  const back = sprites ? sprites.back_default : DEFAULT_IMAGE;
  const frontShiny = sprites ? sprites.front_shiny : DEFAULT_IMAGE;
  const backShiny = sprites ? sprites.back_shiny : DEFAULT_IMAGE;

  return (
    <View style={spritesLayout}>
      <View style={imageContainer}>
        <Image source={{uri: front}} style={image} />
        <Image source={{uri: frontShiny}} style={image} />
      </View>

      <View style={imageContainer}>
        <Image source={{uri: back}} style={image} />
        <Image source={{uri: backShiny}} style={image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  spritesLayout: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 50,
    marginBottom: 50,
  },
  imageContainer: {flexDirection: 'row'},
  image: {
    width: 54,
    height: 57,
  },
});

export default PokemonSpritesView;
