import React from 'react';

import FlatButton from 'material-ui/FlatButton';

export default class CollectionCategory extends React.Component{
	constructor(props){
		super(props);
	};

	render(){
		let links = this.props.category.links.map((item)=>{
				return(
					<FlatButton key={item.id} label={item.name} />
				)
			});

		return(
			<div>
				<FlatButton label={this.props.category.title} primary={true} fullWidth={true}/>
				<br />
				{links}
		    </div>
		)
	}

}