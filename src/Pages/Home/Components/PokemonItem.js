import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const COLORS = ['#717EC3', '#5BC0EB', '#FDE74C', '#E55934'];

function PokemonItem({ pokemon = 'Evee', number = 1 }) {
  const [pokemonColor, changeColor] = useState('#000');
  const { item, abbrevation, abbrevationText, pokemonName } = styles;
  const pokemonAbrv = pokemon.slice(0, 2).toUpperCase();
  const _abbrevation = { ...abbrevation, backgroundColor: pokemonColor };

  useEffect(() => {
    const color = getRandomColor();
    changeColor(color);
  }, []);

  function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  return (
    <Link to={{pathname: '/pokemon', state: {pokemon}}}>
      <View style={item}>
        <View style={_abbrevation}>
          <Text style={abbrevationText}>{pokemonAbrv}</Text>
        </View>

        <Text style={pokemonName}>{`No. ${number} - ${pokemon}`}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: '#E55934',
    borderWidth: 1,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 10,
  },
  abbrevation: {
    width: 43,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginRight: 8,
  },
  abbrevationText: {
    color: '#fff',
    fontSize: 18,
  },
  pokemonName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PokemonItem;
