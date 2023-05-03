import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBRadioProps, DBRadioState } from './model';
import { uuid } from '../../utils';
import { DEFAULT_ID } from '../../../../shared/constants';
import classNames from 'classnames';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		hasDisabledProp: true,
		properties: []
	}
});

export default function DBRadio(props: DBRadioProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBRadioState>({
		initialized: false,
		_id: DEFAULT_ID,
		_checked: false,
		_isValid: undefined,

		handleChange: (event: any) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			state._checked = event.target?.checked;

			if (event.target?.validity?.valid != state._isValid) {
				state._isValid = event.target?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!event.target?.validity?.valid);
				}
			}
		},
		handleBlur: (event: any) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event: any) => {
			if (props.onFocus) {
				props.onFocus(event);
			}

			if (props.focus) {
				props.focus(event);
			}
		},
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
		}
	});

	onMount(() => {
		state.initialized = true;
		state._id = props.id ? props.id : 'radio-' + uuid();

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (props.checked && state.initialized && document && state._id) {
			const radioElement = document?.getElementById(
				state._id
			) as HTMLInputElement;
			if (radioElement) {
				radioElement.checked = true;
				state.initialized = false;
			}
		}
	}, [state.initialized]);

	return (
		<>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<input
				ref={component}
				type="radio"
				class={state.getClassNames('db-radio', props.className)}
				id={state._id}
				name={props.name}
				checked={props.checked}
				disabled={props.disabled}
				aria-describedby={props.describedbyid}
				aria-invalid={props.invalid}
				data-size={props.size}
				required={props.required}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}
			/>
			<label htmlFor={state._id}>
				<Show when={props.label}>
					<span>{props.label}</span>
				</Show>
				{props.children}
			</label>
		</>
	);
}
