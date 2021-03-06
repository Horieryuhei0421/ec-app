// import React from "react";
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import * as History from "history";
// import createStore from './reducks/store/store';
// import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const history = History.createBrowserHistory();
// export const store = createStore(history);

// render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <App />
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root')
// );


// reportWebVitals();

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as History from 'history';
import createStore from './reducks/store/store';
// import * as serviceWorker from './serviceWorker';
// import { ErrorBoundary } from "./components/UIkit";
import './assets/reset.css'
import './assets/style.css'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './assets/theme'
import App from './App';

// connected-react-router - action経由でルーティングが可能、push,replace..
// historyを強化
const history = History.createBrowserHistory();
export const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

// serviceWorker.register();