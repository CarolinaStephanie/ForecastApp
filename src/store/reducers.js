import { combineReducers } from 'redux';
import city from './City/CityReducers';
import homeList from './HomeList/HomeReducers';
export default combineReducers({ city, homeList });
