
//css外だし用の変数
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
//const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
 //const enabledSourceMap = MODE === "development";

module.exports = {
  // モード値を "production" に設定すると最適化された状態で、
  // "development" に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  // source-map 方式でないと、CSSの元ソースが追跡できないため
  devtool: "source-map",

  //エントリーポイント必須
  entry: `./src/index.js`,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js"
  },

    //ローカルサーバーを自動で更新
    devServer: {
        contentBase: "dist",
        open: true,
      },


  module: {
    rules: [
    　// jsファイルの読み込みとbabelでのコンパイル
    　{
          // 拡張子 .js の場合
　        test: /\.js$/,
　          use: [
　            {
　              // Babel を利用する
　              loader: "babel-loader",
　              // Babel のオプションを指定する
　              options: {
　                presets: [
　                  // プリセットを指定することで、ES2020 を ES5 に変換
　                  "@babel/preset-env",
　                ],
　              },
　            },
　          ],
　        },
      // Sassファイルの読み込みとコンパイル
      {
      
        test: /\.scss/, // 対象となるファイルの拡張子
        use: [
           // CSSファイルを書き出すオプションを有効にする
           {
            loader: MiniCssExtractPlugin.loader,
           },
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              sourceMap: true,
              // Sass+PostCSSの場合は2を指定
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          // PostCSSのための設定
          {
            loader: "postcss-loader",
            options: {
              // PostCSS側でもソースマップを有効にする
              // sourceMap: true,
              postcssOptions: {
                plugins: [
                  // Autoprefixerを有効化
                  // ベンダープレフィックスを自動付与する
                  ["autoprefixer", { grid: true }],
                ],
              },
            },
          },
    
          //sassをバンドルするための機能
          {
            loader: "sass-loader",
            options: {
              // ソースマップの利用有無
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // CSSファイルを外だしにするプラグイン
    new MiniCssExtractPlugin({
      // ファイル名を設定します
      filename: "style.css",
    }),
  ],

  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
  

 
};
