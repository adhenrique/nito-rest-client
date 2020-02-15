import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import GlobalStyle from './theme/globalStyle';
import configureStore from './configureStore';
import theme from './theme';

const MOUNT_NODE = document.getElementById('app');
const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  MOUNT_NODE,
);
