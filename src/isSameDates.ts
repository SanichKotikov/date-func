import { dateToString } from './dateToString';

export function isSameDates(a: ReadonlyDate, b: ReadonlyDate): boolean {
  return dateToString(a) === dateToString(b);
}
