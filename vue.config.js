module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'lang',
      enableInSFC: true
    }
  },
  chainWebpack: config => { //通过 chainWebpack 调整内联文件的大小限制。例如，下列代码会将其限制设置为 10kb：
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
  },
  devServer:{
    proxy:{
      '/api':{
        target:'http://rap2.taobao.org:38080/app/mock/253813',
        ws:false,
        chageOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
