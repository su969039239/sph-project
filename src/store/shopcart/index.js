import { reqGetCartList,reqChangeChecked,reqDeleteCart } from '@/api';
const state = {
    shopCartInfo: []
}
const mutations = {
    GETCARTLIST(state,playload) {
        state.shopCartInfo = playload
    }
}
const actions = {
    async getCartList({commit}){
        let result = await reqGetCartList()
        console.log(result.data)
        if(result.code == 200){
            commit('GETCARTLIST',result.data)
        }
    },
    async changeChecked({commit},{skuId,isChecked}){
        let result = await reqChangeChecked(skuId,isChecked)
        if(result.code == 200 ){
            console.log('修改状态成功')
            return 'success'
        }else{
            return Promise.reject();
        }
    },
    updateAllChecked({commit,dispatch},isChecked){
        let arr = []
        state.shopCartInfo[0].cartInfoList.forEach(item => {
            let ps = dispatch("changeChecked",{skuId: item.skuId,isChecked:isChecked})
            arr.push(ps)
        })
        return Promise.all(arr)
    },
    async deleteCart({commit},skuId){
        let result = await reqDeleteCart(skuId)
        if(result.code == 200){
            console.log('删除成功')
            return 'success'
        }else{
            return Promise.reject()
        }
    },
    async deleteAllChecked({dispatch,getters,commit}){
        let promiseAll = []
        getters.CartInfo.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCart',item.skuId):''
            promiseAll.push(promise)
        })

        return Promise.all(promiseAll)
    }
}
const getters = {
    //计算数组里面第一个元素：对象
    CartInfo(state) {
        return state.shopCartInfo[0] || {}
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}