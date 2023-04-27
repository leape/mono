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
}

export type DBTextareaProps = DBTextareaDefaultProps &
	GlobalProps &
	ChangeEventProps &
	FocusEventProps &
	FormProps &
	DefaultVariantProps;

export interface DBTextareaDefaultState {}

export type DBTextareaState = DBTextareaDefaultState &
	GlobalState &
	ChangeEventState &
	FocusEventState &
	FormState;
