import {
	GlobalProps,
	GlobalState,
	ChangeEventProps,
	FocusEventProps,
	FormProps,
	ChangeEventState,
	FocusEventState,
	FormState,
	DefaultVariantProps
} from '../../shared/model';

export interface DBTextareaDefaultProps {
	variant?: DefaultVariantProps;
	infomsg?: string;
}

export type DBTextareaProps = DBTextareaDefaultProps &
	GlobalProps &
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
