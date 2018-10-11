import { PLAYER_NAME_CHANGED } from 'actions/types';

export const changePlayerName = (name: string) => ({
  type: PLAYER_NAME_CHANGED,
  name,
});