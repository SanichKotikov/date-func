export function getWeekday(d: ReadonlyDate, fromMonday?: boolean): number {
  return fromMonday ? (d.getDay() + 6) % 7 : d.getDay();
}
