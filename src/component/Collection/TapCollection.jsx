import React from 'react';
import { connect } from 'react-redux'

import TapHead from '../Public/TapHead';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import CollectionCategory from '../Collection/CollectionCategory'

class TapCollection extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const style={
			main:{
				width:'1200px',
				margin:'50px auto',

			},
			item:{
				height: 50,
				width: 180,
				margin: 10,
				textAlign: 'center',
				display: 'inline-block'
			}
		}

		let categorys = this.props.categorys.map((item)=>{
			return <CollectionCategory key={item.id} category={item}/>
		})

		return(
			<div style={style.root}>
				<TapHead introduction={this.props.introduction} />
				<div style={style.main}>
					{categorys}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		categorys: state.Home.collection.categorys,
		introduction: state.Home.collection.introduction
	}
}

export default connect(mapStateToProps)(TapCollection);