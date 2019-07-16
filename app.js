//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require the prompt module and create interface ==========
const prompt = require('readline').createInterface(process.stdin, process.stdout);

//========== require cli-tabel ==========
const Table = require('cli-table');

//========== require colors ==========
const colors = require('colors');

//===============================================================================
//                  Global Variables                                           //
//===============================================================================

//========== Questions array ==========
const questions = [
     {
          question: "what is physics all about?",
          option: {
               a: "fire",
               b: "book",
               c: "science",
               d: "all of the above"
          },
          answer: "a"
     },
     {
          question: "what is geography about?",
          option: {
               a: "fire",
               b: "earth",
               c: "water",
               d: "none of the above"
          },
          answer: "c"
     },
     {
          question: "what is biology all about?",
          option: {
               a: "tea",
               b: "kerosine",
               c: "stone",
               d: "none of the above"
          },
          answer: "c"
     },
     {
          question: "what is agriculture all about?",
          option: {
               a: "human body",
               b: "plant and animal",
               c: "none",
               d: "all of the above",

          },
          answer: "b"
     },

     {
          question: "what is chemistry all about?",
          option: {
               a: "Atoms,element...",
               b: "stone",
               c: "all of the above",
               d: "none "
          },
          answer: "d"
     }
]

//========== Answers array ==========
var answers = [0, 0, 0, 0, 0];

//========== Current question index ==========
var q = 0;

//===============================================================================
//                  Header functiom                                            //
//===============================================================================

function header(title, msg) {
     console.clear();

     var table = new Table({
          chars: { 'top': '═', 'top-left': '╔', 'top-right': '╗', 'bottom': '═', 'bottom-left': '╚', 'bottom-right': '╝', 'left': '║', 'right': '║' },
          head: [title],
          colWidths: [72],
          colAligns: ['middle']
     });
     console.log(table.toString());

     if (msg.length < 1) {
          console.log();
     } else {
          console.log();
          console.log(colors.red('=> '), msg)
          console.log()
     }
}

//===============================================================================
//                  Welcome page                                               //
//===============================================================================

function welcome(Name, msg) {
     header("Welcome to BrainTester", msg)
     console.log("Hello!" + " " + Name + " " + "you are welcome to our portal \n")

     prompt.question('Do you want to continue? (y/n):  ', (answer) => {
          if (answer == "y") {
               question('');
          } else if (answer == "n") {
               console.clear()
               console.log("Thanks you for checking out our site")
          } else {
               welcome(Name, "INVALID INPUT")
          }
     });
}

function init(msg) {
     header("Welcome to BrainTester", msg)
     prompt.question('What is your name:   ', (answer) => {
          console.clear()
          welcome(answer, '')
     });
}

//===============================================================================
//                  Questions page                                             //
//===============================================================================

function question(msg) {
     header(`QUESTION: ${q + 1}`, msg);
     console.log(`${questions[q].question}`)
     console.log(`A: ${questions[q].option.a}`)
     console.log(`B: ${questions[q].option.b}`)
     console.log(`C: ${questions[q].option.c}`)
     console.log(`D: ${questions[q].option.d}`)

     prompt.question('Enter an option:    ', (userA) => {
          userAns = userA.toUpperCase()
          ans = questions[q].answer.toUpperCase()

          if (userA == "a" || userA == "b" || userA == "c" || userA == "d") {
               validate(ans, userAns);
          } else {
               question("INVALID INPUT")
          }
     })

}

//===============================================================================
//                  validate answrs                                            //
//===============================================================================

function validate(ans, userAns) {
     if (q >= 0 && (q < questions.length - 1)) {
          if (ans == userAns) {
               answers[q] = 1;
          } else {
               answers[q] = 0;
          }
     }
     console.log("\n ======================================================== \n")
     goToQuestion('')
}

//===============================================================================
//                  Next and Previous page                                     //
//===============================================================================

function goToQuestion() {
     if (q == 0) {
          console.log("1.", "Next Page");
          console.log("2.", "Submit".red)
          prompt.question("Please choose an option: ", (ans) => {
               if (ans == 1) {
                    q += 1;
                    question('');
               } else if (ans == 2) {
                    result('');
               } else {
                    console.log("WRONG INPUT! TRY AGAIN".cyan);
                    goToQuestion();
               }
          })
     } else if (q == questions.length - 1) {
          console.log("1.", "Previous Page")
          console.log("2.", "Submit".red)
          prompt.question("Please choose an option: ", (ans) => {
               if (ans == 1) {
                    q -= 1;
                    question('');
               } else if (ans == 2) {
                    result('');
               } else {
                    console.log("WRONG INPUT! TRY AGAIN".cyan);
                    goToQuestion();
               }
          })
     }
     else {
          console.log("1.", "Next Page");
          console.log("2.", "Previous Page")
          console.log("3.", "Submit".red)
          prompt.question("Please choose an option: ", (ans) => {
               if (ans == 1) {
                    q += 1;
                    question('');
               } else if (ans == 2) {
                    q -= 1;
                    question('');
               } else if (ans == 3) {
                    result('');
               } else {
                    console.log("WRONG INPUT! TRY AGAIN".cyan);
                    console.log()
                    goToQuestion();
               }
          })
     }

     console.log("\n \n")
}

//===============================================================================
//                  Result's page                                              //
//===============================================================================

function result(msg) {
     header("RESULT !", msg)
     let score = answers.reduce((prev, next) => {
          return prev + next
     }, 0)
     let percScore = score / (answers.length) * 100;
     if (percScore < 50) {
          console.log("Thanks for attempting this quiz, However your grade was really embarrasing, i think you should appease your villahge people")
          console.log(`You answered ${score} questions correctly an had a percentage of ${percScore}`);
     } else if (percScore >= 50 && percScore < 80) {
          console.log("You try ooh, but u neva make am sha, try again!! nwanne")
          console.log(`You answered ${score} questions correctly and had a percentage of ${percScore}`);
     } else {
          console.log("Senior man, you do well!!")
          console.log(`You answered ${score} questions correctly and had a percentage of ${percScore}`);
     }

     console.log("\n ====================================================================== \n");
     console.log("1.", "Yes");
     console.log("2.", "No");

     prompt.question("Would you like to take the test again?", (opt) => {
          if (opt == 1) {
               answers = [0, 0, 0, 0, 0]
               q = 0
               init('');
          } else if (opt == 2) {
               console.clear()
               console.log("Goodbye")
          } else {
               result("INVALID INPUT")
          }
     });
}

init('')