const Engineer = require('../lib/engineer');

test('tests engineer name', () => {
    const test = new Engineer('alejandra', 2, 'alemiret123@gmail.com', 'AleMiret')

    expect(test.getName()).toBe('alejandra')
})