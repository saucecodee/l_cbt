//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require global variables ==========
const config = require('./config');
const question = require('./questionPage')
const header = require('./header');


//===============================================================================
//                  Welcome page                                               //
//===============================================================================

function init() {
     header("Welcome to BrainTester", '')
     config.prompt.question('What is your name:   ', (answer) => {
          console.clear()
          welcome(answer)
     });
}

function welcome(Name) {
     header("Welcome to BrainTester", '')
     console.log("Hello!" + " " + Name + " " + "you are welcome to our portal")

     config.prompt.question('Do you want to continue? (y/n):  ', (answer) => {
          if (answer == "y") {
               question.quest();
          } else {
               console.log("Thanks you for checking out our site")
          }
     });
}

init()

module.exports = welcome

