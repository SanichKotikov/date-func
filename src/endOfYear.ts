import { FIRST_DAY_OF_MONTH } from './constants';
import { getYear } from './getYear';

export function endOfYear(d: ReadonlyDate): ReadonlyDate {
  return new Date(getYear(d) + 1, 0, FIRST_DAY_OF_MONTH, 0, 0, 0, -1);
}
