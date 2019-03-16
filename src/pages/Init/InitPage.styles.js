import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	superContainer: {
		flex: 1,
		backgroundColor: 'black'
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignSelf: 'center'
	},
	devider: {
		height: 200
	},
	titleContainer: {
		height: 50,
		alignItems: 'center'
	},
	title: {
		fontSize: 44,
		fontWeight: 'bold',
		color: 'white'
	},
	buttonContainer: {
		height: 200
	}
});
