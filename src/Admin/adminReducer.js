import { combineReducers } from 'redux'

// Reducer
function adminarticles(state = { articles: [{key:0, title:"1", time:'1',content:"1",username:"1"}]}, action) {
  switch(action.type){
    case 'REFRESH_ARTICLE':
      return Object.assign({},state,{
        articles: action.articles
      });

    default: return state;
  }
}

// Reducer
function adminglobal(state = {
  user:{username : '', headimg :''}, 
  draweropen :false, 
  snackbar:{open : false, message :''},
  loading:{status :'hide'},

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


export default adminarticles;