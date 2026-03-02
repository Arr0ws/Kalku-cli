const figlet = require("figlet")
const chalk = require("chalk")
const algebra = require("algebra.js")
const prompt = require("prompt-sync")()

//Constant and shit
let shown = false
let shown1 = false
let pi = 3.1415926535
let pi2 = 22/7
let e = 271828

//Makes a big ass text
console.clear()
figlet("Kalku-cli |>", {font: "ANSI Shadow"}, (err, data) => {

    if (err) {

        console.log(err)

    } else {

        console.log(chalk.white(data))

    }

    if (!shown) {

        console.log(chalk.bgBlue(chalk.black("\nWelcome to Kalku-cli! [Type MAN for manual]")))         
        shown = true 

    }

})

function calculator() {

    setTimeout(() => {
        loop(true)
    }, 2000);

    function loop(skipClear = false) {
        //Appears after 3 second
        if (!skipClear) console.clear();
        console.log("")
        let user = prompt(chalk.bgWhite(chalk.black("Kalku |>"))).trim()

        if (user === "QUIT") {

            process.exit()

        } else if (user === "MAN") {

            manual()

        } else if (user === "ALGMODE") {

            console.log("Algebra mode activate")
            setTimeout(() => {
                algcalc()
            }, 3000)

        } else {

            main(user)

        }
        //Calculation
        function main(user) {

            try {

                let result = eval(user)
                console.log(result)
                loop(true)

            } catch (error) {

                console.log(chalk.bgRed("[ERROR]"))
                loop(true)

            }

        }
        //Manual
        function manual() {

            console.log(chalk.bgGreenBright(chalk.black("MANUAL")))
            console.log(

                `- ALGMODE (Activating Algebra mode)`,
                `\nExample: 2x+10=4 or 2x+1x`,
                `\n- QUIT (Quitting the program)`,
                `\n- EXIT ALG (Exitting the Algebra mode)`,
                `\n- EXIT MAN (Exitting the Manual)`, 

            )

            loop(true)
    
        }


    }

}

calculator()

function algcalc() {
    
    setTimeout(() => {
        loop2(true)
    }, 3000);

    function loop2(skipClear1 = false) {

        if (!skipClear1) console.clear()
        console.log("")
        let user1 = prompt(chalk.bgWhite(chalk.black("Kalku |>"))).trim()

        if (user1 === "QUIT") {
    
            process.exit()

        } else if (user1 === "EXIT ALG") {
    
            calculator()

        } else {

            mainalg(user1)
    
        }

        function mainalg(user1) {

            try {
    
                if (user1.includes("=")) {

                    let eq = algebra.parse(user1)
                    let solution = eq.solveFor("x")
                    console.log(chalk.yellow(`x = ${solution}`))

                } else {

                    let expr = algebra.parse(user1)
                    console.log(chalk.yellow(expr.toString()))
    
                }
    
                loop2(true)

            } catch (error) {

                console.log(chalk.bgRed("[ERROR]"))
                loop2(true)
    
            }

        }

    }
}
