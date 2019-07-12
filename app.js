//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require the prompt module and create interface ==========
const prompt = require('readline').createInterface(process.stdin, process.stdout);

//========== require cli-tabel ==========
var Table = require('cli-table');

//========== require colors ==========
var colors = require('colors');

//===============================================================================
//                  Global variables                                           //
//===============================================================================

//========== Questions array ==========
const questions = []

//========== Answers array ==========
var answers = [];

//========== Current question index ==========
var q = 0;

//========== page header ==========
function header(q, msg) {
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
//                  Pages                                                      //
//===============================================================================

//========== Welcome page ==========

function welcome (msg) {
     header(q, msg);
}

//========== Questions page ==========

function questions (q) {

}

//========== Validate the answer page ==========

function validate () {

}

//========== Previous and Next page page ==========

function goToPage (){

}

//========== Result page ==========

function goToPage (){

}