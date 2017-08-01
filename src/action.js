export const TOGGLE_DEAWER = 'TOGGLE_DEAWER';
export const REFRESH_ARTICLE = 'REFRESH_ARTICLE';
/*
 * action 创建函数
 */

export function toggleDrawer(text) {
	return {type:'TOGGLE_DEAWER', text }
}

export function refreshArticle(articles) {
  return { 
  	type: 'REFRESH_ARTICLE', 
  	articles
  }
}

export function logout() {
  return { 
  	type: 'LOGOUT', 
  }
}

export function login(user) {
  return { 
  	type: 'LOGIN', 
  	user
  }
}

//snack提示框
export function alertSnackbar(message){
	return {
		type: 'ALERT_SNACKBAR',
		message
	}
}

//显示加载按钮
export function loading(status) {
	return {
		type: 'LOADING',
		status
	}
}


export function getArticles(articles){
	return function(dispatch){
		return 	ajaxGetArticles(redata => {
			redata.code == 0 ? dispatch(refreshArticle(redata.data)) : dispatch(alertSnackbar(redata.msg));
		});
	}
}
