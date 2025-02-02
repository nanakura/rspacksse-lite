const { VueLoaderPlugin } = require('vue-rsloader')

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: './src/main.ts',
  },
  resolve: {
    alias: {
      '~': './src',
    },
  },
  // vue source map not work (webpack work well)
  // and devtool will change hmr file range ??
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: require.resolve('postcss-loader'),
          },
        ],
      },
      {
        test: /\.png$/,
        type: 'asset',
      },
      {
        test: /\.jpg$/,
        type: 'asset',
      },
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: require.resolve('vue-rsloader'),
            /** @type {import('vue-rsloader').VueLoaderOptions} */
            options: {
              reactivityTransform: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {    
    port: 3333,
    hot: true,
    historyApiFallback: true,
  },
  builtins: {
    define: {
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    },
    html: [{
      template: './index.html',
    }],
    copy: {
      patterns: ['./public'],
    },
  },
}

module.exports = config
