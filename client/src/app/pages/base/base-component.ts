import { ErrorMessages } from 'uilib';

export class BaseComponent {
	messages = ErrorMessages;
	loading: boolean;
	waiting: boolean;
}