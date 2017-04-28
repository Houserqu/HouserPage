import 'whatwg-fetch';
import {openSnackbar} from '../../public/action/globalAction';
export function setAttractions(attractions){
	return {
		type:'SET_ATTRACTIONS',
		attractions:attractions
	}
}


export function getAttractions(keyword){
	return function(dispatch){
		let url = 'http://ali-spot.showapi.com/spotList?keyword='+keyword;
		
		fetch(url, {
		  method: "GET",
		  headers: {
		    "Authorization": "APPCODE 557d3e7aaf744971bca3ed75c7c0421f"
		  },
		})
		.then(response => {
			console.log(response.status);
			if(response.status !== 200){
				return
			}
			return response.json();
		})
		.then(data => {
			console.log(data)
			if(!data.showapi_res_code){
				return dispatch(setAttractions(data.showapi_res_body.pagebean));
			}else{
				return dispatch(openSnackbar('aaaaaa')); 
			}
		})
		.catch(e => console.log(e));
	}
}