import { getDay } from './getDay';
import { endOfMonth } from './endOfMonth';

export function daysInMonth(d: ReadonlyDate): number {
  return getDay(endOfMonth(d));
}
