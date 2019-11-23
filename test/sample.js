/* eslint-disable no-multi-spaces, key-spacing, array-bracket-spacing, sort-keys, no-console, indent, max-len */
const moment       = require('moment-timezone');

const OpeningTimes = require('../OpeningTimes');

const dateToCheck  = moment('2020-12-31 23:59:59');

const openingTimes = {
  sunday:    [ { label: 'All Day1', opens: '09:00', closes: '17:30' }],
  monday:    [ { label: 'All Day2', opens: '08:00', closes: '11:00' },
               { label: 'All Day3', opens: '13:00', closes: '15:00' },
               { label: 'All Day4', opens: '17:00', closes: '19:00' } ],
  tuesday:   [ { label: 'All Day5', opens: '09:00', closes: '17:30' } ],
  wednesday: [ { label: 'All Day6', opens: '09:00', closes: '12:00' },
               { label: 'All Day7', opens: '14:00', closes: '18:00' } ],
  thursday:  [ { label: null, opens: '09:00', closes: '17:00' },
               { label: 'All Day9', opens: '18:00', closes: '21:00' } ],
  friday:    [ { label: 'All Day10', opens: '09:00', closes: '17:30' } ],
  saturday:  [ { label: 'All Day11', opens: '09:00', closes: '17:30' } ],
};

const openingTimesMoment = new OpeningTimes(openingTimes, 'Indian/Christmas');

const status = openingTimesMoment.getStatus(dateToCheck, { next: true });
console.log('dateToCheck:status:', status);
