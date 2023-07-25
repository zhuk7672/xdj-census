import React, { Component } from 'react'
import { getTopGoods } from '../../api'
import {imageSlecetFun} from '../../ProjectMethod'
import './AdminorderSale.styl'

export default class AdminorderSale extends Component {
  state = {
    orderadmincount: window.localStorage.getItem('orderadmincount'),
    orderadminpass: window.localStorage.getItem('orderadminpass'),
    list: []
  }
  componentDidMount() {
    this.getTopGoodsFun();
  }
  getTopGoodsFun = () => {
    getTopGoods({
      account: this.state.orderadmincount,
      password: this.state.orderadminpass,
    }).then(res => {
      if (res.code === '1') {
        const resData = res.data || []
        this.setState({
          list: resData
        })
      }
    })
  }
 
  render() {
    const { list } = this.state
    return (
      <div className="AdminorderSale">
        <h1>销售排行</h1>
        <div className="list">
          <ul>
            {
              list.map( (v,i) => {
                return (
                  <li className="flex-box flex-wrap" key={v.goodsId}>
                    <div className="rank flex-box flex-align-center">{i+1}</div>
                    <div className="right flex-box flex-space-between">
                      <div className="pic"><img src={imageSlecetFun(v.img1,'small')} alt="" /></div>
                      <div className="text">
                        <div className="adv">{v.areaName}</div>
                        <div className="goodName ellipsis">{v.goodsName}</div>
                        <div className="goodBottom flex-box flex-align-center">
                          <div className="price flex-1">￥{v.totalMoney}</div>
                          <div className="goodsDetails flex-1 flex-box">
                            <div className="orders flex-1">
                              <p>订单</p>
                              <p>{v.totalOrders}</p>
                            </div>
                            <div className="quantity flex-1">
                              <p>商品</p>
                              <p>{v.totalNumber}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                )
              })
            }
           
          </ul>
        </div>
      </div>
    )
  }
}
