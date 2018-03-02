import { Base } from './base';

class Theme extends Base {
    constructor(){
        super();
    }

    getThemes(page,paginate){
        var param = {
            url: '/api/theme/getthemes',
            data:{
                page:page,
                per_page:paginate
            }
        };
        return this.request(param);
    }
}

export {Theme}