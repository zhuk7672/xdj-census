import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.styl'

export default class NavBar extends Component {
    state = {
        navBarArr: [{ text: '实时数据', to: "/home" }, { text: '昨日数据', to: "/yesterday_data" }, { text: '销售排行', to: "/adminorder_sale" }, { text: '分享排行', to: `/share_list` }]
    }

    render() {
        const {navBarArr} = this.state
        return (
            <div className="navBar">
                <ul>
                    {/* NavLink的默认类名在最新版本中更改为 active */}
                    {
                        navBarArr.map((item,i) => {
                            return <li key={i}><NavLink {...item} activeClassName="acti">{item.text}</NavLink></li>
                        })
                    }
                </ul>
            </div>
        )
       
    }
}
