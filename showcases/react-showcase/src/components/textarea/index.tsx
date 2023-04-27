import { DBTextarea } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/textarea.json';
import type { DBTextareaProps } from '../../../../../output/react/src/components/textarea/model';
import { getVariants } from '../data';

const handleChange = (evt) => {
	console.log('Change: ', evt);
};
const getTextarea = ({ value, variant }: DBTextareaProps) => (
	<DBTextarea
		onChange={handleChange}
		value={value}
		variant={variant}></DBTextarea>
);

const TextareaComponent = () => {
	return (
		<>
			<DefaultComponent
				title="DBTextarea"
				variants={getVariants(
					defaultComponentVariants,
					getTextarea
				)}></DefaultComponent>
		</>
	);
};

export default TextareaComponent;
