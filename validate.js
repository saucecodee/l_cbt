//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require global variables ==========
const config = require('./config');

//----------------------------



function validate (index, userAns) {

    if(index >= 0 && (index >questions.length -1)){    //validate the index
        let realAns = questions[index].answer;
        if(realAns == userAns){
            answers[index] +=1;  
        }
    }

    
    goToQuestion();

    //
}

module.exports = validate