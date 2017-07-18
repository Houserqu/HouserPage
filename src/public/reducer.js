import { combineReducers } from 'redux';

import Home from '../Home/homeReducer';

import Attractions from '../Tool/Attractions/attractionsReducer';

// Reducer
function global(state = {
  draweropen :false, 
  snackbar:{open : false, message :''},
  loading:{status :'hide'},
}, action) {
  switch(action.type){
    case 'TOGGLE_DEAWER':
      return Object.assign({}, state, {
        draweropen: !state.draweropen
      });
    case 'OPEN_SNACKBAR':
      return Object.assign({}. state, {
        snackbar:{
          message: action.message,
          open: false
        }
      });

    default: return state;
  }
  return state;
}

const rootReducer = combineReducers({
  Home,
  global,
  Attractions
})

export default rootReducer;