import React from 'react';
import { Provider, connect } from 'react-redux'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

import AttractionsList from './AttractionsList';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class Attractions extends React.Component {
  constructor(props){
    super(props);
  }

  handleBlur = (event) => {
    console.log(event.target.value);
  }

  render() {

  	let style = {
  		toobar:{
  			margin:'100px 200px'
  		}
  	}

    return (
      <div>
        <Snackbar
          open={this.props.snackbar.open}
          message={this.props.snackbar.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />

        <Toolbar style={style.toobar}>
        	<TextField
        	  fullWidth={true}
		        hintText="输入地名/景点名"
            onBlur={this.handleBlur}
		    />
        </Toolbar>
        <AttractionsList list={this.props.attractions.contentlist} />
      </div>
    );
  }
}
