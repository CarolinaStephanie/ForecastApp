import axios from 'axios';
import * as actions from './CityActions';

export const getCityForecast = (cityName) => async (dispatch) => {
  try {
    dispatch(actions.getCityForecast());
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: { q: cityName, appid: 'bf62f9c4d7a098e49a30ffd12492bf2f' },
    });
    dispatch(actions.getCityForecastSuccess(data));
  } catch (error) {
    dispatch(actions.getCityForecastFailure(error.response));
    throw error;
  }
};
