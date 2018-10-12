import store from '../store';
import { incrementIndex, decrementIndex } from 'actions/app';

export interface ISwiper {
  scrollBy: (amount: number, animated?: boolean) => void;
}

let swiper: ISwiper | null = null;


export const setSwiper = (instance): void => {
  swiper = instance;
};

export const moveNext = () => {
  if (swiper) {
    swiper.scrollBy(1);
    store.dispatch(incrementIndex());
  }
};

export const movePrev = () => {
  if (swiper) {
    swiper.scrollBy(-1);
    store.dispatch(decrementIndex());

  }
};

export default swiper;