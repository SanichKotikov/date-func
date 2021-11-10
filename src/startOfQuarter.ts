import { FIRST_DAY_OF_MONTH, MONTHS_IN_QUARTER } from './constants';
import { getYear } from './getYear';
import { getMonth } from './getMonth';

export function startOfQuarter(d: ReadonlyDate): ReadonlyDate {
  return new Date(
    getYear(d),
    Math.floor(getMonth(d) / MONTHS_IN_QUARTER) * MONTHS_IN_QUARTER,
    FIRST_DAY_OF_MONTH,
    0, 0, 0, 0,
  );
}
