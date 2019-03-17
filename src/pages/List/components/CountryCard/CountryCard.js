import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

import { styles } from './CountryCard.styles';

export default class CountryCard extends Component {
  renderItem(item) {
    return <Text style={styles.countryTitle}>{item.key}</Text>;
  }
  render() {
    return (
      <FlatList
        data={[{ key: 'a' }, { key: 'b' }]}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
}
