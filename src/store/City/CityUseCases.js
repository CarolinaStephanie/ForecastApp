import axios from 'axios';
import * as actions from './CityActions';

export const getCityForecast = (city) => async (dispatch) => {
  try {
    const isnum = /^\d+$/.test(city);
    let params = {
      appid: 'bf62f9c4d7a098e49a30ffd12492bf2f',
    };
    isnum ? (params.zip = city) : (params.q = city);
    dispatch(actions.getCityForecast());
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params,
    });
    dispatch(actions.getCityForecastSuccess(data));
  } catch (error) {
    dispatch(actions.getCityForecastFailure(error.response));
    throw error;
  }
};
