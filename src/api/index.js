import requests from './request'
import mockRequests from './mockRequest'

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

//获取banner(Home)首页轮播图接口
export const reqGetBannerList = () => mockRequests.get('/banner')

//获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floors')

//获取
export const reqGetSearchList = (params) => requests({ url: '/list', method: 'post', data:params})

//获取商品详细数据
export const reqGetGoodsDetail = (skuId) => requests({ url: `/item/${skuId}`, method: 'get'})

//添加到购物车
export const reqAddOrUpadteGoods = (skuId,skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`,method: 'post'})

//获取购物车列表
export const reqGetCartList = () => requests({url: '/cart/cartList',method: 'get'})

//切换商品的选中状态
export const reqChangeChecked = (skuId,isChecked) => requests({url: `/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

//删除购物车商品
export const reqDeleteCart = (skuId) => requests({url: `/cart/deleteCart/${skuId}`,method:'delete'})