const figlet = require("figlet")
const chalk = require("chalk")
const algebra = require("algebra.js")
const prompt = require("prompt-sync")()
const Algebrite = require('algebrite');

let shown = false
let shown1 = false

console.clear()
figlet("Kalku-cli |>", {font: "ANSI Shadow"}, (err, data) => {

    if (err) {

        console.log(err)

    } else {

        console.log(chalk.white(data))

    }

    if (!shown) {

        console.log(chalk.bgBlue(chalk.black("\nWelcome to Kalku-cli! [Type 'man' for manual]")))         
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

        if (user === "quit") {

            process.exit()

        } else if (user === "man") {

            manual()

        } else if (user === "advmode") {

            console.log("Advanced mode activate")
            setTimeout(() => {
                algcalc()
            }, 3000)

        } else if (user1 === "up,up,down,down,left,right,left,right,b,a,start") {
            
            easteregg()
            
        } else {

            main(user)

        }

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

        function manual() {

            console.log(chalk.bgGreenBright(chalk.black("MANUAL")))
            console.log(

                `- advmode (Activating advanced mode)`,
                `\nExample: 2x+10=4 or 2x+1x`,
                `\n- quit (Quitting the program)`,
                `\n- exit adv (Exitting the advanced mode)`,

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

        if (user1 === "quit") {
    
            process.exit()

        } else if (user1 === "exit adv") {
    
            calculator()

        } else if (user1 === "man") {

            manual1()

        } else if (user1 === "up,up,down,down,left,right,left,right,b,a,start") {
        
        } else {

            mainadv(user1)
    
        }

        function manual1() {

            console.log(chalk.bgGreenBright(chalk.black("MANUAL")))
            console.log(

                `- advmode (Activating advanced mode)`,
                `\nExample: 2x+10=4 or 2x+1x`,
                `\n- quit (Quitting the program)`,
                `\n- exit adv (Exitting the advanced mode)`,

            )

            loop(true)
    
        }


        function mainadv(user1) {

            let logb = (x, base) => Math.log(x) / Math.log(base)
            let pi = 3.1415926535
            let pi2 = 22/7
            let e = 2.71828

            try {
    
                if (user1.includes("=")) {

                    let eq = algebra.parse(user1)
                    let solution = eq.solveFor("x")
                    console.log(chalk.yellow(`x = ${solution}`))

                } else if (user1.includes("Derivative")) {

                    let expr = user1.replace("Derivative: ", "")
                    let eqder = Algebrite.run(`derivative(${expr}, x)`)
                    console.log(eqder)

                } else if (user1.includes("Integral: ")) {

                    let expr = user1.replace("Integral: ", "")
                    let eqin = Algebrite.run(`integral(${expr}, x)`)
                    console.log(eqin)

                } else if (user1.includes("logb") || user1.includes("pi") || user1.includes("pi2") || user1.includes("e")) {

                    try {

                        let result = eval(user1)
                        console.log(result)                
                        loop2(true)
            
                    } catch (error) {
            
                        console.log(chalk.bgRed("[ERROR]"))
                        loop2(true)

                    }

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
