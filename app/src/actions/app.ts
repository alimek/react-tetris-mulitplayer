import {
  GAME_TYPE_CHANGED,
  SWIPER_INDEX_DECREMENT,
  SWIPER_INDEX_INCREMENT,
} from 'actions/types';
import { moveNext } from 'utils/swiper';
import { AppType } from 'reducers/app';
import { setPlayerNotReady, setPlayerReady } from 'actions/player';
import { NavigationActions } from 'react-navigation';

export const changeGameType = (type: string) => dispatch => {
  dispatch({
    type: GAME_TYPE_CHANGED,
    gameType: type,
  });

  if (type === AppType.SINGLE) {
    dispatch(setPlayerReady());
  } else {
    dispatch(setPlayerNotReady());
  }

  moveNext();
};

export const incrementIndex = () => ({
  type: SWIPER_INDEX_INCREMENT,
});

export const decrementIndex = () => ({
  type: SWIPER_INDEX_DECREMENT,
});

export const resetToMenu = () => NavigationActions.navigate({
  routeName: 'SwiperPage',
});
