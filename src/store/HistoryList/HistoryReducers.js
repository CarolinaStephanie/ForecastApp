import types from './HistoryTypes';

const defaultState = {
  data: [],
};

const reducers = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_HISTORY:
      return {
        ...state,
        data: payload.data,
      };
    default:
      return state;
  }
};

export default reducers;
