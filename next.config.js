const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const path = require('path');
// const withCSS = require('@zeit/next-css');

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }
module.exports = (phase, { defaultConfig }) => {
	//   if (phase === PHASE_DEVELOPMENT_SERVER) {
	//     return {
	//       /* development only config options here */
	//     }
	//   }

	//   return {
	//     /* config options for all phases except development here */
	//   }

	return {
		// sassOptions: {
		// 	includePaths: [path.join(__dirname, 'styles')],
		// },
		reactStrictMode: true,
	};
};
