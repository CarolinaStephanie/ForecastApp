import { combineReducers } from 'redux';
import city from './City/CityReducers';
import historyList from './HistoryList/HistoryReducers';
export default combineReducers({ city, historyList });
