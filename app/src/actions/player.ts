import { PLAYER_MODEL_CHANGED, PLAYER_NAME_CHANGED, PLAYER_MODEL_INDEX_CHANGED, PLAYER_PAD_CHANGED } from 'actions/types';
import { moveNext } from 'utils/swiper';
import { players } from 'reducers/player';

export const changePlayerName = (name: string) => ({
  type: PLAYER_NAME_CHANGED,
  name,
});

export const changePlayerModel = (model: string) => (dispatch) => {
  dispatch({ type: PLAYER_MODEL_CHANGED, model });
  moveNext();
};

export const changeModelIndex = (index: number) => ({
  type: PLAYER_MODEL_INDEX_CHANGED,
  index,
  model: players[index],
});

export const changePlayerPad = (pad: string) => (dispatch) => {
  dispatch({
    type: PLAYER_PAD_CHANGED,
    pad,
  });
  moveNext()
};