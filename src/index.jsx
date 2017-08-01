import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';

import Home from './home';
import TapCollection from './component/Collection/TapCollection';
import TapTools from './component/Tool/TapTools';
import TapBlog from './component/Blog/TapBlog';

import ToolsBar from './component/Tool/ToolsBar';
import Attractions from './component/Tool/Attractions/Attractions';

injectTapEventPlugin();

console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
		  <Router history={hashHistory}>
			<Route path="/" component={Home}>
				<IndexRoute component={TapBlog} />
				<Route path="collection" component={TapCollection} />
				<Route path="tools" component={TapTools} />
			</Route>
			<Route path='tools' component={ToolsBar}>
				<Route path="attractions" component={Attractions} />
			</Route>

		  </Router>
		 </MuiThemeProvider>
 	</Provider>,
  document.getElementById('app')
);