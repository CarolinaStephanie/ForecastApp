import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducers';
import './reactotron';

const persistedReducer = persistReducer(
  {
    key: 'historyList',
    storage: AsyncStorage,
    whitelist: ['historyList'],
  },
  reducers,
);

const store = createStore(persistedReducer, compose(applyMiddleware(thunk), console.tron.createEnhancer()));

const persistor = persistStore(store);

export default store;
export { persistor };
