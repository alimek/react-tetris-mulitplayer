import { GAME_TYPE_CHANGED } from 'actions/types';
import { NavigationActions } from 'react-navigation';

export const changeGameType = (type: string) => dispatch => {
  dispatch({
    type: GAME_TYPE_CHANGED,
    gameType: type,
  });

  dispatch(NavigationActions.navigate({
    routeName: 'PlayerSelect',
  }));
};
