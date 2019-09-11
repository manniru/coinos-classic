process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = !['development', 'test'].includes(process.env.NODE_ENV);

module.exports = IS_PRODUCTION
  ? {}
  : {
    pluginOptions: {
        webpackBundleAnalyzer: {
          openAnalyzer: true
        }
      },
      runtimeCompiler: true,
      devServer: {
        disableHostCheck: true,
        proxy: {
          '/api': {
            target: 'http://localhost:3119',
            pathRewrite: { '^/api': '' },
            secure: false,
          },
          '/socket.io': {
            target: 'http://localhost:3119',
            ws: true,
          },
        },
      },
    };
