import { ErrorMessages } from 'src/app/uilib/note/error-messages';

export class BaseComponent {
	messages = ErrorMessages;
	loading: boolean;
	waiting: boolean;
}