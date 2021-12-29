const path = require('path');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'), //  出力ファイルのディレクトリ名
    filename: 'bundle.js' // 出力ファイル名
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 拡張子 .ts もしくは .tsx の場合
        use: 'ts-loader'
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, 'build'),
    // open: true,
    port: 3000,
    historyApiFallback: true // BrowserRouterのリロード不可対策
  },
  resolve: {
    // import 文で .ts や .tsx ファイルを解決するため
    // これを定義しないと import 文で拡張子を書く必要が生まれる。
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  target: ['web', 'es5'] // ES5(IE11等)向けの指定（webpack 5以上で必要）
};
