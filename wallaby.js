module.exports = function(wallaby) {
	return {
		files: [
			'src/sum.js',
			'!src/sum.test.js',
		],
		tests: [
			'src/sum.test.js',
		],
		env: {
			type: 'node',
			runner: 'node'
		},
		testFramework: 'jest',
		compilers: {
			'**/*.js': wallaby.compilers.babel(),
		},
	};

};