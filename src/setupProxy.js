const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', { // 遇见‘/api1’这个前缀的请求，就会触发这个代理
      target: 'http://127.0.0.1:5001',  // 请求转发的目标（target）地址
      changeOrigin: true,  // 默认值为false，控制服务器收到的请求头中Host字段的值
      /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
      pathRewrite: { '^/api1': '' }  
      //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    }),
    createProxyMiddleware('/api2', {
      target: 'http://127.0.0.1:5001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }
    })
  )
}