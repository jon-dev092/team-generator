const Manager = require('../lib/manager.js');

test('test manager office number', () => {
    const test = new Manager('judge', 4, 'dredd@gmail.com', 7);

    expect(test.officeNumber).toBe(7)
})