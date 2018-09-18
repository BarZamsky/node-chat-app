var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Bar';
    var text = 'Hey, how are you ?';
    var message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message).toMatchObject({from, text});
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Bar';
    var latitude = 32;
    var longitude = 34;
    var url = 'https://www.google.com/maps?q=32,34';
    var message  = generateLocationMessage(from, latitude, longitude);
    
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});
  });
});
