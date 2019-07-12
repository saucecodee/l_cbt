//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require global variables ==========
// const config = require('./config');

// function welcome (msg) {
//      // header(q, msg);
//      console.log(msg)
// }

// module.exports = welcome

///////////////////////////////////////////////////////////////////////

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name ', (answer) => {
    // TODO: Log the answer in a database
    welcomeMessage(answer)

});



//

function welcomeMessage(Name) {

    console.log("Hello!" + " " + Name + " " + "you are welcome to our portal")

    rl.question('Do you want to continue? ', (answer) => {
        //
        if(answer=="yes"){
            console.log("====================================")
        }else{
            console.log("Thanks you for checking out our site")

          
        }
        rl.close();
    });

    
    



}

       module.exports = welcome

