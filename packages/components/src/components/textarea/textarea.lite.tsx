import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBTextareaState, DBTextareaProps } from './model';
import { uuid } from '../../utils';
import { cls } from '../../utils';
import { DEFAULT_ID, DEFAULT_LABEL } from '../../shared/constants';
import { EventHandler } from 'react';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		hasDisabledProp: true,
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

// const DEFAULT_VALUES = {
// 	label: DEFAULT_LABEL,
// 	placeholder: ' ',
// 	rows: 2,
// 	cols: 33
// };
export default function DBTextarea(props: DBTextareaProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	console.log('props: ', props);
	const state = useStore<DBTextareaState>({
		_value: '',
		_infomsg: 'HI!',
		_id: DEFAULT_ID,
		defaultValues: {
			label: DEFAULT_LABEL,
			placeholder: ' ',
			rows: '2',
			cols: '33'
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
			class={cls('db-input', props.className)}
			data-variant={props.variant}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<textarea
				id={state._id}
				disabled={props.disabled}
				onChange={(event) => state.handleChange(event)}
				value={state._value}
				rows={props.rows ?? state.defaultValues.rows}
				cols={props.cols ?? state.defaultValues.cols}
				placeholder={
					props.placeholder ?? state.defaultValues.placeholder
				}
			/>
			<label
				htmlFor={state._id}
				aria-hidden="true"
				id={state._id + '-label'}>
				<span>{props.label ?? state.defaultValues.label}</span>
			</label>
			<span class="description">{state._infomsg}</span>
		</div>
	);
}
