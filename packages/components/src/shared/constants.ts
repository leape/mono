export const DEFAULT_ID =
	'ID_WILL_BE_OVERWRITTEN_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARENT_INITIALIZING_IT_IN_THE_FRONTEND';
export const DEFAULT_LABEL = 'LABEL SHOULD BE SET';

export const TONALITY_CONST = 'tonality';
export const COLOR_CONST = 'color';

export enum TONALITY {
	'FUNCTIONAL' = 'functional',
	'REGULAR' = 'regular',
	'EXPRESSIVE' = 'expressive'
}
export const TONALITIES: TONALITY[] = Object.entries(TONALITY).map(
	([, value]) => value
);

export enum COLOR {
	'NEUTRAL_0' = 'neutral-0',
	'NEUTRAL_1' = 'neutral-1',
	'NEUTRAL_2' = 'neutral-2',
	'NEUTRAL_3' = 'neutral-3',
	'NEUTRAL_4' = 'neutral-4',
	'NEUTRAL_TRANSPARENT_FULL' = 'neutral-transparent-full',
	'NEUTRAL_TRANSPARENT_SEMI' = 'neutral-transparent-semi',
	'PRIMARY' = 'primary',
	'PRIMARY_TRANSPARENT_FULL' = 'primary-transparent-full',
	'PRIMARY_TRANSPARENT_SEMI' = 'primary-transparent-semi',
	'SECONDARY' = 'secondary',
	'SECONDARY_TRANSPARENT_FULL' = 'secondary-transparent-full',
	'SECONDARY_TRANSPARENT_SEMI' = 'secondary-transparent-semi',
	'SUCCESSFUL' = 'successful',
	'SUCCESSFUL_TRANSPARENT_FULL' = 'successful-transparent-full',
	'SUCCESSFUL_TRANSPARENT_SEMI' = 'successful-transparent-semi',
	'CRITICAL' = 'critical',
	'CRITICAL_TRANSPARENT_Full' = 'critical-transparent-full',
	'CRITICAL_TRANSPARENT_SEMI' = 'critical-transparent-semi',
	'WARNING' = 'warning',
	'WARNING_TRANSPARENT_FULL' = 'warning-transparent-full',
	'WARNING_TRANSPARENT_SEMI' = 'warning-transparent-semi',
	'INFORMATIONAL' = 'informational',
	'INFORMATIONAL_TRANSPARENT_FULL' = 'informational-transparent-full',
	'INFORMATIONAL_TRANSPARENT_SEMI' = 'informational-transparent-semi'
}

export const COLORS: COLOR[] = Object.entries(COLOR).map(([, value]) => value);

export enum VARIANT {
	'CRITICAL' = 'critical',
	'INFORMATIONAL' = 'informational',
	'WARNING' = 'warning',
	'SUCCESSFUL' = 'successful'
}

export const VARIANTS: VARIANT[] = Object.entries(VARIANT).map(
	([, value]) => value
);

export const TESTING_VIEWPORTS = [
	{ name: 'desktop', width: 1920, height: 1280 },
	{ name: 'tablet', width: 768, height: 1024 },
	{ name: 'mobile', width: 390, height: 884 }
];