const { createEngineer, createIntern, createManager, createEmployeesPage } = require('./html-temp');

const injectHTML = (data) => {
    const roleCreator = {
        Manager: createManager,
        Engineer: createEngineer,
        Intern: createIntern,
    };

    const createCards = data.map(employee => {
        const createEmployeeRole = employee.getRole();
        const cardCreator = roleCreator[createEmployeeRole];
        return cardCreator(employee);
    }).join('');

    const createEmployees = createEmployeesPage(createCards);
    return createEmployees;
};

module.exports = injectHTML;
