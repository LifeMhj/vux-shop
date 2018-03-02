import { Base } from './base';

class Goods extends Base {
    constructor(){
        super();
    }

    getNewGoods(page,paginate){
        var param = {
            url: '/api/goods/getnewgoods',
            data:{
                page:page,
                per_page:paginate
            }
        };
        return this.request(param);
    }
}

export {Goods}