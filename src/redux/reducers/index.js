// 汇总所有的reducer
import {combineReducers} from 'redux'
import countReducer from './count_reducer' //引入为Count组件服务的reducer

export default combineReducers({
  countSum: countReducer //state.countSum映射状态名

})