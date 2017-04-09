var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(APP_PATH, 'template');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
  	app: path.resolve(APP_PATH, 'index.jsx'),
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: APP_PATH,
        query:{
        	presets:['react', 'es2015'],
        	"env": {
						"development": {
						 	"presets": ["react-hmre"]
						}
					}
        }
      },
      {
        test: /\.scss$/,
        loaders: 'style-loader!css-loader?modules!sass-loader',
        include: APP_PATH
      }
    ]
  },

  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
	    title: 'react app',
	    template: path.resolve(TEM_PATH, 'index.html'),
	    filename: 'index.html',
	    //chunks这个参数告诉插件要引用entry里面的哪几个入口
	    chunks: ['app'],
	    //要把script插入到标签里
	    inject: 'body'
    }),
  ],
  resolve: {
      extensions: ['.js', '.jsx']
  },
  devtool: 'eval-source-map',
};