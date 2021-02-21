// Pulls in classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Pulls in required packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Pulls in the html creator
const render = require("./src/page-creator");

// Creates array for members to be pushed into
const membersList = [];

// Creates array for IDs to be pushed into
const idList = [];

// MANAGERS PROMPTS
const genManager = () => {
    console.log("=======================================");
    console.log("========== Create your team! ==========");
    console.log("=======================================");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter manager's name: ",
            validate: input => {
                if(input !== "") {
                    return true;
                }
                return "A character is needed to continue!";
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter manager's ID#: ",
            validate: input => {
                if(isNaN(input)) {
                    return "Please enter a numerical number!";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter manager's Email: ",
            validate: input => {
                if(input.includes("@") && input.includes(".")) {
                    return true;
                }
                return "Please enter a valid email address!";
            }
        },
        {
            type: "input",
            name: "managerNumber",
            message: "Enter manager's number: ",
            validate: input => {
                const pass = input.match(/^[1-9]\d*$/);
                if(pass) {
                    return true;
                }
                return "Please enter a valid phone number!";
            }
        }
    ]).then(input => {
        const manager = new Manager(input.managerName, input.managerId, input.managerEmail, input.managerNumber);
        membersList.push(manager);
        idList.push(input.managerId);
        genTeam();
    })
}

// ENGINEER PROMPTS
const genEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter engineer's name: ",
            validate: input => {
                if(input !== "") {
                    return true;
                }
                return "Please enter a character to continue!";
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "Enter engineer's ID#: ",
            validate: input => {
                if(isNaN(input)) {
                    return "Please enter a numerical number!";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter engineer's Email: ",
            validate: input => {
                if(input.includes("@") && input.includes(".")) {
                    return true;
                }
                return "Please enter a valid email address!";
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Enter engineer's GitHub username: ",
            validate: input => {
                if(input !== "") {
                    return true;
                }
                return "Please enter a character to continue!";
            }
        }
    ]).then(input => {
        const engineer = new Engineer(input.engineerName, input.engineerId, input.engineerEmail, input.engineerGithub);
        membersList.push(engineer);
        idList.push(input.engineerId);
        genTeam();
    })
}

// INTERN PROMPTS
const genIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter intern's name: ",
            validate: input => {
                if(input !== "") {
                    return true;
                }
                return "Please enter a character to continue!";
            }
        },
        {
            type: "input",
            name: "internId",
            message: "Enter intern's ID#: ",
            validate: input => {
                if(isNaN(input)) {
                    return "Please enter a numerical number!";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter intern's Email: ",
            validate: input => {
                if(input.includes("@") && input.includes(".")) {
                    return true;
                }
                return "Please enter a valid email address!";
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "Enter intern's school: ",
            validate: input => {
                if(input !== "") {
                    return true;
                }
                return "Please enter a character to continue!";
            }
        }
    ]).then(input => {
        const intern = new Intern(input.internName, input.internId, input.internEmail, input.internSchool);
        membersList.push(intern);
        idList.push(input.internId);
        genTeam();
    })
}

// Outputs the team onto a page
const buildTeam = () => {
    console.log("Building team...");
    // Creates directory if it doesnt exist
    if(!fs.existsSync(path.resolve(__dirname, "dist"))) {
        fs.mkdirSync(path.resolve(__dirname, "dist"));
    }
    fs.writeFileSync(path.join(path.resolve(__dirname, "dist"), "index.html"), render(membersList), "utf-8");
}

const genTeam = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which team member are you going to add?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "None"
            ]
        }
    ]).then(userChoice => {
        switch(userChoice.memberChoice) {
            case "Manager":
                genManager();
                break;
            case "Engineer":
                genEngineer();
                break;
            case "Intern":
                genIntern();
                break;
            default:
                buildTeam();
        }
    })
}

genTeam();