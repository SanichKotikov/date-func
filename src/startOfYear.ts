import { FIRST_DAY_OF_MONTH } from './constants';
import { getYear } from './getYear';

export function startOfYear(d: ReadonlyDate): ReadonlyDate {
  return new Date(getYear(d), 0, FIRST_DAY_OF_MONTH, 0, 0, 0, 0);
}
