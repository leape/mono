<script lang="jsx">
import { defineComponent } from "vue";
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/button";
import { DBButton } from "../../../../../output/vue/vue3/src";
import * as DefaultComponentExample from "../../../../shared/default-component-data";
import { getVariants } from "../../utils";

// defaultComponentVariants.forEach((variant) => {
// 	variant.examples[0].code = "<DBButton>Button</DBButton>";
// });

// defaultComponentVariants[0].examples[1].code =
// 	'<DBButton variant="primary">Button</DBButton>';
// defaultComponentVariants[0].examples[2].code =
// 	'<DBButton variant="transparent">Button</DBButton>';
// defaultComponentVariants[0].examples[3].code =
// 	'<DBButton variant="semi-transparent">Button</DBButton>';

// defaultComponentVariants[1].examples[1].code =
// 	'<DBButton state="loading">Button</DBButton>';

// defaultComponentVariants[2].examples[1].code =
// 	'<DBButton size="small">Button</DBButton>';

// defaultComponentVariants[3].examples[1].code =
// 	'<DBButton icon="account" :icntxt="true">Button</DBButton>';
// defaultComponentVariants[3].examples[2].code =
// 	'<DBButton icon="account">Button</DBButton>';

// defaultComponentVariants[4].examples[1].code =
// 	'<DBButton width="full">Button</DBButton>';

const getButton = ({ variant, state, size, icntxt, icon, width, text }) => (
	<DBButton
		variant={variant}
		state={state}
		size={size}
		icntxt={icntxt}
		icon={icon}
		width={width}
	>
		{text}
	</DBButton>
);

const getExampleMatrix = (exampleName) => [
	[
		{
			example: getButton({ text: exampleName }),
			code: "<DBButton>Button</DBButton>"
		},
		{
			example: getButton({ text: exampleName, variant: "primary" }),
			code: '<DBButton variant="primary">Button</DBButton>'
		},
		{
			example: getButton({ text: exampleName, variant: "transparent" }),
			code: '<DBButton variant="transparent">Button</DBButton>'
		},
		{
			example: getButton({
				text: exampleName,
				variant: "semi-transparent"
			}),
			code: '<DBButton variant="semi-transparent">Button</DBButton>'
		}
	],
	[
		{
			example: getButton({ text: exampleName }),
			code: "<DBButton>Button</DBButton>"
		},
		{
			example: getButton({ text: exampleName, state: "loading" }),
			code: '<DBButton state="loading">Button</DBButton>'
		}
	],
	[
		{
			example: getButton({ text: exampleName }),
			code: "<DBButton>Button</DBButton>"
		},
		{
			example: getButton({ text: exampleName, size: "small" }),
			code: '<DBButton size="small">Button</DBButton>'
		}
	],
	[
		{
			example: getButton({ text: exampleName }),
			code: "<DBButton>Button</DBButton>"
		},
		{
			example: getButton({
				text: exampleName,
				icon: "account",
				icntxt: true
			}),
			code: '<DBButton icon="account" icntxt>Button</DBButton>'
		},
		{
			example: getButton({ text: exampleName, icon: "account" }),
			code: '<DBButton icon="account">Button</DBButton>'
		}
	],
	[
		{
			example: getButton({ text: exampleName }),
			code: "<DBButton>Button</DBButton>"
		},
		{
			example: getButton({ text: exampleName, width: "full" }),
			code: '<DBButton width="full">Button</DBButton>'
		}
	]
];

export default defineComponent({
	render() {
		return (
			<DefaultComponent
				title="DBButton"
				variants={getVariants(
					defaultComponentVariants,
					getExampleMatrix
				)}
			></DefaultComponent>
		);
	}
});
</script>
