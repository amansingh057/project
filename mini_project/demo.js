const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "list",
      name: "selection",
      choices: ["choice1", "choice2"],
    },
  ])
  .then((answers) => {
    if (answers.selection == "choice1") {
      console.log("choice 1 selected");
    } else {
      console.log("choice 2 selected");
    }
  });
