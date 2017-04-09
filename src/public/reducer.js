import { combineReducers } from 'redux';

import Home from '../Home/homeReducer';
import Admin from '../Admin/adminReducer';

let modulename = location.pathname;
// Reducer
function global(state = {
  draweropen :false, 
  snackbar:{open : false, message :''},
  loading:{status :'hide'},
  modulename:modulename
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

const rootReducer = combineReducers({
  Home,
  Admin,
  global
})

export default rootReducer;