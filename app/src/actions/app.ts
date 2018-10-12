import {
  GAME_TYPE_CHANGED,
  SWIPER_INDEX_DECREMENT,
  SWIPER_INDEX_INCREMENT,
} from 'actions/types';
import { moveNext } from 'utils/swiper';

export const changeGameType = (type: string) => dispatch => {
  dispatch({
    type: GAME_TYPE_CHANGED,
    gameType: type,
  });

  moveNext();
};

export const incrementIndex = () => ({
  type: SWIPER_INDEX_INCREMENT,
});

export const decrementIndex = () => ({
  type: SWIPER_INDEX_DECREMENT,
});
