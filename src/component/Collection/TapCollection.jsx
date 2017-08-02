import React from 'react';
import { connect } from 'react-redux'

import TapHead from '../Public/TapHead';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import CollectionCategory from './CollectionCategory'

export default class TapCollection extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const style={
			main:{
				width:'90%',
				maxWidth:'1200px',
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

		const categorysdata = [
      {
        id:'1',
        title:'设计',
        links:[
          {id:'1',name:'UI中国',link:'https://www.baidu.com/'},
          {id:'2',name:'google',link:'www.uichian.com'},
          {id:'3',name:'baidu',link:'www.uichian.com'}
        ]
      },{
        id:'2',
        title:'编程',
        links:[
          {id:'1',name:'UI中国',link:'www.uichian.com'},
          {id:'2',name:'google',link:'www.uichian.com'},
          {id:'3',name:'baidu',link:'www.uichian.com'}
        ]
      }
    ]

		let categorys = categorysdata.map((item)=>{
			return <CollectionCategory key={item.id} category={item}/>
		})

		return(
			<div style={style.root}>
				<div style={style.main}>
					{categorys}
				</div>
			</div>
		)
	}
}
