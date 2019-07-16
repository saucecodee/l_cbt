//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require global variables ==========
const config = require('./config');
const header = require('./header');
const validate = require('./validate')

//===============================================================================
//                  Questions page                                             //
//===============================================================================

var q = config.q
var quest = config.questions
var ans = ""
var userAns = ""

exports.quest = function () {
    header(`QUESTION: ${q + 1}`, "");
    console.log(`${quest[q].question}`)
    console.log(`A: ${quest[q].option.a}`)
    console.log(`B: ${quest[q].option.b}`)
    console.log(`C: ${quest[q].option.c}`)
    console.log(`D: ${quest[q].option.d}`)

    config.prompt.question('Enter an option:    ', (userA) => {
        userAns = userA.toUpperCase()
        ans = quest[q].answer.toUpperCase() 
        validate(ans, userAns);
    })

}
