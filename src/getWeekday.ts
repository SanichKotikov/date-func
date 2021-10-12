export function getWeekday(d: ReadonlyDate): number {
  return (d.getDay() + 6) % 7;
}
