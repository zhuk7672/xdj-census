import React, { Component } from 'react'
import { getYesterdayData } from '../../api'
import './YesterdayData.styl'

export default class YesterdayData extends Component {
  state = {
    orderadmincount: window.localStorage.getItem('orderadmincount'),
    orderadminpass: window.localStorage.getItem('orderadminpass'),
    gmv: 0,
    totalOrders: 0,
    totalNumber: 0,
    shareRecordCount: 0,
    shareTimesCount: 0,
  }
  componentDidMount(){
    this.getYesterdayDataFun();
  }
  getYesterdayDataFun = ()=> {
    getYesterdayData({
      account: this.state.orderadmincount,
      password: this.state.orderadminpass,
    }).then( res => {
      if(res.code === '1'){
        const resData = res.data || []
        this.setState({
          gmv: resData.addCouponTotalMoney,
          totalOrders: resData.totalOrders,
          totalNumber: resData.totalNumber,
          shareRecordCount: resData.shareRecordCount,
          shareTimesCount: resData.shareTimesCount,
        })
      }
    })
  }
  render() {
    // this.getYesterdayDataFun();
    const { gmv, totalOrders, totalNumber, shareRecordCount, shareTimesCount } = this.state
    return (
      <div className="YesterdayData">
        <h1>昨日数据</h1>
        <div className="list">
          <ul>
            <li className="flex-box flex-wrap flex-space-between flex-align-center">
              <span>GMV</span>
              <p>￥{gmv}</p>
            </li>
            <li className="flex-box flex-wrap flex-space-between flex-align-center">
              <span>订单量</span>
              <p>{totalOrders}</p>
            </li>
            <li className="flex-box flex-wrap flex-space-between flex-align-center">
              <span>商品量</span>
              <p>{totalNumber}</p>
            </li>
            <li className="flex-box flex-wrap flex-space-between flex-align-center">
              <span>昨日分享次数</span>
              <p>{shareRecordCount}</p>
            </li>
            <li className="flex-box flex-wrap flex-space-between flex-align-center">
              <span>昨日浏览次数</span>
              <p>{shareTimesCount}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
