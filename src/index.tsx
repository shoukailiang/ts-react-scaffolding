import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { EnthusiasmAction } from './actions/index';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import './index.css';

const middleware = applyMiddleware(thunk as any);
const reducers = combineReducers({
  num: enthusiasm,
});
const store = createStore<StoreState, EnthusiasmAction, any, any>(reducers as any, compose(
  middleware as any,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
));

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
