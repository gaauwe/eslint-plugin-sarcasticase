const {onNamingConventionMatch} = require("./namingConventionMatch");

module.exports = {
	rules: {
		"naming-convention": {
			meta: {
				fixable: 'code'
			},
			create: onNamingConventionMatch,
		},
	},
};