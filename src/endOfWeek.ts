import { DAYS_IN_WEEK } from './constants';
import { shiftDate } from './shiftDate';
import { startOfWeek } from './startOfWeek';

export function endOfWeek(d: ReadonlyDate): ReadonlyDate {
  return shiftDate(startOfWeek(d), {
    days: DAYS_IN_WEEK - 1,
    hours: 24,
    seconds: -1,
  });
}
