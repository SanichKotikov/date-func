import { WEEK } from './constants';

export enum Period {
  years = 'years',
  months = 'months',
  weeks = 'weeks',
  days = 'days',
  hours = 'hours',
  minutes = 'minutes',
  seconds = 'seconds',
}

export type Duration = Partial<Record<Period, number>>;

export function shiftDate(d: ReadonlyDate, duration: Readonly<Duration>): ReadonlyDate {
  return new Date(
    d.getFullYear() + (duration.years || 0),
    d.getMonth() + (duration.months || 0),
    d.getDate() + (duration.days || 0),
    d.getHours() + (duration.hours || 0),
    d.getMinutes() + (duration.minutes || 0),
    d.getSeconds() + (duration.seconds || 0),
    d.getMilliseconds() + (duration.weeks || 0) * WEEK,
  );
}
