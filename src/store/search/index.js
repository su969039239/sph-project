import {reqGetSearchList} from '@/api'
const state = {
    searchList : {}
}

const mutations = {
    SEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}

const actions = {
    //搜索商品
    async getSearchList({commit},params={}){
        console.log('1111111111111')
        let result = await reqGetSearchList(params)
        if(result.code == 200){
            commit("SEARCHLIST",result.data)
            console.log('>>',result)
        }
    }
}
// 计算属性
//项目当中getters主要作用是：简化仓库中的数据
const getters = {
    goodsList(state){
       return state.searchList.goodsList
    },
    attrsList(state){
        return state.searchList.attrsList
    },
    trademarkList(state){
        return state.searchList.trademarkList
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}