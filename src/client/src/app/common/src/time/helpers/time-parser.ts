import { DateTime, RawTimeRange,	DateTimeInput, FormatInput} from '../time.m';
import { ISO_8601 } from 'moment';
import { quickRanges } from './quick-ranges';
import * as _ from 'lodash';
import * as moment_ from 'moment';
import { Timezone } from '../../settings/settings.m';

const rangeIndex: any = {};
const moment = moment_;

_.each(quickRanges, (frame: any) => {
	rangeIndex[frame.from + ' to ' + frame.to] = frame;
});

export class TimeRangeParser {
	public static readonly DEFAULT_DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
	public static readonly MS_DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss.SSS';

	private static readonly units = ['y', 'M', 'w', 'd', 'h', 'm', 's'];

	private static readonly spans: { [key: string]: { display: string; section?: number } } = {
		s: { display: 'second' },
		m: { display: 'minute' },
		h: { display: 'hour' },
		d: { display: 'day' },
		w: { display: 'week' },
		M: { display: 'month' },
		y: { display: 'year' },
	};

	/**
	 * Parses different types input to a moment instance. There is a specific formatting language that can be used
	 * if text arg is string. See unit tests for examples.
	 * @param text
	 * @param roundUp See parseDateMath function.
	 * @param timezone Only string 'utc' is acceptable here, for anything else, local timezone is used.
	 */
	static toDateTime(text: string | DateTime | Date, roundUp?: boolean, timezone?: Timezone)
		: DateTime | undefined | any {
		if (!text) {
			return undefined;
		}

		//console.log( "inside parser" );

		if (typeof text !== 'string') {
			if (this.isDateTime(text)) {
				return text;
			}
			if (_.isDate(text)) {
				return this.dateTime(text);
			}
			// We got some non string which is not a moment nor Date. TS should be able to check for that but not always.
			return undefined;
		} else {
			let time;
			let mathString = '';
			let index;
			let parseString;

			if (text.substring(0, 3) === 'now') {
				time = this.dateTimeForTimeZone(timezone);
				mathString = text.substring('now'.length);
			} else {
				index = text.indexOf('||');
				if (index === -1) {
					parseString = text;
					mathString = ''; // nothing else
				} else {
					parseString = text.substring(0, index);
					mathString = text.substring(index + 2);
				}
				// We're going to just require ISO8601 timestamps, k?
				time = this.dateTime(parseString, ISO_8601);
			}

			if (!mathString.length) {
				return time;
			}

			return TimeRangeParser.shiftDateTime(mathString, time, roundUp);
		}
	}

	static toRange(expr: any) {
		const isLast = expr.indexOf('+') !== 0;
		if (expr.indexOf('now') === -1) {
			expr = (isLast ? 'now-' : 'now') + expr;
		}

		let opt = rangeIndex[expr + ' to now'];
		if (opt) {
			return opt;
		}

		if (isLast) {
			opt = { from: expr, to: 'now' };
		} else {
			opt = { from: 'now', to: expr };
		}

		const parts = /^now([-+])(\d+)(\w)/.exec(expr);
		if (parts) {
			const unit = parts[3];
			const amount = parseInt(parts[2], 10);
			const span = this.spans[unit];
			if (span) {
				opt.display = isLast ? 'Last ' : 'Next ';
				opt.display += amount + ' ' + span.display;
				opt.section = span.section;
				if (amount > 1) {
					opt.display += 's';
				}
			}
		} else {
			opt.display = opt.from + ' to ' + opt.to;
			opt.invalid = true;
		}

		return opt;
	}

	static toDateTimeFormatString(text: string | DateTime | Date,
		roundUp?: boolean, timezone?: Timezone): DateTime | undefined | any {

		return TimeRangeParser
			.toDateTime(text, roundUp, timezone)
			.format(TimeRangeParser.DEFAULT_DATE_TIME_FORMAT);
	}

	/**
	* Checks if text is a valid date which in this context means that it is either a Moment instance or it can be parsed
	* by parse function. See parse function to see what is considered acceptable.
	* @param text
	*/
	static isValid(text: string | DateTime): boolean {
		const date = this.toDateTime(text);
		if (!date) {
			return false;
		}

		if (this.isDateTime(date)) {
			return date.isValid();
		}

		return false;
	}

	static isMathString(text: string | DateTime | Date): boolean {
		if (!text) {
			return false;
		}

		return (typeof text === 'string' && (text.substring(0, 3) === 'now' || text.includes('||')))
	}

	/**
	 * Parses math part of the time string and shifts supplied time according to that math. See unit tests for examples.
	 * @param mathString
	 * @param time
	 * @param roundUp If true it will round the time to endOf time unit, otherwise to startOf time unit.
	 */
	static shiftDateTime(mathString: string, time: any, roundUp?: boolean): DateTime | undefined {
		const strippedMathString = mathString.replace(/\s/g, '');
		const dateTime = time;
		let i = 0;
		const len = strippedMathString.length;

		while (i < len) {
			const c = strippedMathString.charAt(i++);
			let type;
			let num;
			let unit;

			if (c === '/') {
				type = 0;
			} else if (c === '+') {
				type = 1;
			} else if (c === '-') {
				type = 2;
			} else {
				return undefined;
			}

			if (isNaN(parseInt(strippedMathString.charAt(i), 10))) {
				num = 1;
			} else if (strippedMathString.length === 2) {
				num = strippedMathString.charAt(i);
			} else {
				const numFrom = i;
				while (!isNaN(parseInt(strippedMathString.charAt(i), 10))) {
					i++;
					if (i > 10) {
						return undefined;
					}
				}
				num = parseInt(strippedMathString.substring(numFrom, i), 10);
			}

			if (type === 0) {
				// rounding is only allowed on whole, single, units (eg M or 1M, not 0.5M or 2M)
				if (num !== 1) {
					return undefined;
				}
			}
			unit = strippedMathString.charAt(i++);

			if (!_.includes(this.units, unit)) {
				return undefined;
			} else {
				if (type === 0) {
					if (roundUp) {
						dateTime.endOf(unit);
					} else {
						dateTime.startOf(unit);
					}
				} else if (type === 1) {
					dateTime.add(num, unit);
				} else if (type === 2) {
					dateTime.subtract(num, unit);
				}
			}
		}
		return dateTime;
	}

	static shiftRange(time: RawTimeRange, timezone: Timezone, adjShift: string): RawTimeRange {
		let tf = time.from;
		let tt = time.to;

		let shiftedAbsTime = `now-${adjShift}`;
		
		let shiftedAbsTimeInMs = TimeRangeParser.toDateTime(shiftedAbsTime).valueOf();
		let nowInMs = moment().valueOf();
		let shift = nowInMs - shiftedAbsTimeInMs;

		const tfCopy = moment( TimeRangeParser.toDateTime(tf, false, timezone ));
		tfCopy.subtract(shift, 'ms')

		const ttCopy = moment( TimeRangeParser.toDateTime(tt, true, timezone) );
		ttCopy.subtract(shift, 'ms')

		return {
			from: <DateTime>tfCopy,
			to: <DateTime>ttCopy
		}
	}

	static isAbsTimeRange(range: RawTimeRange): boolean {
		if (!range) {
			return false;
		}

		return (!TimeRangeParser.isMathString(range.from)) ||
			(!TimeRangeParser.isMathString(range.to));
	}

	static getOverriddenRelativeRange(from: string): RawTimeRange {
		return {
			from: `now-${from}`,
			to: 'now'
		}
	}


	static isValidTimeSpan = (value: string) => {
		if (value.indexOf('$') === 0 || value.indexOf('+$') === 0) {
			return true;
		}

		const info = TimeRangeParser.toRange(value);
		return info.invalid !== true;
	};

	static formatDate(date: any, tz?: Timezone) {
		return ( tz == Timezone.utc ) ?
			moment.utc( date ).format(this.DEFAULT_DATE_TIME_FORMAT) :
			moment( date ).format(this.DEFAULT_DATE_TIME_FORMAT)
	}

	static isDateTime(value: any) {
		return moment.isMoment(value);
	};

	private static toUtc(input?: DateTimeInput, formatInput?: FormatInput): DateTime {
		return moment.utc(input as moment.MomentInput, formatInput) as DateTime;
	};

	private static dateTime(input?: DateTimeInput, formatInput?: FormatInput): DateTime {
		return moment(input as moment.MomentInput, formatInput) as DateTime;
	};

	private static dateTimeForTimeZone(timezone?: Timezone, input?: DateTimeInput, formatInput?: FormatInput): DateTime {
		if (timezone === Timezone.utc) {
			return this.toUtc(input, formatInput);
		}

		return this.dateTime(input, formatInput);
	};
}
















