var path = require('path');
var	webpack = require('webpack');
var	htmlWebpackPlugin = require('html-webpack-plugin');//替换html模板的
		//自动在browser打开html文件
var	openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
		// 把多个css合成一个css样式
var	extrtartTextwebpackPlugin = require('extract-text-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname);//resolve 得到absolut路径参数是一个是直接和根目录拼接来两个的时候一起和跟根目录拼接
const	SRC_PATH = path.join(ROOT_PATH,'src');// 两个参数一个是吧两个参数拼接在一起
const	DIST_PATH = path.join(ROOT_PATH,'dist');
const	TEM_PATH = path.join(ROOT_PATH,'templates');
			// 这是一个生产的流程  有src dist templates 还有根路径
module.exports={
	entry:{
		bundle:path.join(SRC_PATH,'/index.js'),
		vendor:['react']//提取公共的react代码
	},
	output:{
		path:DIST_PATH,
		filename:'[name].js?[hash:8]',

	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:"babel-loader",
				exclude: /node_modules/
			},
			{
				test:/\.css/,
				loader:extrtartTextwebpackPlugin.extract("style-loader","css-loader")
			},
			{
				test:/\.(woff|woff2|svg|eot)(\d+\.\d+\.\d+)?$/,
				loader:'url?limite?10000'
			},
			{
				test:/\.(jpg|png|gif)/,
				loader:'url?limite?8192'
			}
		]
	},

    /*chunkFilename: (options.devServer ? '[id].js' : '[name].js')
      + (options.longTermCaching ? '?[chunkhash:8]' : ''),*/
   // sourceMapFilename: 'debugging/[file].map',
   devServer:{
   	 stats:{colors:true},
   	 port:9066
   },
     devtool:'cheap-module-source-map',
   resolve:{
		  // 解决 延迟
		  extenstion:['','.js','.css','.json']
		 },
		plugins:[
			new htmlWebpackPlugin({
				title:'Process',
				templates:TEM_PATH
			}),
			new  webpack.optimize.CommonsChunkPlugin('vendor','vendor.js?[hash]'),
			new openBrowserWebpackPlugin({
				url:'http://localhost:9066'
			}),
			new extrtartTextwebpackPlugin("bundle.css?[hash:8]")

		]
  
}

