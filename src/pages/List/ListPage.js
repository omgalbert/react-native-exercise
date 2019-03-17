import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Api from '../../api/countries.api';

import { styles } from './ListPage.syles';
import CountryCard from './components/CountryCard/CountryCard';

export default class ListPage extends Component {
  static navigationOptions = {
    title: 'Countries',
    headerLeft: null,
    headerStyle: styles.headerStyle
  };

  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentWillMount() {
    this.getCountries();
  }

  async getCountries() {
    const countries = await Api.getCountryByRegion('europe');

    this.setState({ countries });
  }

  render() {
    const { countries } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Europe</Text>
        <FlatList
          data={countries}
          renderItem={({ item }) => <CountryCard country={item} />}
          keyExtractor={item => item.alpha3Code}
        />
      </View>
    );
  }
}
