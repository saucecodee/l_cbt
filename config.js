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

module.exports = { q, answers, questions, prompt, Table, colors }