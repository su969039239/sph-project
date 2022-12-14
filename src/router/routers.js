
//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

export default [
    {
      path: "/home",
      component: Home,
      meta: { show: true }
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false }
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false }
    },
    {
      path: "/search/:keyword",
      component: Search,
      meta: { show: true },
      name: "search"
    },
    //重定向
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: "/detail/:skuId",
      component: Detail,
      meta: { show: true},
      name: "detail"
    },
    {
      path: "/addcartsuccess",
      component: AddCartSuccess,
      meta: { show: true},
      name: "addcartsuccess"
    },
    {
      path: "/shopcart",
      component: ShopCart,
      meta: { show: true},
      name: "shopcart"
    }
  ]