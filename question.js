//===============================================================================
//                  Require modules                                            //
//===============================================================================

//========== require global variables ==========
const config = require('./config');

function questions (config.q) {
    var questions = [
        {
            question: "what is physics all about?",
            option: {
                a: "fire",
                b: "book",
                c: "science",
                d: "all of the above"
            },
            answer: [option.c] 
            
        },
    
        {
            question: "what is geography about?",
            option: {
                a: "fire",
                b: "earth",
                c: "water",
                d: "none of the above"
            },
            answer: b
            
        },
    
        {
            question: "what is biology all about?",
            option: {
                a: "tea",
                b: "kerosine",
                c: "stone",
                d: "none of the above"
            },
            answer: d
            
        },
    
       {
        question: "what is agriculture all about?",
        option:{
            a: "human body",
            b: "plant and animal",
            c: "none",
            d:"all of the above",
    
            },
            answer: b
    
       },
       
       {
           question: "what is chemistry all about?",
           option:{
           a: "Atoms,element...",
           b: "stone",
           c: "all of the above",
           d: "none "
           },
           answer:a
       }
    
    ]
    
  
    

}

questions();
module.exports = questions