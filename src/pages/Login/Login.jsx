import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
import { loginApi } from '../../api.js'
import './Login.styl'

export default class Login extends Component {
  state = {
    passaccount: '',
    password: '',
  }
  componentDidMount() {
    if (window.localStorage.getItem('orderadminpass')) this.props.history.replace('/home')
  }
  loginFun = () => {
    if(this.state.passaccount && this.state.password){
      console.log('确认登陆')
      console.log(this);
      
      loginApi({
        account: this.state.passaccount,
        password: this.state.password,
      }).then( res => {
        if(res.code === '1'){
          //登录成功后
          window.localStorage.setItem('orderadmincount',this.state.passaccount)
          window.localStorage.setItem('orderadminpass',this.state.password)
          alert(res.msg)
          this.props.history.replace(`/home`)
        }else{
          alert(res.msg)
          // this.props.history.replace(`/home`)
           
        }
        console.log(res.msg)
      })
    }else{
      alert('请输入账号密码')
    }
  }
  changeVal = (e) =>{
    // console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { passaccount, password } = this.state
    return (
      <div className="login">
        <div className="logo"><img src="static/sfxdj_logo.jpg" alt="" /></div>
        <div className="loginBox">
          <div className="row">
            <div className="icon"></div>
            <input type="text" name="passaccount" placeholder="用户账号" value={passaccount} onChange={this.changeVal}/>
          </div>
          <div className="row">
            <div className="icon ic2"></div>
            <input type="password" name="password" placeholder="用户密码" value={password} onChange={this.changeVal} />
          </div>
          <div className="row">
            <div className="loginBtn" onClick={this.loginFun}>登陆</div>
          </div>
        </div>
        <div className="blockOut"></div>
        
          
      </div>
    )
  }
}
// export default withRouter(Login)
