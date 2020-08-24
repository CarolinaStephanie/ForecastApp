import type from './CityTypes';

export const getCityForecast = () => ({
  type: type.GET_CITY_FORECAST,
});
export const getCityForecastSuccess = (data) => ({
  type: type.GET_CITY_FORECAST_SUCCESS,
  payload: { data },
});
export const getCityForecastFailure = (error) => ({
  type: type.GET_CITY_FORECAST_FAILURE,
  payload: { error },
});
