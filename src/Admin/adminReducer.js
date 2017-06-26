import { combineReducers } from 'redux'

// Reducer
function global(state = {
  user:{username : 'Houser', headimg :'/static/image/houser.jpg'}, 
  notifications : 9,
  snackbar:{open : false, message :''},
  loading:{status :'hide'},

}, action) {
  switch( action.type){
    case 'SET_NOTIFICATION_NUM':
      return Object.assign({}, state, {
        notifications: action.sum
      });

    default: return state;
  }
  return state;
}

function collection(state={
  categorys:[
    {
      name:'编程',
      id:1
    },{
      name:'设计',
      id:2
    },{
      name:'工具',
      id:3
    }
  ],
  collections:[
    {
      id:1,
      name:'Google',
      category:'工具',
      href:'https://google.com'
    },
    {
      id:2,
      name:'百度',
      category:'工具',
      href:'https://baidu.com'
    },
    {
      id:3,
      name:'Google',
      category:'工具',
      href:'https://google.com'
    },
  ]
},action){
  switch( action.type ){
    case 'DEL_COLLECTION':
      return Object.assign({}, state, {
        collections: action.collections
      });
    default : return state;
  }
}

const Admin = combineReducers({
  global,
  collection
})

export default Admin;