// manager card
const createManager = (manager) => `
<div class="col-4 mt-4 wholeCard">
    <div class="card h-100">
        <div class="card-header text-bg-primary">
            <h3>${manager.name}</h3>
        </div>
        <div class="card-body">
            <p>ID: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>`;

// engineer card
const createEngineer = (engineer) => `
<div class="col-4 mt-4 wholeCard">
    <div class="card h-100">
        <div class="card-header text-bg-primary">
            <h3>${engineer.name}</h3>
        </div>
        <div class="card-body">
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>`;

// intern card
const createIntern = (intern) => `
<div class="col-4 mt-4 wholeCard">
    <div class="card h-100">
        <div class="card-header text-bg-primary">
            <h3>${intern.name}</h3>
        </div>
        <div class="card-body">
            <p>ID: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>
    </div>
</div>`;

function createEmployeesPage(cardCreator) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link href="./styles.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1 class="head-text">Employees</h1>
        </header>
    
        <div class="container">
            <div class="row">
                ${cardCreator}
            </div>    
        </div>  
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
    </html>`
}

module.exports = {
    createEngineer,
    createIntern,
    createManager,
    createEmployeesPage
  };