import { combineReducers } from 'redux';
import { connect } from 'react-redux'
// Reducer
function homeglobal(state = {
  name:'123'
}, action) {
  switch( action.type){
    case 'TOGGLE_DEAWER':
      return Object.assign({}, state, {
        draweropen: !state.draweropen
      });

    default: return state;
  }
  return state;
}

function collection(state={
  introduction:'collection.....................',
  categorys:[
      {
        id:'1',
        title:'设计',
        links:[
          {id:'1',name:'UI中国',link:'www.uichian.com'},
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
    ],
},action){
  return state;
}

function project(state={
  introduction:'project.....................',
  projects:[
      {
        id:'1',
        username:'Houser',
        headimg:'/static/image/houser.jpg',
        title:'个人主页',
        time:'1017-12-2',
        githuburl:'https://houserqu.git.com',
        conetnt:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.',
        tags:[{id:1,name:'react'},{id:2,name:'js'}]
      },{
        id:'2',
        username:'Houser',
        headimg:'/static/image/houser.jpg',
        title:'个人主页',
        time:'1017-12-2',
        githuburl:'https://houserqu.git.com',
        conetnt:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.',
        tags:[{name:'react'},{name:'js'}]
      }
    ],
},action){
  return state;
}

function tools(state={
  introduction:'collection.....................',
  tools:[
      {
        id:'1',
        title:'二维码',
        digest:'在线二维码生成器',
        image:'/static/image/houser.jpg',
        clicks:'89',
        url:'/tools/QRcode',
      },{
        id:'2',
        title:'二维码',
        digest:'在线二维码生成器',
        image:'/static/image/houser.jpg',
        clicks:'89',
        url:'/tools/QRcode',
      },{
        id:'3',
        title:'二维码',
        digest:'在线二维码生成器',
        image:'/static/image/houser.jpg',
        clicks:'89',
        url:'/tools/QRcode',
      },{
        id:'4',
        title:'二维码',
        digest:'在线二维码生成器',
        image:'/static/image/houser.jpg',
        clicks:'89',
        url:'/tools/QRcode',
      }
    ],
},action){
  return state;
}

const home = combineReducers({
  collection,
  homeglobal,
  tools,
  project
})

export default home;