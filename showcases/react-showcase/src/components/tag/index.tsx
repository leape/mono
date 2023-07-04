import {
	DBButton,
	DBCheckbox,
	DBLink,
	DBRadio,
	DBTag
} from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/tag.json';
import { type DBTagProps } from '../../../../../output/react/src/components/tag/model';
import { getVariants } from '../data';

const getTag = ({
	variant,
	disabled,
	children,
	icon,
	overflow,
	noText,
	behaviour,
	type,
	removeButton,
	checked,
	component
}: DBTagProps & {
	checked?: boolean;
	component?: 'button' | 'link' | 'radio' | 'checkbox';
}) => (
	<DBTag
		variant={variant}
		disabled={disabled}
		icon={icon}
		noText={noText}
		behaviour={behaviour}
		type={type}
		overflow={overflow}
		removeButton={removeButton}
		onRemove={() => {
			// eslint-disable-next-line no-alert
			alert(children.toString());
		}}>
		{component === 'button' && <DBButton>{children}</DBButton>}
		{component === 'link' && <DBLink href="#">{children}</DBLink>}
		{component === 'checkbox' && (
			<DBCheckbox checked={checked}>{children}</DBCheckbox>
		)}
		{component === 'radio' && (
			<DBRadio checked={checked} name="radio">
				{children}
			</DBRadio>
		)}
		{!component && <span>{children}</span>}
	</DBTag>
);

const TagComponent = () => {
	return (
		<DefaultComponent
			title="DBTag"
			variants={getVariants(
				defaultComponentVariants,
				getTag
			)}></DefaultComponent>
	);
};

export default TagComponent;