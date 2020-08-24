import types from './CityTypes';

const defaultState = {
  data: {
    main: {},
    coord: {},
  },
  isLoading: false,
  error: {
    data: {},
  },
};

const reducers = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.GET_CITY_FORECAST:
      return {
        ...defaultState,
        isLoading: true,
      };
    case types.GET_CITY_FORECAST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };
    case types.GET_CITY_FORECAST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default reducers;
