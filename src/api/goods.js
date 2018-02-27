import { Base } from './base';

class Goods extends Base {
    constructor(){
        super();
    }

    getNewGoods(page,paginate){
        var param = {
            url: '/api/goods/getnewgoods',
            page:page,
            paginate:paginate
        };
        return this.request(param);
    }
}

export {Goods}