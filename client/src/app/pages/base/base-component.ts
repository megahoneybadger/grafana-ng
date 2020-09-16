import { ErrorMessages } from 'uilib2';

export class BaseComponent {
	messages = ErrorMessages;
	loading: boolean;
	waiting: boolean;
}