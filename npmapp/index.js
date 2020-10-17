const _ = require('lodash');

const numbers = [12, 22, 44, 343, 3];

_.each(numbers, number => {
  console.log(number);
});
