import React, { Component,lazy,Suspense } from 'react';
// import Home1 from '../../components/Home1'
// import Home2 from '../../components/Home2'
import { Button, Space } from 'antd';
import {getOrderStatWeekData,getOrderStatMonthData} from '../../api'
import './Home.styl'
const Home1 = lazy(() => import('../../components/Home1'))
const Home2 = lazy(() => import('../../components/Home2'))

export default class Home extends Component {
  state = {
    orderadmincount: window.localStorage.getItem('orderadmincount'),
    orderadminpass: window.localStorage.getItem('orderadminpass'),
    todayGmv: 0,
    todayGmvNot: 0,
    todayOrders: 0,
    todayAftermarket: 0,
    current: 0,
    tabs:[{text:'今日'},{text:'近7天'},{text:'近30天'}],
    childData: {
      addCouponTotalMoney: 0,
      totalMoney: 0,
      totalOrders: 0,
      returnOrders: 0,
    },
    data:[] //hom2组件使用的数据

  }
  componentDidMount(){
   
  }
 
  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  }
  
  tabsClick = (index) => {
    this.setState({
      current: index
    })
    if(index === 1){
      this.getOrderStatWeekDataFun()
    }else if(index === 2){
      this.getOrderStatMonthDataFun()
    }
  }
  childDataFun = (data) => {
    this.setState({
      childData: data
    })
  }
  getOrderStatWeekDataFun() {
    getOrderStatWeekData({
      account: this.state.orderadmincount,
      password: this.state.orderadminpass
    }).then((res) => {
      if (res.code === '1') {
        let resData = res.data,childData = {}, data = resData.topGoods.reverse();
        data.forEach((v, i) => {
          data[i].statisticsDay = v.statisticsDay.substring(5)
          data[i]['订单'] = v.totalOrders
          data[i].Gmv = v.addCouponTotalMoney
        });
        childData = (({ addCouponTotalMoney,totalMoney,totalOrders,returnOrders}) => ({ addCouponTotalMoney,totalMoney,totalOrders,returnOrders}))(resData)
        this.setState({
          data,
          childData
        })
      }
    }
    )
  }
  getOrderStatMonthDataFun() {
    getOrderStatMonthData({
      account: this.state.orderadmincount,
      password: this.state.orderadminpass
    }).then((res) => {
      if (res.code === '1') {
        let resData = res.data,childData = {}, data = resData.topGoods.reverse();
        data.forEach((v, i) => {
          data[i].statisticsDay = v.statisticsDay.substring(5)
          data[i]['订单'] = v.totalOrders
          data[i].Gmv = v.addCouponTotalMoney
        });
        childData = (({ addCouponTotalMoney,totalMoney,totalOrders,returnOrders}) => ({ addCouponTotalMoney,totalMoney,totalOrders,returnOrders}))(resData)
        this.setState({
          data,
          childData
        })
        console.log(data);
        
      }
    }
    )
  }
  
  
  render() {
  
    const { childData ,tabs,current,data} = this.state
    // console.log('render')
    // console.log(list)
    return (
      <div className="home">
        <header>
          <h1>实时数据</h1>
          {/* <Space wrap>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
          </Space> */}
          <div className="days">
            <ul className="flex-box flex-align-center flex-space-between">
              {
                tabs.map( (v,i) => {
                    return <li {...v} onClick={() => {
                      this.tabsClick(i)
                    }
                    }className={ i === current ? 'active' : ''} key={i}>{v.text}</li>
                  
                  }
                )
              }
           
            </ul>
          </div>
          <div className="census flex-box flex-wrap">
            <div className="item">
              <p>￥{childData.addCouponTotalMoney}</p>
              <span>今日GMV</span>
            </div>
            <div className="item">
              <p>￥{childData.totalMoney}</p>
              <span>今日GMV(不含券)</span>
            </div>
            <div className="item">
              <p>{childData.totalOrders}</p>
              <span>今日订单</span>
            </div>
            <div className="item">
              <p>{childData.returnOrders}</p>
              <span>售后</span>
            </div>
          </div>
        </header>
        <div className="null"></div>
        <div>
          <Suspense fallback={<p>加载中...</p>}>
            {
              current === 0 ? (<Home1 childDataFun={this.childDataFun}></Home1>) : current === 1 ? (<Home2 data={data}></Home2>) : (<Home2 childDataFun={this.childDataFun} data={data}></Home2>)
            }

          </Suspense>
        </div>
      </div>
    )
  }
}
// export default withRouter(Home)