module.exports = {
	entry:{
		main:'./example1.1',
	},
	output:{
		filename:'bundle.[name].js'
	},
	module:{
		loaders:[
			{ test: require.resolve('./example1.2'), loader: "exports?Hello" }
		]
	}
};
