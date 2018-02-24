import axios from 'axios'
import {commonParams} from './config'
import { Base } from './base';

/*
export function getBanner() {
    const url = '/api/banner/1'

    const data = Object.assign({}, commonParams, {
    })

    return axios.get(url, {
        params: data,
    }).then((res) => {
        return Promise.resolve(res.data)
    })
}*/

class Banner extends Base {
    constructor(){
        super();
    }

    getBanner(type){
        var param = {
            url: '/api/banner/' + type,
            type:'get'
        };
        return this.request(param);
    }
}

export {Banner}