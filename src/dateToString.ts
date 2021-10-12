import { getYear } from './getYear';
import { getMonth } from './getMonth';
import { getDay } from './getDay';

function prefix(num: number): string {
  return num < 10 ? `0${num}` : num.toString();
}

export function dateToString(d: ReadonlyDate): string {
  return [getYear(d), prefix(getMonth(d) + 1), prefix(getDay(d))].join('-');
}
