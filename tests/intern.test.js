const Intern = require('../lib/intern')

test('test intern id', () => {
    const test = new Intern('django', 3, 'unchained@gmail.com', 'ucf coding');

    expect(test.getId()).toBe(3)
})