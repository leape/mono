import {
	GlobalProps,
	GlobalState,
	ChangeEventProps,
	FocusEventProps,
	FormProps,
	ChangeEventState,
	FocusEventState,
	FormState,
	DefaultVariantProps,
	GlobalTextProps
} from '../../shared/model';

export interface DBTextareaDefaultProps {
	variant?: DefaultVariantProps;
	infomsg?: string;
	rows?: number;
	cols?: number;
}

export type DBTextareaProps = DBTextareaDefaultProps &
	GlobalProps &
	GlobalTextProps &
	ChangeEventProps &
	FocusEventProps &
	FormProps &
	DefaultVariantProps;

export interface DBTextareaDefaultState {
	_infomsg: string;
}

export type DBTextareaState = DBTextareaDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState &
	FormState;
