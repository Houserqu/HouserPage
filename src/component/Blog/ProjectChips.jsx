import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


export default class ProjectChips extends React.Component {

  render() {
    let chips = this.props.tags.map((item) =>{
      return(
        <Chip key={item.id}
          style={styles.chip}
          >
          {item.name}
        </Chip>
        )
    });

    return (
      <div style={styles.wrapper}>
        {chips}
      </div>
    );
  }
}