import React, { Component } from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip } from 'recharts'
import './Home2.styl'


export default class index extends Component {
  state = {
    chartWidth: 500,
    chartHeight: 200,
    chartLeft: 1,
  }

  componentDidMount() {
    this.userAgent()
  }
  userAgent = (params) => {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      this.setState({
        chartWidth: 1200,
        chartHeight: 600,
        chartLeft: 80,
      })
    }
  }
  
  render() {
    const { chartWidth,chartHeight,chartLeft} = this.state
    const { data } = this.props
    
    return (
      <div className="home2">
        <h2>订单</h2>
        <div className="chartBox">
          <LineChart width={chartWidth} height={chartHeight} data={data}
            margin={{ top: 5, right: 0, left: chartLeft, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="statisticsDay" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="订单" stroke="#8884d8" />
          </LineChart>
        </div>
        <h2>GMV</h2>
        <div className="chartBox">
          <LineChart width={chartWidth} height={chartHeight} data={data}
            margin={{ top: 5, right: 0, left: chartLeft, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="statisticsDay" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Gmv" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    )
  }
}
