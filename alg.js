const figlet = require("figlet")
const chalk = require("chalk")
const algebra = require("algebra.js")
const prompt = require("prompt-sync")()

let shown = false
let pi = 3.14;

function algebracalc() {

    console.clear()
    figlet("Calc-cli", {font: "ANSI Shadow"}, (err, data) => {

        if (err) {
            console.log(err)
        } else {
            console.log(chalk.bgWhite(chalk.black(data)))
            console.log("")
        }

    })

    setTimeout(() => {

        let user1 = prompt(">").trim()

        if (user1 === "QUIT") {
            process.exit()
        } else if (user1 === "EXIT ALG") {
            calculator()
        } else {
            mainalg(user1)
        }

    }, 3000);

    function mainalg(user1) {

    
        try {

            if (user1.includes("&&")) {

    let parts = user1.split("&&");

    if (parts.length !== 2) {
        console.log("Enter exactly two equations.");
        return;
    }

    let eq1 = algebra.parse(parts[0].trim());
    let eq2 = algebra.parse(parts[1].trim());

    // solve system
    let solution = algebra.solve([eq1, eq2]);

    console.log("x =", solution.x.toString());
    console.log("y =", solution.y.toString());
}

   
            } catch (error) {
        
                console.log(chalk.bgRed("[ERROR]"), error.message);
        
                process.exit();
   
   
    

    
            }


    }
}

algebracalc()