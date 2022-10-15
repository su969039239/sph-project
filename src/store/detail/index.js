import { reqGetGoodsDetail,reqAddOrUpadteGoods } from "@/api"
import { SET_USERID } from '@/utils/USER_ID'
const state = {
    USER_ID: SET_USERID(),
    goodsDetail:{},

}
const mutations = {
    GETGOODSDETAIL(state,goodsDetail){
        state.goodsDetail = goodsDetail
    }
}
const actions = {
    async reqGetGoodsDetail({commit},skuId){
        let result = await reqGetGoodsDetail(skuId)
        if(result.code == 200){
            commit('GETGOODSDETAIL',result.data)
        }
    },
    async addOrUpadteGoods({commit},{skuId,skuNum}){
        let result = await reqAddOrUpadteGoods(skuId,skuNum)
        if(result.code == 200) {
            //如果加入购物车成功,返回promise即为成功
            return "success"
        }else {
            //如果加入购物车失败，返回失败的Promise
            return Promise.reject(new Error('fail'));
        }
    }
}
//简化数据，组件获取数据更加方便
const getters = {
    //面包屑
    categoryView(state) {
        return state.goodsDetail.categoryView || {}
    },
    //商品信息的数据
    skuInfo() {
        return state.goodsDetail.skuInfo || {}
    },
    //商品销售属性列表数据
    spuSaleAttrList() {
        return state.goodsDetail.spuSaleAttrList || {}
    }


}

export default {
    state,
    mutations,
    actions,
    getters
}