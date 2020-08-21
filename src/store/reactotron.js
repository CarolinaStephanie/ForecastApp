import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const { scriptURL } = NativeModules.SourceCode;
const host = scriptURL.split('://')[1].split(':')[0];

Reactotron.configure({
  name: 'Forecast App',
  host,
})
  .useReactNative()
  .use(reactotronRedux())
  .connect()
  .setAsyncStorageHandler(AsyncStorage)
  .clear();

// eslint-disable-next-line no-console
console.tron = Reactotron;
