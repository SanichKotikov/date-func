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
export { startOfWeek } from './startOfWeek';
export { startOfMonth } from './startOfMonth';
export { startOfQuarter } from './startOfQuarter';
export { startOfYear } from './startOfYear';
export { endOfDay } from './endOfDay';
export { endOfWeek } from './endOfWeek';
export { endOfMonth } from './endOfMonth';
export { endOfQuarter } from './endOfQuarter';
export { endOfYear } from './endOfYear';
export { daysInMonth } from './daysInMonth';
export { dateToString } from './dateToString';
export { isSameDates } from './isSameDates';
export { shiftDate } from './shiftDate';
