export const CLEAN_NOTIFICATIONS = 'CLEAN_NOTIFICATIONS';

export function setNotificationsNum(sum){
	return {type: 'SET_NOTIFICATION_NUM', sum: sum}
}

export function delCollection(collections){
	return {type:'DEL_COLLECTION', collections: collections}
}