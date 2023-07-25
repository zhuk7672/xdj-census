//创建一个为about组件服务的reducer，reducer本质是一个函数
const initState = 0; //初始化状态
export default function countReducer(preState=initState,action){
  const {type,data} = action
  switch (type) {
    case 'increment': //+
      return preState + data
    case 'decrement': //-
      return preState - data
    default:
      return 0
  }
}