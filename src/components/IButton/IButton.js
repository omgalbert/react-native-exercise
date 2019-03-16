import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './IButton.styles';

class IButton extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.button} activeOpacity={0.5}>
				<Text style={styles.buttonText}>START</Text>
			</TouchableOpacity>
		);
	}
}

export default IButton;
