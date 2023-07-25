import axios from 'axios'
// import qs from 'qs'
import qs from 'querystring'


export function fetchPost(url, params = {}, config){
    
        //url:接口地址，params：接口参数,config:请求头之类参数：{ headers: { 'Content-Type': 'application/json' }
        params = qs.stringify(params)
        // axios.post(url,params,{...config}).then( res => {
        //     console.log(res.data)
        // }).catch( err => {
        //     console.log(err)
        // })
        return new Promise((resolve,reject) => {
            axios.post(url,params,{...config}).then( res => {
                resolve(res.data)
            }).catch( err => {
                reject(err)
            })

        })
    
}
