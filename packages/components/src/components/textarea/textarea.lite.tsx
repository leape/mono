import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBTextareaState, DBTextareaProps } from './model';
import { uuid } from '../../utils';
import classNames from 'classnames';
import { DEFAULT_ID, DEFAULT_LABEL } from '../../shared/constants';
import { EventHandler } from 'react';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: [
			{ name: 'label', type: 'SingleLine.Text', required: true },
			{ name: 'placeholder', type: 'SingleLine.Text' },
			{ name: 'value', type: 'SingleLine.Text', onChange: 'value' }, // $event.target["value"|"checked"|...]
			{
				name: 'variant',
				type: 'DefaultVariant' // this is a custom type not provided by ms
			}
		]
	}
});

const DEFAULT_VALUES = {
	label: DEFAULT_LABEL,
	placeholder: ' '
};
export default function DBTextarea(props: DBTextareaProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	console.log('props: ', props);
	const state = useStore<DBTextareaState>({
		_value: '',
		_infomsg: 'HI!',
		_id: DEFAULT_ID,
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
		},
		handleChange: (event) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			// using controlled components for react forces us to use state for value
			state._value = event.target.value;
		},
		handleBlur: (event: any) => {},
		handleFocus: (event: any) => {}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		state._id = props.id ? props.id : 'textarea-' + uuid();

		if (props.value) {
			state._value = props.value;
		}
		if (props.infomsg) {
			state._infomsg = props.infomsg;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={component}
			class={state.getClassNames('db-textarea', props.className)}
			data-variant={props.variant}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<textarea
				id={state._id}
				onChange={(event) => state.handleChange(event)}
				value={state._value}
				rows="5"
				cols="33"
				placeholder={props.placeholder ?? DEFAULT_VALUES.placeholder}
			/>
			<label
				htmlFor={state._id}
				aria-hidden="true"
				id={state._id + '-label'}>
				<span>{props.label ?? DEFAULT_VALUES.label}</span>
			</label>
			<span class="description">{state._infomsg}</span>
		</div>
	);
}
