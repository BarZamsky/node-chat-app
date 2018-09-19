const moment = require('moment');

var date = moment();
// date.add(1,'year').subtruct(9, 'months');
console.log(date.format('MMM Do, YYYY, h:mm a'));

// new Date().getTime() ==
// var something = moment().valueOf();

var createdAt = 1234;
var date1 = moment(createdAt);
console.log(date1.format('MMM Do, YYYY, h:mm a'));
