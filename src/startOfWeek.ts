import { getYear } from './getYear';
import { getMonth } from './getMonth';
import { getDay } from './getDay';
import { getWeekday } from './getWeekday';

export function startOfWeek(d: ReadonlyDate): ReadonlyDate {
  return new Date(getYear(d), getMonth(d), getDay(d) - getWeekday(d), 0, 0, 0, 0);
}
