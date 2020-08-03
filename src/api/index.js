import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: 'http://localhost:9500/login/find',
        method: 'get',
        params: query
    });
};

export const addData = addData => {
    return request({
        url: 'http://localhost:9500/login/add',
        method: 'post',
        params: addData
    });
};