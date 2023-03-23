export const getVariants = (defaultComponentVariants, getExampleMatrix) => {
	return defaultComponentVariants.map((variant, index) => ({
		...variant,
		examples: variant.examples.map((example, exampleIndex) => ({
			...example,
			...getExampleMatrix(example.name ?? '')[index][exampleIndex]
		}))
	}));
};
