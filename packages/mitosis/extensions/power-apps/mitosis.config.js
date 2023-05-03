const PowerAppsPlugin = require('./plugins/power-apps');

module.exports = {
	files: 'src/**',
	targets: ['react'],
	dest: '../../../../output/power-apps',
	options: {
		react: {
			typescript: true,
			plugins: [PowerAppsPlugin]
		}
	}
};
