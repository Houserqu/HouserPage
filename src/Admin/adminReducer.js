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

const Admin = combineReducers({
  global
})

export default Admin;