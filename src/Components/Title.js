import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Title({children}) {
  return <Text style={style.title}>{children}</Text>;
}

const style = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Title;
