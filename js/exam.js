var questionContent = [
  
    {
        question: "What is the capital of Egypt?",
        answers: ["Alex", "Aswan", "Cairo"],
        rightAnswer: 2,
        next :document.querySelector(".start"),
    //   next:$(".next"),
        number: "One",
    },

    {
        question: "What is the nationality of Zewail?",
        answers: ["Egyptian", "American", "England"],
        rightAnswer: 0,
        next :document.createElement("button"),
        previous:$(".previous"),
        number: "Two",
    },

    {
        question: "Egypt belong to?",
        answers: ["Africa", "Asia", "Europe"],
        rightAnswer: 0,
        next :document.createElement("button"),
        previous:document.createElement("button"),
        number: "Three",
        
    },
    {
        question: "when was Al Ahly SC established?",
        answers: ["1910", "1907", "1903"],
        rightAnswer: 1,
        next :document.createElement("button"),
        previous:document.createElement("button"),
        number: "Four",
       
    },
    {
        question: "The last time Egypt won the cup of Africa?",
        answers: ["2012", "2008", "2010"],
        rightAnswer: 2,
        next :document.createElement("button"),
        previous:document.createElement("button"),
        number: "Five",
        
    },
    {
      //  next :document.createElement("button"),
        previous:document.createElement("button")
    },
   
    
];



$(document).ready(function(){
    for (let index=0;index<questionContent.length; index++){
        $(questionContent[index].next).on("click",function(){
            $(".content").removeClass("hide");
            $(questionContent[index].next).addClass("hide");
            $(questionContent[index].previous).addClass("hide");
            $(questionContent[index+1].next).appendTo(".card-body").attr("type","button").addClass("btn btn-primary next").text("Next");
            $(".card-header").text("Question"+" "+questionContent[index].number);
            $(".card-title").text(questionContent[index].question);
            if($(".card-header").text()=="Question Two"){
                $(questionContent[1].previous).removeClass("hide");
            }
            for(let x=0 ;x<questionContent[index].answers.length;x++){
                $(".answer").eq(x).text(questionContent[index].answers[x]);
            } 
             
        });
    }
});

