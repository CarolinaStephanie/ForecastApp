import types from './HomeTypes';

const defaultState = {
  historyList: [],
  favoriteList: [],
};

const reducers = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_HISTORY:
      return {
        ...state,
        historyList: payload.data,
      };
    case types.UPDATE_FAVORITE:
      return {
        ...state,
        favoriteList: payload.data,
      };
    default:
      return state;
  }
};

export default reducers;
