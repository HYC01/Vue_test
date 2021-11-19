module.exports = {
    lintOnSave:false,//关闭语法检查
    // 开启代理服务器,这样就不存在跨域问题


    // 开启代理服务器(方式一)，更简单
    // devServer: {
    //     // 这个是你要连接的服务器的端口号
    //     //缺点一不能代理多个服务器
    //     //缺点二不能灵活控制是否走代理，当你的请求内容本地就有，就不会转发给5000服务器了
    //     proxy: 'http://localhost:5000'
    // },

    // 开启代理服务器(方式二)，更灵活
    devServer: {
        proxy: {
            // 灵活控制,只要请求前置带有api，就转发到服务器
            '/atguigu': {
                target: 'http://localhost:5000',
                // 这个是用来消除路径中的前缀
                pathRewrite:{'^/atguigu':''},
                // 用于支持websocket，默认为true
                ws: true,
                // 用true比较好，用于控制host值，默认为true
                changeOrigin: true
            },
            // 多个代理
            '/demo': {
                target: 'http://localhost:5001',
                // 这个是用来消除路径中的前缀
                pathRewrite:{'^/demo':''},
                // 用于支持websocket，默认为true
                ws: true,
                // 用true比较好，用于控制host值，默认为true
                changeOrigin: true
            },
        }
      }
  }