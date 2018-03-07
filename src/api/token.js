import { Base } from './base';
import { weChatConfig } from './config'

class Token extends Base {
    constructor(){
        super();
    }

    getCode(){
        var param = {
            url: '/api/token/getCode',
            data:{
                appid:weChatConfig.appID
            }
        };
        return this.request(param);
    }
}

export {Token}