import { TICK_MS } from 'constants/game';
import store from '../store';
import { onTick } from 'actions/game';

let interval;


const tick = () => {
  store.dispatch(onTick());
};

export const startGame = () => {
  interval = setInterval(tick, TICK_MS);
};

export const stopGame = () => {
  clearInterval(interval);
};