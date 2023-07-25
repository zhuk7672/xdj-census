import React, { Component } from 'react'
import { getTopShare } from '../../api'
import '../AdminorderSale/AdminorderSale.styl'
import {imageSlecetFun} from '../../ProjectMethod'


export default class shareList extends Component {
  state = {
    orderadmincount: window.localStorage.getItem('orderadmincount'),
    orderadminpass: window.localStorage.getItem('orderadminpass'),
    list: []
  }
  componentDidMount() {
    this.getTopShareFun();
  }
  getTopShareFun = () => {
    getTopShare({
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
    // this.getYesterdayDataFun();
    const { list } = this.state
    return (
      <div className="AdminorderSale">
        <h1>分享排行</h1>
        <div className="list">
          <ul>
            {
              list.map((v, i) => {
                return (
                  <li className="flex-box flex-wrap" key={v.goodsId}>
                    <div className="rank flex-box flex-align-center">{i + 1}</div>
                    <div className="right flex-box flex-space-between">
                      <div className="pic"><img src={imageSlecetFun(v.img1, 'small')} alt="" /></div>
                      <div className="text">
                        <div className="adv">{v.areaName}</div>
                        <div className="goodName ellipsis">{v.goodsName}</div>
                        <div className="goodBottom flex-box flex-align-center">
                          <div className="price flex-1">分享量：{v.shareRecordCount}</div>
                          <div className="goodsDetails flex-1 flex-box gd2">
                            <div className="looks flex-1"><p>浏览量：{v.shareTimeCount}</p></div>
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
