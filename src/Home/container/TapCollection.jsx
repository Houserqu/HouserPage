import React from 'react';

import TapHead from '../component/TapHead';

class TapCollection extends React.Component{
	constructor(props){
		super(props);

		this.introduction = 'collection..........';
		this.state={
			introduction:'collection....'
		}
	}
	render(){
		const style={

		}
		return(
			<div>
				<TapHead introduction={this.introduction} />
			</div>
		)
	}
}

export default TapCollection;