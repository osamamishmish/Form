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
//Next
/*$(document).ready(function(){
    for (let index=0 ;index<questionContent.length ; index++){
        
        $(questionContent[index].next).on("click",function(){
            "use strict";
            $(questionContent[index].next).addClass("hide");
                $(questionContent[index].previous).removeClass("hide");
               /* $(questionContent[index].previous).addClass("hide");
                $(questionContent[index+1].previous).appendTo(".card-body");
                $(questionContent[index+1].previous).addClass("btn btn-secondary").text("previous"); */
            /*   $(questionContent[index+1].next).appendTo(".card-body");
               $(questionContent[index+1].next).addClass("btn btn-primary").text("next"); 
               $(".previous").off("click").on("click",function(){
                $(".card-header").text("Question"+" "+questionContent[index].number);
                $(".card-title").text(questionContent[index].question);
        
              })
            $(".content").removeClass("hide");
            $(".card-header").text("Question"+" "+questionContent[index].number);
            $(".card-title").text(questionContent[index].question);

            for(let x=0 ;x<questionContent[index].answers.length;x++){
                $(".answer").eq(x).text(questionContent[index].answers[x]);
            }  
        })
    
    }
})*/



//previous
/*$(document).ready(function(){
    for(let index=questionContent.length-1;index>=1;index--){
        $(questionContent[index].previous).on("click",function(){
            $(questionContent[index].previous).addClass("hide");
            $(questionContent[index-1].previous).appendTo(".card-body");
            $(questionContent[index-1].previous).addClass("btn btn-primary").text("previous");
            $(".card-header").text("Question"+" "+questionContent[index-1].number);
            $(".card-title").text(questionContent[index-1].question);
            for(let x=0 ;x<questionContent[index].answers.length;x++){
                $(".answer").eq(x).text(questionContent[index-1].answers[x]);
            }  

        })
    }
})*/
//var theNext=document.createElement("button");
$(document).ready(function(){
    for (let index=0;index<questionContent.length; index++){
        $(questionContent[index].next).on("click",function(){
            $(".content").removeClass("hide");
            $(questionContent[index].next).addClass("hide");
            $(questionContent[index].previous).addClass("hide");
          //  $(questionContent[index].next).addClass("hide");
           // $(questionContent[index+1].next).remove();
            $(questionContent[index+1].next).appendTo(".card-body").attr("type","button").addClass("btn btn-primary next").text("Next");
   
            
              //  $(questionContent[index+1].previous).remove();
              //  $(".card-header").text("Question"+" "+questionContent[index-1].number);
                //$(questionContent[index].previous).remove();
               // $(questionContent[index].next).appendTo(".card-body").attr("type","button").addClass("btn btn-primary next").text("Next");
          /*  $(".card-title").text(questionContent[index-1].question);
            for(let y=0 ;y<questionContent[index+1].answers.length;y++){
                $(".answer").eq(y).text(questionContent[index-1].answers[y]);
            } */
          //  });
            
            $(".card-header").text("Question"+" "+questionContent[index].number);
            $(".card-title").text(questionContent[index].question);
            if($(".card-header").text()=="Question Two"){
                $(questionContent[1].previous).removeClass("hide");
            }
           
           // $(questionContent[questionContent.length-1].next).appendTo(".card-body").attr("type","button").remove();
            for(let x=0 ;x<questionContent[index].answers.length;x++){
                $(".answer").eq(x).text(questionContent[index].answers[x]);
            } 
             
        });
    }
});

/*$(document).ready(function(){
    for (let i=1; i<questionContent.length ;){
        $(questionContent[i].previous).on("click",function(){
            $(".card-header").text("Question"+" "+questionContent[i-1].number);
            $(".card-title").text(questionContent[i-1].question);
            $(questionContent[i-1].next).removeClass("hide");
            $(questionContent[1].previous).addClass("hide");
           // $(questionContent[i].previous).appendTo(".card-body").attr("type","button").addClass("btn btn-primary next").text("Previous");
           // $(questionContent[i+1].previous).addClass("hide");
         //   $(questionContent[i-1].previous).addClass("hide");
       /*  if($(".card-header").text()=="Question Two"){
            $(questionContent[1].previous).appendTo(".card-body").attr("type","button").addClass("btn btn-secondary previous").text("previous");
        }*/
        /*    $(questionContent[i-1].previous).appendTo(".card-body").attr("type","button").addClass("btn btn-secondary next").text("previous");
            for(let x=0 ;x<questionContent[i].answers.length;x++){
                $(".answer").eq(x).text(questionContent[i-1].answers[x]);
            } 
           // $(questionContent[i].previous).removeClass("hide");
        })
    }
})*/