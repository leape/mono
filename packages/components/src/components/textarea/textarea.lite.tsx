import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBTextareaState, DBTextareaProps } from './model';
import { uuid } from '../../utils';
import classNames from 'classnames';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBTextarea(props: DBTextareaProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBTextareaState>({
		_value: '',
		_id: DEFAULT_ID,
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
		},
		handleChange: (event: any) => {
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
			/>
		</div>
	);
}
