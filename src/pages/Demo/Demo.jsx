import React from 'react'

export default function Demo() {
  const [count,countFun] = React.useState(5)
  const [user, setUser] = React.useState({ name: '', age: 0 });
  const ref_ = React.useRef(999)
  function countFun2(){
    countFun(count => count+1)
  }
 
  React.useEffect(() => { //用于模拟类组件中的生命周期钩子
    //useEffect第一个参数需要是函数，否则报错
    console.log('@');
    console.log(user);
    return () => {} // 在return中相当于生命周期 componentWillUnmount
  }, [count, user])//如果在useEffect第二个参数传递想要监听的参数值那么每当这些值改变时则调用，相当于componentUpdata
  // React.useEffect({},[])//如果在useEffect第二个参数传一个空数组那么相当于生命周期componentDidMount
  return (
    <div>
      <h1>Demo</h1>
      <p>{count}</p>
      <button onClick={countFun2}>+1</button>
      <br />
      <input
        type="text"
        placeholder="请输入名字"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="尝试useRef"
        ref={ref_}
        onChange={() => (console.log(ref_.current.value))}

      />

    </div>
    
  )
}
