import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './ListPage.syles';
import CountryCard from './components/CountryCard/CountryCard';

export default class ListPage extends Component {
  static navigationOptions = {
    title: 'Countries',
    headerLeft: null,
    headerStyle: styles.headerStyle
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Europe</Text>
        <CountryCard />
      </View>
    );
  }
}
