
//接口测试
// module.exports = {
//     outputDir: 'dist',   //build输出目录
//     assetsDir: 'assets', //静态资源目录（js, css, img）
//     lintOnSave: false, //是否开启eslint
//     devServer: {
//         open: true, //是否自动弹出浏览器页面
//         host: "localhost",
//         port: '8080',
//         https: false,
//         hotOnly: false,
//         proxy: {
//             '/api': {
//                 target: 'http://172.30.194.204:8080', //API服务器的地址

//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/api': ''
//                 }
//             }
//         },
//     }
// }

//本机测试，页面测试

module.exports = {
    devServer: {
        host: "172.30.217.110",
        port: 8080  //配置端口
    }
}