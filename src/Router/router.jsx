import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import About from '../pages/About/About'
import YesterdayData from '../pages/YesterdayData/YesterdayData'
import AdminorderSale from '../pages/AdminorderSale/AdminorderSale'
import ShareList from '../pages/ShareList/ShareList'
import List from '../pages/List/List'
import Demo from '../pages/Demo/Demo'

const routers = [
    // {
    //     path: '*',
    //     component: Home
    // },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/yesterday_data',
        component: YesterdayData
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/Adminorder_sale',
        component: AdminorderSale
    },
    {
        path: '/share_list',
        component: ShareList
    },
    {
        path: '/demo',
        component: Demo
    },

]

export default routers