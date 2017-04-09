import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import thunkMiddleware from 'redux-thunk'

import Home from './Home/home';
import Admin from './Admin/admin';

import AppRedux from './public/reducer'

injectTapEventPlugin();

let store = createStore(
	AppRedux,
	applyMiddleware(
		thunkMiddleware
	)
);

console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
		  <Router history={hashHistory}>
			<Route path="/" component={Home} />
			<Route path="/admin" component={Admin} />
		  </Router>
		 </MuiThemeProvider>
 	</Provider>,
  document.getElementById('app')
);