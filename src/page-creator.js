// Creates the page
const genTeam = team => {
    // Manager
    const genManager = manager => {
        return `
        <div class="card card-left">
            <div class="card-header">
                ${manager.getName()}
                <br>
                <p>
                    <i class="fas fa-star"></i>
                    Manager
                </p>
            </div>
            <div class="card-body">
                <div class="list-container">
                    <ul>
                        <li>ID: ${manager.getId()}</li>
                        <li>Email: ${manager.getEmail()}</li>
                        <li>Office Number: ${manager.getNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }

    // Engineer
    const genEngineer = engineer => {
        return `
        <div class="card card-left">
            <div class="card-header">
                ${engineer.getName()}
                <br>
                <p>
                    <i class="fas fa-briefcase"></i>
                    ENGINEER
                </p>
            </div>
            <div class="card-body">
                <div class="list-container">
                    <ul>
                        <li>ID: ${engineer.getId()}</li>
                        <li>Email: ${engineer.getEmail()}</li>
                        <li>GitHub: ${engineer.getGithub()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    // Intern
    const genIntern = intern => {
        return `
        <div class="card card-left">
            <div class="card-header">
                ${intern.getName()}
                <br>
                <p>
                    <i class="fas fa-graduation-cap"></i>
                    Intern
                </p>
            </div>
            <div class="card-body">
                <div class="list-container">
                    <ul>
                        <li>ID: ${intern.getId()}</li>
                        <li>Email: ${intern.getEmail()}</li>
                        <li>School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    // Creates empty array to push the html into
    const html = [];

    // Pushes filtered roles into the appropriate 
    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => genManager(manager)));
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => genEngineer(engineer)));
    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => genIntern(intern)));

    // Joins the html
    return html.join("");
}

// Entire page
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/5a4fb87ca9.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <div class="container">
            <header class="header">
                <h1>
                    Team Profile
                </h1>
            </header>
        
            <div class="container-showcase">
                <div class="row">
                ${genTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `
}