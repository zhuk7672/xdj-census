import {fetchPost} from './Axios/http.js'

// goods
export const getGoodsByDistrict = params => fetchPost('/api/fxfront/interface/getGoodsByDistrict?appid=APPID', params) //商品列表

// login
export const loginApi = params => fetchPost('/api/Shop/OrderAdmin/loginApi', params) //登陆

// home
export const getOrderStatYearData = params => fetchPost('/api/fxfront/statistics/getOrderStatYearData?appid=APPID', params) //季度 订单/gmv
export const getTopOrder = params => fetchPost('/api/fxfront/statistics/getTopOrder?appid=APPID', params) //今日 订单/gmv/售后
export const findSearchCount = params => fetchPost('/api/fxfront/operation/findSearchCount?appid=APPID', params) //今日用户搜索排名
export const getGoodsSaleTopByDate = params => fetchPost('/api/fxfront/statistics/getGoodsSaleTopByDate?appid=APPID', params) //今日商品销售排名
export const getOrderStatWeekData = params => fetchPost('/api/fxfront/statistics/getOrderStatWeekData?appid=APPID', params) //近七日销售
export const getOrderStatMonthData = params => fetchPost('/api/fxfront/statistics/getOrderStatMonthData?appid=APPID', params) //近30日销售

export const getYesterdayData = params => fetchPost('/api/fxfront/statistics/getYesterdayData?appid=APPID', params) //昨日数据

export const getTopGoods = params => fetchPost('/api/fxfront/statistics/getTopGoods?appid=APPID', params) //销售排行

export const getTopShare = params => fetchPost('/api/fxfront/statistics/getTopShare?appid=APPID', params) //分享排行
