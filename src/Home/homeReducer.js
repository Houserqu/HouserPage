import { combineReducers } from 'redux'

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

const home = combineReducers({
  homeglobal,
})

export default home;