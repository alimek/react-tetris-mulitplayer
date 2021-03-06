import {
  PLAYER_MODEL_CHANGED,
  PLAYER_NAME_CHANGED,
  PLAYER_MODEL_INDEX_CHANGED,
  PLAYER_PAD_CHANGED,
  PLAYER_IS_READY,
  PLAYER_IS_NOT_READY,
} from 'actions/types';
import { moveNext } from 'utils/swiper';
import { players } from 'reducers/player';
import { PLAYER_SCORE_UP } from './types';
import { navigateToGame } from 'actions/nav';

export const changePlayerName = (name: string) => ({
  type: PLAYER_NAME_CHANGED,
  name: name.toUpperCase(),
});

export const changePlayerModel = (model: string) => dispatch => {
  dispatch({ type: PLAYER_MODEL_CHANGED, model });
  moveNext();
};

export const changeModelIndex = (index: number) => ({
  type: PLAYER_MODEL_INDEX_CHANGED,
  index,
  model: players[index],
});

export const changePlayerPad = (pad: string) => dispatch => {
  dispatch({
    type: PLAYER_PAD_CHANGED,
    pad,
  });
  dispatch(navigateToGame());
};

export const scoreUp = (points: number) => ({ type: PLAYER_SCORE_UP, points });

export const setPlayerReady = () => ({
  type: PLAYER_IS_READY,
});

export const setPlayerNotReady = () => ({
  type: PLAYER_IS_NOT_READY,
});
