const Employee = require('../lib/employee')

test('tests employee name', () => {
    const test = new Employee('johnny', 1, 'jonathan.perez0092@gmail.com');

    expect(test.getName()).toEqual('johnny')
})