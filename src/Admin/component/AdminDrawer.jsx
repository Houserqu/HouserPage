import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import ContentDrafts from 'material-ui/svg-icons/editor/border-color';
import InsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Code from 'material-ui/svg-icons/action/code';
import { hashHistory } from 'react-router';

export default class AdminDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  changeTab(href){
    hashHistory.push(href);
  } 

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
        />
        <Drawer width={200} open={true} >
          <AppBar title="Console" />
          <List>
            <ListItem primaryText="概览" leftIcon={<InsertChart />} onClick={href=>this.changeTab('/admin')}/>
            <ListItem primaryText="收藏" leftIcon={<ActionGrade />} onClick={href=>this.changeTab('/admin/collection')}/>
            <ListItem primaryText="博客" leftIcon={<ContentDrafts />} onClick={href=>this.changeTab('/admin/blog')}/>
            <ListItem primaryText="项目" leftIcon={<Code />} onClick={href=>this.changeTab('/admin/project')} />
            <ListItem
              primaryText="工具"
              leftIcon={<ContentInbox />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="ToDo"
                  leftIcon={<CheckBox />}
                  disabled={true}
                />,
              ]}
            />
            
          </List>
        </Drawer>
      </div>
    );
  }
}