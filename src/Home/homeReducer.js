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
        title:'设计',
        links:[
          {name:'UI中国',link:'www.uichian.com'},
          {name:'google',link:'www.uichian.com'},
          {name:'baidu',link:'www.uichian.com'}
        ]
      },{
        title:'编程',
        links:[
          {name:'UI中国',link:'www.uichian.com'},
          {name:'google',link:'www.uichian.com'},
          {name:'baidu',link:'www.uichian.com'}
        ]
      }
    ],
},action){
  return state;
}

const home = combineReducers({
  collection,
  homeglobal,
})

export default home;