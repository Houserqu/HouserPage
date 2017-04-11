import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TapCollection from '../container/TapCollection';
import Collection from 'material-ui/svg-icons/action/turned-in';
import Build from 'material-ui/svg-icons/action/build';
import Blog from 'material-ui/svg-icons/editor/insert-drive-file';
import Project from 'material-ui/svg-icons/action/picture-in-picture';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class NavTap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab icon={<Collection />} label="网站收藏" value={0} />
          <Tab icon={<Build />} label="工具" value={1} />
          <Tab icon={<Blog />} label="博客" value={2} />
          <Tab icon={<Project />} label="项目" value={3} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <TapCollection />
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    );
  }
}