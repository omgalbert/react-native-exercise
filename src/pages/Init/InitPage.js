import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './InitPage.styles';
import IButton from '../../components/IButton/IButton';

class InitPage extends Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<View style={styles.superContainer}>
				<View style={styles.container}>
					<View style={styles.devider} />
					<View style={styles.titleContainer}>
						<Text style={styles.title}>EU</Text>
						<Text style={styles.title}>COUNTRIES</Text>
					</View>
					<View style={styles.buttonContainer}>
						<IButton />
					</View>
				</View>
			</View>
		);
	}
}

export default InitPage;
