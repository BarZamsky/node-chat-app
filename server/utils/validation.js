var {Users} = require('./users');

var isRealString = (str) => {
  return typeof str === 'string' && str.trim().length > 0;
};

var isNameTaken = (users, name) => {
  if (users.users.filter((user) => user.name === name)[0]) {
    return true;
  } else {
    return false;
  }
};

module.exports = {isRealString, isNameTaken};
