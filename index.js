const figlet = require("figlet")
const chalk = require("chalk")
const algebra = require("algebra.js")
const prompt = require("prompt-sync")()

let shown = false
let pi = 3.1415
let pi2 = 22/7
let e = 271828



function calculator() {
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

        if (!shown) {
            console.log(chalk.bgWhite(chalk.black("\n\nWelcome to Calc-cli! [Type MAN for manual]")))
            shown = true
        }

        let user = prompt(">").trim()

        if (user === "QUIT") {
            process.exit()
        } else if (user === "MAN") {
            manual()
        } else if (user === "ALGMODE") {
            console.log("Algebra mode activate")
            setTimeout(() => {
                algebracalc()
            }, 3000)
        } else {
            main(user)
        }

    }, 3000);

    function main(user) {

        try {

            let result = eval(user)
            console.log(result)

            setTimeout(() => {
                calculator()
            }, 3000)

        } catch (error) {

            console.log(chalk.bgRed("[ERROR]"))
            setTimeout(() => {
                calculator()
            }, 2000)

        }

    }
}



calculator()

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
        
            if (user1.includes("=")) {

                let eq = algebra.parse(user1)
                let solution = eq.solveFor("x")
                console.log(`x = ${solution}`)

            } else {

                let expr = algebra.parse(user1)
                console.log(expr.toString())

            }

            setTimeout(() => {
                algebracalc()
            }, 3000)

        } catch (error) {

            console.log(chalk.bgRed("[ERROR]"))
            setTimeout(() => {
                algebracalc()
            }, 2000)

        }
    }
}

function manual() {

    console.clear()
    figlet("Calc-CLI", {font: "ANSI Shadow"}, (err, data) => {

        if (err) {
            console.log(err)
        } else {
            console.log(chalk.bgWhite(chalk.black(data)))
            console.log("")
        }

    })

    setTimeout(() => {
        console.log(chalk.bgGreenBright(chalk.black("MANUAL")))
        console.log(
            `- ALGMODE (Activating Algebra mode)`,
            `\nExample: 2x+10=4 or 2x+1x`,
            `\n- QUIT (Quitting the program)`,
            `\n- EXIT ALG (Exitting the Algebra mode)`,
            `\n- EXIT MAN (Exitting the Manual)`,
        )

        let user2 = prompt(">")
        if (user2 === "EXIT MAN") {
            calculator()
        }
    }, 3000);
    
}
