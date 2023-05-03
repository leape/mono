import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBIcon } from '../icon';
import { DBInfotextState, DBInfotextProps } from './model';
import { DefaultVariantsIcon } from '../../../../shared/model';
import classNames from 'classnames';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBInfotext(props: DBInfotextProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBInfotextState>({
		getIcon: (icon?: string, variant?: string) => {
			return icon || (variant && DefaultVariantsIcon[variant]) || 'info';
		},
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
		}
	});
	// jscpd:ignore-end

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	// TODO: Check if this should be a div or a span
	return (
		<span
			ref={component}
			class={state.getClassNames('db-infotext', props.className)}
			title={props.title}
			data-variant={props.variant}
			data-size={props.size}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<Show when={props.size !== 'small'}>
				<DBIcon
					icon={state.getIcon(props.icon, props.variant)}></DBIcon>
			</Show>
			{props.children}
		</span>
	);
}
