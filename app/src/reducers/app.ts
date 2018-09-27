enum AppType {
  SINGLE = 'single',
  MULTIPLAYER = 'multiplayer',
}

export interface IAppStore {
  type: AppType;
}

const initialState = {
  type: AppType.SINGLE,
};

export default (store = initialState, action: any = {}) => {
  return store;
};