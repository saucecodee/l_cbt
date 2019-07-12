//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require the prompt module and create interface ==========
const prompt = require('readline').createInterface(process.stdin, process.stdout);

// //========== require cli-tabel ==========
// var Table = require('cli-table');

// //========== require colors ==========
// var colors = require('colors');

// //========== require config ==========
// var config = require('./config')

//===============================================================================
//                  Global Variables                                           //
//===============================================================================

//========== Questions array ==========
const questions = []

//========== Answers array ==========
var answers = [];

//========== Current question index ==========
var q = 0;


module.exports = {
      q, answers, questions, prompt
}