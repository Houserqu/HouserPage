import 'whatwg-fetch';
import store from './store';

const HOST = 'http://api.houserqu.com/api';

let myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain'
});

//获取博客列表
export function getBlogs(getDate){
    fetch('http://api.houserqu.com/api/blogs',{
        method:'GET',
        headers: myHeaders
    }).then(response=>{
        return response.json();
    }).then(data=>{
        getDate(data);
    });
}

