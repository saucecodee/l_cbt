//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require global variables ==========
//remeber to pass the array ans to this result function
const config = require('./config');
const welcome = require('./welcome');

//===============================================================================
//                  Result's page                                              //
//===============================================================================

function result() {
    console.log(config.answers)
    let score = config.answers.reduce((prev, next) => {
        return prev + next
    }, 0)
    console.log(score)
    let percScore = score / (config.answers.length) * 100;
    if (percScore < 50) {
        console.log("Thanks for attempting this quiz, However your grade was really embarrasing, i think you should appease your villahge people")
        console.log(`You answered ${score} questions correctly an had a percentage of ${percScore}`);
    } else if (percScore >= 50 && percScore < 80) {
        console.log("You try ooh, but u neva make am sha, try again!! nwanne")
        console.log(`You answered ${score} questions correctly and had a percentage of ${percScore}`);
    } else {
        console.log("senior man, you do well!!")
        console.log(`You answered ${score} questions correctly and had a percentage of ${percScore}`);
    }

    console.log("\n -----------------------------------------------------");
    prompt.question("Would you like to take the test again?", (opt) => {
        if (opt == 1) {
            welcome();
        } else {
            console.log("Goodbye")
        }
    });
    console.log();
    console.log("1.", "Yes");
    console.log("2.", "No");
}

module.exports = result