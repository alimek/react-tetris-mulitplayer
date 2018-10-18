import { NavigationActions } from 'react-navigation';

export const back = () => NavigationActions.back();

export const navigateToGame = () => NavigationActions.navigate({
  routeName: 'Game',
});