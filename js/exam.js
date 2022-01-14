var questionContent = [
   
    {
        question: "What is the capital of Egypt?",
        answers: ["Alex", "Aswan", "Cairo"],
        rightAnswer: 2,
        next :document.querySelector(".start"),
        number: "One"
    },

    {
        question: "What is the nationality of Zewail?",
        answers: ["Egyptian", "American", "England"],
        rightAnswer: 0,
        next :$(".next"),
        number: "Two"
    },

    {
        question: "Egypt belong to?",
        answers: ["Africa", "Asia", "Europe"],
        rightAnswer: 0,
        next :document.createElement("button"),
        number: "Three"
        
    },
    {
        question: "when was Al Ahly SC established?",
        answers: ["1910", "1907", "1903"],
        rightAnswer: 1,
        next :document.createElement("button"),
        number: "Four"
       
    },
    {
        question: "The last time Egypt won the cup of Africa?",
        answers: ["2012", "2008", "2010"],
        rightAnswer: 2,
        next :document.createElement("button"),
        number: "Five"
        
    },
   
    {
        next:document.querySelector(".result"),
        },
    
];

$(document).ready(function(){
    for (let index=0 ;index<questionContent.length-1 ; index++){
        
        $(questionContent[index].next).on("click",function(){
            "use strict";
            $(questionContent[index].next).addClass("hide");
                
               $(questionContent[index+1].next).appendTo(".card-body");
               $(questionContent[index+1].next).addClass("btn btn-primary").text("next");
               
               
            $(".content").removeClass("hide");
           // questionContent[0].next.classList.add("hide");
            $(".card-header").text("Question"+questionContent[index].number);
            $(".card-title").text(questionContent[index].question);
            for(let x=0 ;x<questionContent[index].answers.length;x++){
                $(".answer").eq(x).text(questionContent[index].answers[x]);
            }  
        })
    
    }
})