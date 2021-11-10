import { getYear } from './getYear';
import { getMonth } from './getMonth';
import { getDay } from './getDay';

export function endOfDay(d: ReadonlyDate): ReadonlyDate {
  return new Date(getYear(d), getMonth(d), getDay(d) + 1, 0, 0, 0, -1);
}
