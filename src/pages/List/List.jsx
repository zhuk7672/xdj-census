import React,{Component,ReactDOM} from 'react';
// import {fetchPost} from '../../Axios/http.js'

export default class Login extends Component {
    state = {
        username: '',
        userpass: '',
    }
    mySubmit = (e) => {
       e.preventDefault();
       const { username, userpass} = this.state
       alert(`username:${username},userpass:${userpass}`)
        // console.log(username.value, userpass.value)
    }
    saveUserName = (e) =>{
        
        //普通写法
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
        //高阶函数写法
        return (e) => {
            console.log(e.target.name);
            console.log(e.target.value);
            
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        
        
    }
    //卸载组件
    death = (params) => {
        console.log(document.getElementById('listBlock'));
        clearInterval(this.timer)
        ReactDOM.unmountComponentAtNode(document.getElementById('listBlock'))
    }
    //组件挂载完毕
    componentDidMount(){
        this.timer = setInterval(() => {
            console.log(123);
            
        }, 1000);
    }
    //组件将要卸载
    // componentWillUnmount(){
        
    // }
    //初始化渲染、状态更新后
    render() {
        return (
          <div id="listBlock">
                <h1>list</h1>
                <div className="box">
                    <form onSubmit={this.mySubmit}>
                        <br />
                        <br />
                        <br />
                        用户名：<input type="text" name="username" onChange={this.saveUserName()}/><br />
                        密码：<input type="password" name="userpass" onChange={this.saveUserName()} /><br />
                        <button>登陆</button>
                    </form>
                </div>
                <br/>
                <button onClick={this.death}>卸载当前组件</button>
          </div>
        )
    }
}
