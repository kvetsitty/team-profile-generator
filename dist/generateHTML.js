function htmlGenerator(teamArr) {

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
<header>
     <div class="header-text">
         <h1>My Team</h1>
     </div>
 </header>

    <div class="container">
        ${teamArr.map(employee => {
                if (employee.getRole() === 'Manager') {
                    return `<div class="card employee-card" style="width: 18rem;">
                    <div class="card-head">
                        <h1 class="card-title">${employee.name}</h1>
                        <h2 class="card-subtitle mb-2 ">Manager</h2>
                    </div>
                    <div class="card-body">
                        <div class="body-info">
                            <p class="card-text">ID: ${employee.id}</p>
                            <p class="card-text">Email: ${employee.email}</p>
                            <p class="card-text">Office Number: ${employee.officeNumber}</p>
                        </div>
                    </div>
                </div>`
                } else if (employee.getRole() === 'Engineer'){
                    return `<div class="card employee-card" style="width: 18rem;">
                    <div class="card-head">
                        <h1 class="card-title">${employee.name}</h1>
                        <h2 class="card-subtitle mb-2 ">Engineer</h2>
                    </div>
                    <div class="card-body">
                        <div class="body-info">
                            <p class="card-text">ID: ${employee.id}</p>
                            <p class="card-text">Email: ${employee.email}</p>
                            <p class="card-text">GitHub username: ${employee.github}</p>
                        </div>
                    </div>
                </div>`
                } else if (employee.getRole() === 'Intern') {
                    return `<div class="card employee-card" style="width: 18rem;">
                    <div class="card-head">
                        <h1 class="card-title">${employee.name}</h1>
                        <h2 class="card-subtitle mb-2 ">Intern</h2>
                    </div>
                    <div class="card-body">
                        <div class="body-info">
                            <p class="card-text">ID: ${employee.id}</p>
                            <p class="card-text">Email: ${employee.email}</p>
                            <p class="card-text">School: ${employee.school}</p>
                        </div>
                    </div>
                </div>`
                }
        }
        )}
    </div>
</body>
</html>`

return html;
}

module.exports = htmlGenerator;