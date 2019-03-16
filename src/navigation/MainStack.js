import { createStackNavigator, createAppContainer } from 'react-navigation';

import InitPage from '../pages/Init/InitPage';

const MainNavigator = createStackNavigator(
	{
		Init: InitPage
	},
	{
		initialRouteName: 'Init'
	}
);

export default createAppContainer(MainNavigator);
