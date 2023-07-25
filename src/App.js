import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter,Redirect,Navigate } from 'react-router-dom'
import routers from './Router/router'
import NavBar from './components/NavBar/NavBar'
import './App.css';


// import NotFound from './pages/404/index'


/** 高阶组件 */
class PrivateComp extends Component {
  componentDidMount() {
    if (!window.localStorage.getItem('orderadminpass')) {
      console.log('没有token');
      this.props.history.replace('/login')
    } else {
      console.log('拿到token');
      // this.props.history.replace('/home')
    }
  }
  
  render() {
    const { path, component } = this.props
    return <Route path={path} component={component}></Route>
  }
}
const PrivateRoute = withRouter(PrivateComp)

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {
            routers.map( (v,i) => {
              return <PrivateRoute key={i} path={v.path} component={v.component}></PrivateRoute>
            })
          }
          {/* <Route to="/" element={<Navigate to="/home"/>}></Route> */} 
          {/* Navigate在函数式组件中用于取代Redirect （重定向 */}
          <Redirect from='/' to='/home'></Redirect>
        </Switch>
        <NavBar></NavBar>
        <div className="null"></div>
      </Router>
    </div>

  )
}