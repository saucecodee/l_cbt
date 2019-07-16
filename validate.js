//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require global variables ==========
const config = require('./config');
const goTo = require('./goToPage');

//===============================================================================
//                  Require modules                                            //
//===============================================================================

function validate(ans, userAns) {
     if (config.q >= 0 && (config.q < config.questions.length - 1)) {    //validate the index
          if (ans == userAns) {
               config.answers[config.q] = 1;
          } else {
               config.answers[config.q] = 0;
          }
     }
     console.log(config.answers)
     goTo();
}

module.exports = validate