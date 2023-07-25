import React, { Component } from 'react'
import './Quarter.styl'

export default class Quarter extends Component {
  state = {
    flag: false,
  }
  ordersSum(list){
    // const { list } = this.props;
    let orders = 0;
    list&&list.forEach(item => {
      orders += item.totalOrders
    })
    return orders
  }
  gmvSum(list){
    // const { list } = this.props;
    let gmvSum = 0;
    list&&list.forEach(item => {
      gmvSum += item.totalMoney
    })
    return gmvSum.toFixed(2)
  }
  slideClick = () =>{
    const { flag } = this.state
    this.setState({
      flag: !flag
    })
  }
  render() {
    const { list, quarterName } = this.props
    const {flag} = this.state
    // console.log(list)
    return (
      <div className={`tableBox ${list && list.length > 0 ? '' : 'hide'}`}>
          <div className="text">
          <div className={`topRow flex-wrap flex-box ${flag ? '' : 'acti'}`} onClick={this.slideClick}>
            <div className="row w20">{quarterName}</div>
            <div className="row w50">{this.ordersSum(list)}</div>
            <div className="row w30">{this.gmvSum(list)}</div>
              <div className="icon"></div>
            </div>
            <ul className={flag ? '' : 'hide'}>
              {
                list&&list.map((item,i) => {
                  return <li className="flex-box flex-wrap" key={i}><span className="w20">{item.statisticsDay}</span><span className="w50">{item.totalOrders}</span><span className="w30">{item.totalMoney}</span></li>
                })
              }
            </ul>
          </div>
        </div>
    )
  }
}
