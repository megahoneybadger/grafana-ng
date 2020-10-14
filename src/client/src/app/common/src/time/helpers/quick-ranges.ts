import * as _ from 'lodash';

export const quickRanges = [
	{ from: 'now/d', to: 'now/d', display: 'Today', section: 2 },
	{ from: 'now/d', to: 'now', display: 'Today so far', section: 2 },
	{ from: 'now/w', to: 'now/w', display: 'This week', section: 2 },
	{ from: 'now/w', to: 'now', display: 'This week so far', section: 2 },
	{ from: 'now/M', to: 'now/M', display: 'This month', section: 2 },
	{ from: 'now/M', to: 'now', display: 'This month so far', section: 2 },
	{ from: 'now/y', to: 'now/y', display: 'This year', section: 2 },
	{ from: 'now/y', to: 'now', display: 'This year so far', section: 2 },

	{ from: 'now-1d/d', to: 'now-1d/d', display: 'Yesterday', section: 1 },
	{ from: 'now-2d/d', to: 'now-2d/d', display: 'Day before yesterday', section: 1 },
	{ from: 'now-7d/d', to: 'now-7d/d', display: 'This day last week', section: 1, },
	{ from: 'now-1w/w', to: 'now-1w/w', display: 'Previous week', section: 1 },
	{ from: 'now-1M/M', to: 'now-1M/M', display: 'Previous month', section: 1 },
	{ from: 'now-1y/y', to: 'now-1y/y', display: 'Previous year', section: 1 },

	{ from: 'now-5m', to: 'now', display: 'Last 5 minutes', section: 3 },
	{ from: 'now-15m', to: 'now', display: 'Last 15 minutes', section: 3 },
	{ from: 'now-30m', to: 'now', display: 'Last 30 minutes', section: 3 },
	{ from: 'now-1h', to: 'now', display: 'Last 1 hour', section: 3 },
	{ from: 'now-3h', to: 'now', display: 'Last 3 hours', section: 3 },
	{ from: 'now-6h', to: 'now', display: 'Last 6 hours', section: 3 },
	{ from: 'now-12h', to: 'now', display: 'Last 12 hours', section: 3 },
	{ from: 'now-24h', to: 'now', display: 'Last 24 hours', section: 3 },
	{ from: 'now-2d', to: 'now', display: 'Last 2 days', section: 0 },
	{ from: 'now-7d', to: 'now', display: 'Last 7 days', section: 0 },
	{ from: 'now-30d', to: 'now', display: 'Last 30 days', section: 0 },
	{ from: 'now-90d', to: 'now', display: 'Last 90 days', section: 0 },
	{ from: 'now-6M', to: 'now', display: 'Last 6 months', section: 0 },
	{ from: 'now-1y', to: 'now', display: 'Last 1 year', section: 0 },
	{ from: 'now-2y', to: 'now', display: 'Last 2 years', section: 0 },
	{ from: 'now-5y', to: 'now', display: 'Last 5 years', section: 0 },
];


export function getQuickRanges(currentDisplay?: any) {
	return _.groupBy(quickRanges, (option: any) => {
		option.active = option.display === currentDisplay;
		return option.section;
	});
}