import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Alert from './container/Alert';


export default class App extends React.Component{
	render(){
		return(
			<div>
				<Alert />
				{this.props.children}
			</div>
		)
	}
}