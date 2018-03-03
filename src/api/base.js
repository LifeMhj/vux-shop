import axios from 'axios'
import {serviceUrl} from './config'

class Base {
    constructor() {
        "use strict";
    }

    //http 请求类, 当noRefech为true时，不做未授权重试机制
    request(params, noRefetch) {
        var that = this,
            url = serviceUrl.BASE_API + params.url,

            header = {
                'content-type': 'application/json',
                'token': '123',
            },

            data = {
                params: params.data,
                headers: header
            },

            result = []

        switch (params.type) {
            case 'get':
                result = axios.get(url, data).then((res) => {
                    return Promise.resolve(res.data)
                })
                break;

            default:
                result = axios.get(url, data).then((res) => {
                    return Promise.resolve(res.data)
                })
                break;
        }

        return result
    }
};

export {Base};
