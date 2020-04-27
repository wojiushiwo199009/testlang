const path = require('path')
const IS_PROD = ['production'].includes(process.env.NODE_ENV)
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 打包分析
let http = process.env.npm_config_proxy
let targetPort = process.env.npm_config_target || '8001' 
let target = http ? http : 'http://172.18.143.236:' + targetPort

// gzip --start
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzip = true // 是否使用gzip
const productionGzipExtensions = ['js', 'css'] // 需要gzip压缩的文件后缀
// gzip --end

const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 去掉注释

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

// cdn预加载使用
const externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios',
    'element-ui': 'ELEMENT',
    'js-cookie': 'Cookies',
    'nprogress': 'NProgress'
}

const cdn = {
    // 开发环境
    dev: {
        css: [
            'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
            'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css'
        ],
        js: []
    },
    // 生产环境
    build: {
        css: [
            'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
            'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css'
        ],
        js: [
            'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
            'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
            'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
            'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
            'https://unpkg.com/element-ui/lib/index.js',
            'https://cdn.bootcss.com/js-cookie/2.2.0/js.cookie.min.js',
            'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js'
        ]
    }
}
const cdnDomian = 'http://ppqqg4jtj.bkt.clouddn.com' //静态文件cdn

module.exports = {
    // baseUrl: IS_PROD ? process.env.VUE_APP_SRC || '/' : './', // 默认'/'，部署应用包时的基本 URL
    publicPath: IS_PROD ? cdnDomian : '/', // 默认'/'，部署应用包时的基本 URL
    outputDir: 'dist',
    assetsDir: '', // 相对于outputDir的静态资源(js、css、img、fonts)目录
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: false, // 生产环境的 source map


    configureWebpack: config => {


        const myConfig = {}
        if (process.env.NODE_ENV === 'production') {
            // 1. 生产环境npm包转CDN
            myConfig.externals = externals

            myConfig.plugins = []
            // gzip
            // 2. 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
            productionGzip && myConfig.plugins.push(
                new CompressionWebpackPlugin({
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 8192,
                    minRatio: 0.8
                })
            )
            // 去掉注释
            myConfig.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        output: {
                            comments: false, // 去掉注释
                        },
                        compress: {
                            warnings: false,
                            drop_console: true,
                            drop_debugger: false,
                            pure_funcs: ['console.log']//移除console
                        }
                    }
                })
            )

        }

        if (process.env.NODE_ENV === 'development') {
            /**
             * 关闭host check，方便使用ngrok之类的内网转发工具
             */
            myConfig.devServer = {
                disableHostCheck: true
            }
        }

        return myConfig
    },

    chainWebpack: config => {
         // 修改prefetch：
        config.plugin('prefetch').tap(options => {
            options[0].fileBlacklist = options[0].fileBlacklist || []
            options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
            return options
        })
        // 压缩图片
        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
                mozjpeg: { progressive: true, quality: 65 },
                optipng: { enabled: false },
                pngquant: { quality: '65-90', speed: 4 },
                gifsicle: { interlaced: false },
                webp: { quality: 75 }
            })

        // 使用cdn
        config.plugin('html').tap(args => {
            if (process.env.NODE_ENV === 'production') {
                args[0].cdn = cdn.build
            }
            if (process.env.NODE_ENV === 'development') {
                args[0].cdn = cdn.dev
            }
            return args
        })

        // 打包分析
        if (process.env.IS_ANALYZ) {
            config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
                {
                    analyzerMode: 'static'
                }
            ])
        }
        // svg loader
        const svgRule = config.module.rule('svg') // 找到svg-loader
        svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
        svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
        svgRule // 添加svg新的loader处理
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })

        // 修改images loader 添加svg处理
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(resolve('src/icons'))
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    },
    devServer: {
        open: false, // 自动启动浏览器
        host: '0.0.0.0', // localhost
        port: 8081, // 端口号
        https: false,
        hotOnly: true, // 热更新
        proxy: {
            // 本地代理包含user的接口 如： /user/getUser 
            '/api': {
                target,
                // target: 'https://console0.ctyun.cn',
                changeOrigin: true,
                secure: false, //不验证安全性
                ws:false,
                // headers: {
                //   Referer: 'https://console0.ctyun.cn'
                // },
                pathRewrite: {
                    '^/api': ''
                }
            }

        }
    },

    // devServer: {
    //   port: 8080,
    //   before(app) {
    //     app.get('/api/index', (req, res) => {
    //       res.json(mockIndexData)
    //     })
    //   }
    // }
}