import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"
const state = {
    //home仓库中存储三级菜单的数据
    categoryList: [],
    //轮播图的数据
    bannerList: [],
    //floor数据
    floorList: []
}

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}

const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        } else {

        }
    },
    //轮播图action
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("BANNERLIST", result.data)
        }
    },
    //floor数据
    async getFloorList({ commit }) {
        console.log('22222222')
        let result = await reqGetFloorList();

        console.log(result)
        if (result.code == 200) {
            commit("FLOORLIST", result.data)
        }
    }
}

const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}