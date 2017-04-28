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
import TapCollection from './Home/container/TapCollection';
import TapTools from './Home/container/TapTools';
import TapProject from './Home/container/TapProject';

import ToolsBar from './Tool/ToolsBar';
import Attractions from './Tool/Attractions/Attractions';

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
			<Route path="/" component={Home}>
				<Route path="collection" component={TapCollection} />
				<Route path="tools" component={TapTools} />
				<Route path="project" component={TapProject} />
			</Route>
			<Route path='tools' component={ToolsBar}>
				<Route path="attractions" component={Attractions} />
			</Route>
			<Route path="/admin" component={Admin} />
		  </Router>
		 </MuiThemeProvider>
 	</Provider>,
  document.getElementById('app')
);