const inquirer = require("inquirer");
const cp = require("child_process");
function displayList() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        choices: ["About", "Skills", "Academics", "Projects"],
      },
    ])
    .then((answers) => {
      if (answers.selection == "About") {
        console.log("choice 1 selected");
        displayNext();
      } else if (answers.selection == "Skills") {
        console.log("choice 2 selected");
        displayNext();
      } else if (answers.selection == "Academics") {
        cp.execSync(
          "start chrome https://www.npmjs.com/package/inquirer#installation"
        );
        displayNext();
        // console.log("choice 3 selected");
      } else if (answers.selection == "Projects") {
        cp.execSync("start chrome https://github.com/amansingh057/aman");
        displayNext();
        // console.log("choice 4 selected");
      }
    });
}
displayList();
function displayNext() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        choices: ["Go Back", "Exit"],
      },
    ])
    .then((answers) => {
      if (answers.selection == "Go Back") {
        displayList();
      } else if (answers.selection == "Exit") {
        console.log("Exited");
      }
    });
}
