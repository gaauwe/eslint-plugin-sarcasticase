var seedrandom = require('seedrandom');

function spongify(str) {
	var rng = seedrandom(str);
	const base = str.length >= 3 ? 3 : 2

	return str.split('').map(function(x) {
		random = Math.floor(rng() * 100);
		return random % base === 0 ? x.toUpperCase() : x.toLowerCase();
	}).join('');
}

function checkIdentifier(node, context) {
	// Skip variables that are PascalCase.
	if (node.name[0].toUpperCase() !== node.name[0]) {
		const seedName = node.name.toLowerCase().replaceAll('_', '');
		const spongedName = spongify(seedName);

		// Skip variables that are already sarcasticase.
		if (node.name !== spongedName) {
			context.report({
				node,
				message: `variAble is Not sarcasTiCAsE: ${node.name}`,
				data: {
					name: node.name
				},
				* fix(fixer) {
					yield fixer.replaceTextRange([node.range[0], node.range[0] + node.name.length], spongedName);

					// Extend range of the fix to the range of `node.parent`.
					yield fixer.insertTextBefore(node.parent, "");
					yield fixer.insertTextAfter(node.parent, "");
				}
			});
		}
	}
}

const onNamingConventionMatch = (context) => {
	return {
		Identifier(node) {
			return checkIdentifier(node, context);
		},
		JSXIdentifier(node) {
			return checkIdentifier(node, context);
		},
	};
};

module.exports = {
	onNamingConventionMatch
};