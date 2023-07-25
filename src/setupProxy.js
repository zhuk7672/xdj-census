const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api',{  //遇见 api前缀的请求，就会触发该代理配置
            target: 'http://s.sfddj.com',    //请求转发给shop/fx-sf.com
            changeOrigin: true,
            pathRewrite: {"^/api": ''},
            // pathRewrite: {'^/fxfront': '/'},
        })
    )
}