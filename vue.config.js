
//接口测试
module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '1219',
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://8.133.163.197:1219', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }
}

//本机测试，页面测试

// module.exports = {
//     devServer: {
//         host: "192.168.2.153",
//         port: 8080  //配置端口
//     }
// }