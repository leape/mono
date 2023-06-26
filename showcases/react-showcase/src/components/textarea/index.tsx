import { DBTextarea } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/textarea.json';
import type { DBTextareaProps } from '../../../../../output/react/src/components/textarea/model';
import { getVariants } from '../data';

const handleChange = (evt) => {
	console.log('Change: ', evt);
};
const getTextarea = ({
	value,
	variant,
	infomsg,
	label,
	placeholder,
	cols,
	rows,
	disabled
}: DBTextareaProps) => (
	<DBTextarea
		cols={cols}
		infomsg={infomsg}
		label={label}
		onChange={handleChange}
		placeholder={placeholder}
		rows={rows}
		value={value}
		disabled={disabled}
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
