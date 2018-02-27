import { Base } from './base';

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