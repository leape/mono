const { components } = require('./components');
const FS = require('node:fs');
const { getComponentName, runReplacements } = require('../utils');

module.exports = (tmp) => {
	for (const component of components) {
		try {
			const upperComponentName = getComponentName(component.name);

			const tsxFile = `../../${
				tmp ? 'output/tmp' : 'output'
			}/react/src/components/${component.name}/${component.name}.tsx`;

			const tsxFileContent = FS.readFileSync(tsxFile).toString('utf-8');
			const htmlElements = tsxFileContent.match('(?<=useRef<)(.*?)(?=>)');
			let htmlElement = 'HTMLDivElement';
			if (htmlElements.length > 0) {
				htmlElement = htmlElements[0];
			}

			let replacements = [
				{
					from: /= useState/g,
					to: '= useState<any>'
				},
				{
					from: ` } from "react"`,
					to: `, forwardRef, HTMLProps } from "react"`
				},
				{
					from: `function DB${upperComponentName}(props: DB${upperComponentName}Props) {`,
					to: `function DB${upperComponentName}Fn(props: HTMLProps<${htmlElement}> & DB${upperComponentName}Props, component: any) {`
				},
				{
					from: `export default DB${upperComponentName};`,
					to: `const DB${upperComponentName} = forwardRef<${htmlElement},HTMLProps<${htmlElement}> & DB${upperComponentName}Props>(DB${upperComponentName}Fn);\nexport default DB${upperComponentName};`
				},
				{
					from: 'if (ref.current)',
					to: 'if (ref?.current)'
				},
				{
					from: '[ref.current]',
					to: '[ref]'
				},
				{
					from: '>(null);',
					to: '>(component);'
				},
				{
					from: '={true}',
					to: ''
				},
				{
					from: '} from "../../utils"',
					to: ', filterPassingProps } from "../../utils"'
				},
				{
					from: 'ref={ref}',
					to: 'ref={ref}\n' + '{...filterPassingProps(props)}'
				}
			];

			runReplacements(replacements, component, 'react', tsxFile);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
