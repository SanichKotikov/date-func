import { MONTHS_IN_QUARTER } from './constants';
import { shiftDate } from './shiftDate';
import { startOfQuarter } from './startOfQuarter';

export function endOfQuarter(d: ReadonlyDate): ReadonlyDate {
  return shiftDate(startOfQuarter(d), {
    months: MONTHS_IN_QUARTER,
    seconds: -1,
  });
}
