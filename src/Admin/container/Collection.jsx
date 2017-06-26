import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { connect } from 'react-redux';
import { delCollection } from '../adminAction';

class Collection extends React.Component {

  state = {
    addHrefDialog: false,
    addCategoryDialog: false,
  };

  handleHrefOpen = () => {
    this.setState({addHrefDialog: true});
  };

  handleHrefClose = () => {
    this.setState({addHrefDialog: false});
  };

  handleCategoryOpen = () => {
    this.setState({addCategoryDialog: true});
  };

  handleCategoryClose = () => {
    this.setState({addCategoryDialog: false});
  };

  //选择分类
  handleChange = (event, index, value) => this.setState({value});

  //删除collection
  handleDelCollection(index){
    console.log(index);
    let str = JSON.stringify(this.props.collections);

    let newcol = JSON.parse(str);
    newcol.splice(index,1);
    
    this.props.dispatch(delCollection(newcol));
  }
  
  render() {
    const style={
      button:{
        margin:12
      }
    }

    const hrefActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleHrefClose}
      />,
      <FlatButton
        label="Submit" 
        primary={true}
        onTouchTap={this.handleHrefClose}
      />,
    ];

    const CategoryActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleCategoryClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleCategoryClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="添加链接" onTouchTap={this.handleHrefOpen} style={style.button}/>
        <RaisedButton label="添加分类" onTouchTap={this.handleCategoryOpen} style={style.button}/>

        <Dialog
          title="添加链接"
          actions={hrefActions}
          modal={false}
          open={this.state.addHrefDialog}
          onRequestClose={this.handleHrefClose}
        >
          <SelectField
            floatingLabelText="分类"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {this.props.categorys.map( (row) => (
                <MenuItem key={row.id} value={row.id} primaryText={row.name} />
              ))}
          
          </SelectField>
          <br />
          <TextField
            floatingLabelText="名称"
          />
          <br />
          <TextField
            floatingLabelText="地址"
            fullWidth={true}
          />
        </Dialog>

        <Dialog
          title="添加分类"
          actions={CategoryActions}
          modal={false}
          open={this.state.addCategoryDialog}
          onRequestClose={this.handleCategoryClose}
        >
          <TextField
            floatingLabelText="分类名称"
            fullWidth={true}
          />
        </Dialog>

        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>名称</TableHeaderColumn>
              <TableHeaderColumn>分类</TableHeaderColumn>
              <TableHeaderColumn>地址</TableHeaderColumn>
              <TableHeaderColumn>操作</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>

            {this.props.collections.map( (row, index) => (
              <TableRow key={row.id}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.category}</TableRowColumn>
                <TableRowColumn>{row.href}</TableRowColumn>
                <TableRowColumn><FlatButton label="删除" secondary={true} onClick={id=>this.handleDelCollection(index)}/></TableRowColumn>
              </TableRow>
              ))}

          </TableBody>
        </Table>
      </div>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return { 
    collections: state.Admin.collection.collections,
    categorys:state.Admin.collection.categorys
  }
}

export default connect(mapStateToProps)(Collection);