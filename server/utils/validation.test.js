var expect = require('expect');
const {isRealString, isNameTaken} = require('./validation');
const {Users} = require('./users');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('   ');
    expect(res).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var res = isRealString('  bar  ');
    expect(res).toBe(true);
  });
});

describe('isTakenName', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Bar',
      room: 'Node Course'
    }];
  });

    it('shuold reject taken name', () => {
      var user = {
        name: 'Bar',
        id: '123',
        room: 'Node Course'
      };

      var res = isNameTaken(users, user.name);
      expect(res).toBe(true);
    });
});
