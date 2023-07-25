import {createStore,applyMiddleware} from 'redux' //引入sreateStore 专门用于常见redux中最核心的store对象
import reducers from './reducers' //汇总所有人reducer
import thunk from 'redux-thunk'


//暴露store
export default createStore(reducers,applyMiddleware(thunk))
