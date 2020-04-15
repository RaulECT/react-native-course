import React from 'react';
import {View, StyleSheet} from 'react-native';

function Layout({children}) {
  const {layout} = styles;

  return <View style={layout}>{children}</View>;
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#FA7921',
    flex: 1,
    paddingTop: 54,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Layout;
