import { DAYS_IN_WEEK } from './constants';

export function getWeekday(d: ReadonlyDate, fromMonday?: boolean): number {
  return fromMonday ? (d.getDay() + 6) % DAYS_IN_WEEK : d.getDay();
}
