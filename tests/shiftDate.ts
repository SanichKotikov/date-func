import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { dateToString, shiftDate } from '../src';

const date = new Date(2022, 2, 31, 0, 0, 0, 0);

test('shift years', () => {
  assert.equal(dateToString(shiftDate(date, { years: 1 })), '2023-03-31');
  assert.equal(dateToString(shiftDate(date, { years: -1 })), '2021-03-31');
});

test('shift months', () => {
  assert.equal(dateToString(shiftDate(date, { months: 1 })), '2022-04-30');
  assert.equal(dateToString(shiftDate(date, { months: -1 })), '2022-02-28');
});

test('shift weeks', () => {
  assert.equal(dateToString(shiftDate(date, { weeks: 1 })), '2022-04-07');
  assert.equal(dateToString(shiftDate(date, { weeks: -1 })), '2022-03-24');
});

test('shift days', () => {
  assert.equal(dateToString(shiftDate(date, { days: 10 })), '2022-04-10');
  assert.equal(dateToString(shiftDate(date, { days: -10 })), '2022-03-21');
});

test('shift several params', () => {
  assert.equal(dateToString(shiftDate(date, { months: 2, weeks: -1, days: 2 })), '2022-05-26');
  assert.equal(dateToString(shiftDate(date, { months: -1, weeks: 1, days: -5 })), '2022-03-02');
});

test.run();
