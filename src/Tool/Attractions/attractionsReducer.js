import { combineReducers } from 'redux';

function attractions(state={
	"pagebean": {
      "allNum": 32,
      "allPages": 2,
      "contentlist": [
        {
          "address": "颜山公园路4号原山国家",
          "areaId": "3940",
          "areaName": "临淄区",
          "cityId": "299",
          "cityName": "淄博",
          "id": "7472",
          "location": {
            "lat": "36.49018821",
            "lon": "117.84976357"
          },
          "name": "原山泰山行宫",
          "picList": [
            {
              "picUrl": "http://pic3.40017.cn/scenery/destination/2015/04/16/09/33K4AW.jpg",
              "picUrlSmall": "http://pic3.40017.cn/scenery/destination/2015/04/16/09/33K4AW_130x130_00.jpg"
            },
            {
              "picUrl": "http://pic3.40017.cn/scenery/destination/2015/04/16/09/slKVTv.jpg",
              "picUrlSmall": "http://pic3.40017.cn/scenery/destination/2015/04/16/09/slKVTv_130x130_00.jpg"
            }
          ],
          "priceList": [],
          "proId": "22",
          "proName": "山东",
          "summary": "原山泰山行宫位于博山城区西南的凤凰山巅，为市级重点文物保护单位。行宫始建于1602年（明万历三十年），历经几度劫难，清代、民国曾多次重修。现存建筑和布局均系明、清风格。现为颜山公园名胜之一。"
        }
      ],
      "currentPage": 1,
      "maxResult": 20
    },
},action){
	switch(action.type){
		case 'SET_ATTRACTIONS':{
			return Object.assign({}, state, {
		        pagebean: action.attractions
		      });
		}
		default : return state;
	}

	return state;
}

export default attractions;