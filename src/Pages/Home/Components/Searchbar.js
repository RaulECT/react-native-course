import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

function Searchbar({placeholder}) {
  const {view, input} = styles;

  return (
    <View style={view}>
      <TextInput
        style={input}
        placeholder={placeholder}
        placeholderTextColor="rgba(255, 255, 255, .72)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    borderColor: '#E55934',
    borderWidth: 1,
    borderRadius: 50,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 12,
    paddingRight: 12,
  },
  input: {
    color: '#fff',
  },
});

export default Searchbar;
