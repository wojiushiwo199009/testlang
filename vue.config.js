module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'lang',
      enableInSFC: true
    }
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
