module.exports = {
	// モード値を production に設定すると最適化された状態で、
	// development に設定するとソースマップ有効でJSファイルが出力される
	mode: "development",
	entry: "./src/main.tsx",
	output: {
		path: `${__dirname}/dist`, //  出力ファイルのディレクトリ名
		filename: "main.js" // 出力ファイル名
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/, // 拡張子 .ts もしくは .tsx の場合
				use: "ts-loader"
			}
		]
	},
	resolve: {
		// import 文で .ts や .tsx ファイルを解決するため
		// これを定義しないと import 文で拡張子を書く必要が生まれる。
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	target: ["web", "es5"], // ES5(IE11等)向けの指定（webpack 5以上で必要）
};