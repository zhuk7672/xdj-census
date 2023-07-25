//专为 about组件生成action对象

export const createCountSumFun = (data) => ({type:'increment',data})
export const createCountDecrementFun = (data) => ({type:'decrement',data})

//异步Action 异步action中一般都会调用同步action
export const createCountAsynSumFun = (data,time) => {
  return (dispatch) => {  //函数中才能开启异步任务
    setTimeout(() => {
      dispatch(createCountSumFun(data))
    }, time);
  }
} 