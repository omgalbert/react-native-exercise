import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './CountryCard.styles';

export default class CountryCard extends Component {
  getLanguage(languages) {
    return !!languages.length ? languages[0].name : '';
  }

  render() {
    const { country } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.countryTitle}>{country.name}</Text>
        <Text style={styles.info}>{country.subregion}</Text>
        <Text style={styles.info}>{country.capital}</Text>
        <Text style={styles.info}>
          Lang: {this.getLanguage(country.languages)}
        </Text>
      </View>
    );
  }
}

CountryCard.propTypes = {
  country: PropTypes.object.isRequired
};
