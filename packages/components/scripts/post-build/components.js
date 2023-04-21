/**
 * @returns {[{
 * name:string,
 * defaultStylePath:string,
 * overwrites?:{
 * 	global?:{from:string,to:string}[],
 * 	angular?:{from:string,to:string}[],
 * 	react?:{from:string,to:string}[],
 * 	vue?:{from:string,to:string}[]
 * },
 * config?:{
 *     	vue?:{
 *         vModel?: {modelValue:string, binding:string}[]
 *     }
 * }
 * }]}
 */
const getComponents = () => [
	{
		name: 'code-docs'
	},

	{
		name: 'radio',
		overwrites: {
			vue: [
				{
					from: 'immediate: true,',
					to: 'immediate: true,\nflush: "post"'
				}
			]
		},
		config: {
			vue: {
				vModel: [{ modelValue: 'checked', binding: ':checked' }]
			}
		}
	},

	{
		name: 'alert'
	},

	{
		name: 'infotext'
	},

	{
		name: 'link'
	},

	{
		name: 'section'
	},

	{
		name: 'page'
	},
	{
		name: 'header'
	},
	{
		name: 'brand'
	},
	{
		name: 'input',
		config: {
			vue: {
				vModel: [{ modelValue: 'value', binding: ':value' }]
			}
		}
	},
	{
		name: 'divider'
	},
	{
		name: 'card'
	},
	{
		name: 'tab-bar'
	},
	{
		name: 'tab'
	},
	{
		name: 'button'
	},
	{
		name: 'icon'
	}
];

module.exports = {
	components: getComponents()
};