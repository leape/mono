import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBHeaderState, DBHeaderProps } from './model';
import classNames from 'classnames';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBHeader(props: DBHeaderProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBHeaderState>({
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<header
			ref={component}
			class={state.getClassNames('db-header', props.className)}
			role="banner">
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<Slot name="brand" />
			<div class="desktop-navigation">
				<Slot name="desktop-navigation" />
			</div>
			<div class="mobile-navigation">
				<Slot name="mobile-navigation" />
			</div>
			<div class="meta-navigation">
				<Slot name="meta-navigation" />
			</div>
			{props.children}
		</header>
	);
}
