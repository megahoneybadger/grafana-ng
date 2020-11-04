import { AggrFunc, AggrFuncGroup } from '../../../../../metrics.m';

const timeSuggestions = ['1s', '10s', '1m', '5m', '10m', '15m', '1h']

export const menuItems: any[] = [
  { label: AggrFuncGroup[ 0 ], items: [ 
     { label: AggrFunc.Count },
     { label: AggrFunc.Distinct },
     { label: AggrFunc.Integral },
     { label: AggrFunc.Mean },
     { label: AggrFunc.Median },
     { label: AggrFunc.Mode },
     { label: AggrFunc.Sum },
     ] },
  { label: AggrFuncGroup[ 1 ], items: [ 
    { label: AggrFunc.Bottom, param: { value: '3' } },
    { label: AggrFunc.First },
    { label: AggrFunc.Last },
    { label: AggrFunc.Max },
    { label: AggrFunc.Min },
    { label: AggrFunc.Percentile, param: { value: '95' }  },
    { label: AggrFunc.Top, param: { value: '3' } },
    ] },
  { label: AggrFuncGroup[ 2 ], items: [ 
    { label: AggrFunc.Derivative,
      param: { value: timeSuggestions[ 1 ], suggestions: [...timeSuggestions] } },
    { label: AggrFunc.Spread  },
    { label: AggrFunc.NonNegativeDerivative,
       param: { value: timeSuggestions[ 1 ], suggestions: [...timeSuggestions] } },
    { label: AggrFunc.Difference },
    { label: AggrFunc.NonNegativeDifference },
    { label: AggrFunc.MovingAverage, param: { value: '10', suggestions: ['5', '10', '20', '30', '40'] } },
    { label: AggrFunc.CumulativeSum },
    { label: AggrFunc.Stddev },
    { label: AggrFunc.Elapsed, 
      param: { value: timeSuggestions[ 1 ], suggestions: [...timeSuggestions] } },
    ] },
//  { label: AggrFuncGroup[ 3 ], items: [ 
//     { label: AggrFunc.HoltWinters },
//     { label: AggrFunc.HoltWintersWithFit }
//     ] },
  { label: AggrFuncGroup[ 4 ], items: [
    { label: AggrFunc.Math, param: { value: ' / 100' } }
  ]  },
  { label: AggrFuncGroup[ 5 ], items: [
    { label: AggrFunc.Alias, param: { value: 'alias' } }
  ]  },
  { label: 'Field', items: [ { label: 'field' }] }
];
