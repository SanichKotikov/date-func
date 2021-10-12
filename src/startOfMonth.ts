import { getYear } from './getYear';
import { getMonth } from './getMonth';
import { FIRST_DAY_OF_MONTH } from './constants';

export function startOfMonth(d: ReadonlyDate): ReadonlyDate {
  return new Date(getYear(d), getMonth(d), FIRST_DAY_OF_MONTH, 0, 0, 0, 0);
}
