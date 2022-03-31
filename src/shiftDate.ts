import { getYear } from './getYear';
import { getMonth } from './getMonth';
import { getDay } from './getDay';
import { daysInMonth } from './daysInMonth';
import { FIRST_DAY_OF_MONTH, WEEK } from './constants';

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
  const year = getYear(d) + (duration.years || 0);
  const month = getMonth(d) + (duration.months || 0);
  let day = getDay(d);

  if (duration.years || duration.months) {
    const target = new Date(year, month, FIRST_DAY_OF_MONTH, 0, 0, 0);
    day = Math.min(day, daysInMonth(target));
  }

  return new Date(
    year,
    month,
    day + (duration.days || 0),
    d.getHours() + (duration.hours || 0),
    d.getMinutes() + (duration.minutes || 0),
    d.getSeconds() + (duration.seconds || 0),
    d.getMilliseconds() + (duration.weeks || 0) * WEEK,
  );
}
