import { createStackNavigator, createAppContainer } from 'react-navigation';

import InitPage from '../pages/Init/InitPage';
import ListPage from '../pages/List/ListPage';

const MainNavigator = createStackNavigator(
  {
    Init: InitPage,
    List: ListPage
  },
  {
    initialRouteName: 'Init'
  }
);

export default createAppContainer(MainNavigator);
