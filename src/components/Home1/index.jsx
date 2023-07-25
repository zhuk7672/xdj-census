import React, { Component } from 'react'
import { getOrderStatYearData, findSearchCount, getGoodsSaleTopByDate, getTopOrder } from '../../api'
import Quarter from '../Quarter/Quarter'


export default class index extends Component {
    state = {
        orderadmincount: window.localStorage.getItem('orderadmincount'),
        orderadminpass: window.localStorage.getItem('orderadminpass'),
        todayGmv: 0,
        todayGmvNot: 0,
        todayOrders: 0,
        todayAftermarket: 0,
        searchCounts: [], //今日用户搜索排名
        todayGoodsSales: [],  //今日商品销售排行
        list: [],
        ordersTotal: 0,
        gmvTotal: 0,
    }
    componentDidMount(){
        this.getTopOrderFun()
        this.findSearchCountFun()
        this.getGoodsSaleTopByDateFun()
        this.getOrderStatYearDataFun()
        console.log(this.props);
        
    }
    getTopOrderFun = () =>  {
        getTopOrder({
          account: this.state.orderadmincount,
          password: this.state.orderadminpass
        }).then( res =>{
          if(res.code === '1'){
            // console.log(res)
            const data = res.data[0];
            let childData = {}
            childData = (({ addCouponTotalMoney,totalMoney,totalOrders,returnOrders}) => ({ addCouponTotalMoney,totalMoney,totalOrders,returnOrders}))(data)
            this.props.childDataFun(childData)
          }
        })
    }
    findSearchCountFun = () => {
        findSearchCount({

        }).then( res => {
            if(res.code === '1'){
            this.setState({
                searchCounts: res.data
            })
            }
        })
    }
    getGoodsSaleTopByDateFun = () => {
        getGoodsSaleTopByDate({

        }).then( res => {
            if(res.code === '1'){
            this.setState({
                todayGoodsSales: res.data
            })
            }
        })
    }
    getOrderStatYearDataFun = () => {
        getOrderStatYearData({
            account: this.state.orderadmincount,
            password: this.state.orderadminpass
        }).then( res => {
            if(res.code === '1'){
            let resData = res.data.topGoodsYear || [],
                num = 3,
                list = [],
                listData = {},
                ordersTotal = 0,
                gmvTotal = 0
                ;
            // resData = resData.slice(1,3)

            for (var i = 0; i < 12; i += num) {
                listData = resData.slice(i, i + num);
                list.push(listData)
            }
            resData.forEach( v => {
                ordersTotal += v.totalOrders;
                gmvTotal += v.totalMoney;
            })
            this.setState({
                list,
                ordersTotal,
                gmvTotal: gmvTotal.toFixed(2)
            })
            console.log(list)

            }
        })
    }
    render() {
        const { searchCounts, todayGoodsSales, list, ordersTotal, gmvTotal } = this.state
        return (
            <div className="home1">
                <div className="quarterData">
                    <div className="box">
                        <div className="top flex-box flex-wrap">
                            <div className="row w20">时间</div>
                            <div className="row w50">订单</div>
                            <div className="row w30">GMV</div>
                        </div>
                        <Quarter list={list[0]} quarterName="一季度"></Quarter>
                        <Quarter list={list[1]} quarterName="二季度"></Quarter>
                        <Quarter list={list[2]} quarterName="三季度"></Quarter>
                        <Quarter list={list[3]} quarterName="四季度"></Quarter>
                        <div className="tableBox">
                            <div className="text">
                                <div className="topRow flex-wrap flex-box">
                                    <div className="row w20">合计</div>
                                    <div className="row w50">{ordersTotal}</div>
                                    <div className="row w30">{gmvTotal}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`publicList ${searchCounts.length ? '' : 'hide'}` } >
                    <h2>今日用户搜索排名</h2>
                    <div className="list">
                        <ul>
                            {
                                searchCounts.map((v, i) => {
                                    return <li className="flex-box flex-wrap flex-align-center flex-space-between" key={i}>
                                        <div className="left">{v.content}</div><div className="right">{v.count}次</div>
                                    </li>
                                })
                            }

                        </ul>
                    </div>
                </div>
                <div className="publicList">
                    <h2>今日商品销售排名</h2>
                    <div className="list lt2">
                        <ul>
                            {
                                todayGoodsSales.map((v, i) => {
                                    return <li className="flex-box flex-wrap flex-align-center flex-space-between" key={i}><div className="left ellipsis">{i + 1} {v.goodsName}</div><div className="right">{v.totalNumber}</div></li>
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

