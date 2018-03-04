import { CONNECTED, DISCONNECTED } from '../constants/socket';

const initialState = {
  connected: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECTED:
      return {
        ...state,
        connected: true,
      };
    case DISCONNECTED:
      return {
        ...state,
        connected: false,
      };
    default:
      return state;
  }
};
