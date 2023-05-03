module.exports = {
	files: 'src/**',
	targets: ['angular', 'vue3', 'webcomponent', 'react'],
	dest: '../../../../output/components',
	options: {
		react: {
			typescript: true
		},
		angular: {
			typescript: true
		},
		vue3: {
			typescript: true
		},
		webcomponent: {
			experimental: {
				attributeChangedCallback(test, json) {
					const properties =
						json?.meta?.useMetadata?.component?.properties?.map(
							(prop) => prop.name
						) || [];
					return (
						'this.props[name] = newValue;\n' +
						'    this.update();' +
						'}' +
						'static get observedAttributes() {\n' +
						`    return ${JSON.stringify(properties)};`
					);
				}
			}
		}
	}
};
