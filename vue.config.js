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
//                 target: 'http://192.168.2.125:8080', //API服务器的地址
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/api': ''
//                 }
//             }
//         },
//     }
// }
module.exports = {
    devServer: {
        host: "192.168.2.153",
        port: 8080  //配置端口
    }
}