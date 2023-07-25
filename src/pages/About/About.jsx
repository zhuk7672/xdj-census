import React, { Component } from 'react';
import store from "../../redux/store";
import { connect } from "react-redux";
import { createCountSumFun,createCountDecrementFun ,createCountAsynSumFun} from "../../redux/actions/count";

class About extends Component {
  state = {
    count: 0,
    abc: 0,
    isHot: true
  }
  increment = () => {
    const {value} = this.selectNumber
    this.props.createCountSumFun(value * 1)
    this.setState( state => ({abc: state.abc+1}))
    // store.dispatch(createCountSumFun(value * 1))
  }
  
  decrement = () => {
    const {value} = this.selectNumber
    // const count = store.getState()
    this.props.createCountDecrementFun(value * 1)
    // store.dispatch(createCountDecrementFun(value * 1))

  }
  
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    const count = store.getState()
    if(count % 2 !== 0){
      this.props.createCountSumFun(value * 1)
      // store.dispatch(createCountSumFun(value * 1))

    }
  }
  
  incrementAsync = () => {
    const {value} = this.selectNumber
    this.props.createCountAsynSumFun(value * 1,1000)
    // store.dispatch(createCountAsynSumFun(value * 1,1000))
  }
  // showValue = (params) => {
  //   // const {showValue} = this
  //   // console.log(this);
  //   // alert(showValue.value)
  //   console.log(this.myRef);
  //   alert(this.myRef.current.value)


  // }
  // showValue2 = (params) => {
  //   // const { showValue2 } = this
  //   console.log(params.target.value);
  //   // console.log(this.myRef2);
    
  //   alert(this.myRef2.current.value)
  // }
  
  // changeWeather = (params) => {
  //   const { isHot } = this.state
  //   this.setState({
  //     isHot: !isHot
  //   })
  // }
  // saveVal = (params) => {
  //   this.showValue = params
  // }
  // saveVal2 = (params) => {
  //   this.showValue2 = params
  // }
  // myRef = React.createRef();
  // myRef2 = React.createRef()
  
  
  render() {
    // const { isHot } = this.state
    return (
      <div className="about">
        {/* <input type="text" ref={this.myRef}/>
        &nbsp;
        <button onClick={this.showValue}>点击提示左侧数据</button>
        <input onBlur={this.showValue2} type="text" placeholder="失去焦点提示数据" ref={this.myRef2}
        />
        <input onBlur={this.showValue2} type="text" placeholder="失去焦点提示数据" ref={(n) => {
          this.showValue2 = n
        }}
        />
        <br/>
        <br/>
        <p>今天天气真{isHot ? '炎热' : '寒冷'}</p>
        <button onClick={this.changeWeather}>点我改变天气</button> */}
          <h1>当前求和：{this.props.sum}</h1>
          <select name="" id="" ref={c => this.selectNumber = c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="div">
            <button onClick={this.increment}>+</button><br/>
            <button onClick={this.decrement}>-</button><br/>
            <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button><br/>
            <button onClick={this.incrementAsync}>异步加</button>
          </div>
      </div>
    )
  }
}
export default connect(
  state => ({sum:state.countSum}), //映射状态 
  // state => ({sum:state.countSum,abc:state.xxx}), //映射多个reducer状态  
  {
    // createCountSumFun:createCountSumFun,
    createCountSumFun,
    createCountDecrementFun,
    createCountAsynSumFun
  }  //映射操作状态的方法
)(About)