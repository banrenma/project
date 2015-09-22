//webpack
var webpack = require("webpack");
module.exports={
	entry:'./client/client.js',
	output:{
		filename:'client.js'
	},
	module:{
		 loaders: [
	            {
	                test: /\.jsx?$/,
	                loader: 'babel?stage=0',
	                exclude: /node_modules/
	                
	            },
	  ],
		resolve: {
	    	extensions: ['', '.jsx', '.js']
	  	}
  	},
  	plugins:[
	  	new webpack.ProvidePlugin({
	    $: "jquery",
	    jQuery: "jquery",
	    "window.jQuery": "jquery"
		}),
		new webpack.ProvidePlugin({
	    _: "underscore",
		}),
		new webpack.ProvidePlugin({
	    	React: "react",
		})
  	]

}
