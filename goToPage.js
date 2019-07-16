//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require global variables ==========
const config = require('./config');
const quest = require('./questionPage');
const result = require('./result');

//===============================================================================
//                  Next and Previous page                                     //
//===============================================================================

function goToQuestion() {
    console.log();
    console.log("1.", "Next Page");
    console.log("2.", "Previous Page")
    console.log("3.", "Submit".red)
    config.prompt.question("Please choose an option: ", (ans) => {
        if (ans == 1) {
            config.q += 1;
            quest.quest();
        } else if (ans == 2) {
            config.q -= 1;
            quest.quest();
        } else if (ans == 3) {
            result();
        } else {
            console.log("WRONG INPUT! TRY AGAIN");
            goToQuestion();
        }
    })
}

module.exports = goToQuestion