declare global {
  type ReadonlyDate = Omit<Date,
    | 'setTime'
    | 'setMilliseconds'
    | 'setUTCMilliseconds'
    | 'setSeconds'
    | 'setUTCSeconds'
    | 'setMinutes'
    | 'setUTCMinutes'
    | 'setHours'
    | 'setUTCHours'
    | 'setDate'
    | 'setUTCDate'
    | 'setMonth'
    | 'setUTCMonth'
    | 'setFullYear'
    | 'setUTCFullYear'>;
}

export { getYear } from './getYear';
export { getMonth } from './getMonth';
export { getDay } from './getDay';
export { getWeekday } from './getWeekday';
export { startOfDay } from './startOfDay';
export { startOfMonth } from './startOfMonth';
export { endOfMonth } from './endOfMonth';
export { daysInMonth } from './daysInMonth';
export { dateToString } from './dateToString';
export { isSameDates } from './isSameDates';
