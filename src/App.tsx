/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react';
import {
  StatusBar,
} from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './redux/features/store';

const App = () => (
  <ThemeProvider theme={theme}>
    <StatusBar
      barStyle={'light-content'}
      backgroundColor={'transparent'}
      translucent={true}
      animated={true}
    />
    <Provider store={store}>
      <Routes />
    </Provider>
  </ThemeProvider>
)

export default App;
