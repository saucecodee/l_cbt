//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require global variables ==========
const config = require('./config');
const question = require("./question");

function goToQuestion (){
    console.log();
    console.log("1.", "Next Page");
    console.log("2.", "Previous Page")
    config.prompt.question("Please choose an option: ", (ans) => {
            if (ans == 1){
                nextQuestion();
            }
            if (ans == 2){
                prevQuestion();
            }
            else{
                console.log("WRONG INPUT! TRY AGAIN");
                goToQuestion();
            }

    })
}

goToQuestion()

function nextQuestion(){
    config.q += 1;
    question(q);
}
    
function prevQuestion(){
    config.q -= 1;
    question(q);
}


module.exports = goToQuestion