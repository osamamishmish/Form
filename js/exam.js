var questionContent = [
  
    {
        question: "What is the capital of Egypt?",
        answers: ["Alex", "Aswan", "Cairo"],
        rightAnswer: 2,
        number: "One",
        
    },

    {
        question: "What is the nationality of Zewail?",
        answers: ["Egyptian", "American", "England"],
        rightAnswer: 0,
        number: "Two",
        theCheck : document.createElement("input"),
    },

    {
        question: "Egypt belong to?",
        answers: ["Africa", "Asia", "Europe"],
        rightAnswer: 0,
        number: "Three",
        theCheck : document.createElement("input"),
        
    },
    {
        question: "when was Al Ahly SC established?",
        answers: ["1910", "1907", "1903"],
        rightAnswer: 1,
        number: "Four",
        theCheck : document.createElement("input"),
       
    },
    {
        question: "The last time Egypt won the cup of Africa?",
        answers: ["2012", "2008", "2010"],
        rightAnswer: 2,
        number: "Five",
        theCheck : document.createElement("input"),
        
    },
   
   
    
];
 var resultArr=[];


//create the input radio
$(document).ready(function(){
    for(let i=0 ;i<questionContent.length-1 ; i++){
        
        for (let x=0 ;x<questionContent[i].answers.length ;x++){
            var theCheckField=document.createElement("input");
        $(theCheckField).attr("type","radio").addClass("the-check");
           $(theCheckField).prependTo($(".answer-container").eq(x));
        }
     }
})
 


//start the exam
$(document).ready(function(){
        $(questionContent[0].previous).addClass("hide");
        $(".start").on("click",function(){
            $(this).remove();
            
            $(".the-check").hide();
            $(".content").removeClass("hide");
            $(".check").attr("name","0");
            $(".card-header").text("Question"+" "+questionContent[0].number);
            $(".card-title").text(questionContent[0].question);
            for(let x=0 ;x<questionContent[0].answers.length;x++){        
                $(".answer").eq(x).text(questionContent[0].answers[x]);
                
            } 
});
})


var theContainer=document.querySelectorAll(".answer-container");
let index=0;


//Next
$(document).ready(function(){
        $(".next").on("click",function(){
            $(".check").addClass("hide");
            $(".the-check").hide();
            for(let i=0 ;i<$("div[class='answer-container']").length ;i++){
                $(".answer-container").eq(i).children().eq(index).show();
                $(".answer-container").eq(i).children().eq(index).attr("name",index+1);
            }
            
            index++;
           
          if(index==1){
            $(".previous").removeClass("hide");
          }
          if(index==questionContent.length-1){
              $(".next").addClass("hide");
          }else{
            $(".next").removeClass("hide");
          }
        
$(".card-header").text("Question"+" "+questionContent[index].number);
$(".card-title").text(questionContent[index].question);
for(let x=0;x<questionContent[index].answers.length;x++){
    
    $(".answer-container").eq(x).children().last().text(questionContent[index].answers[x]);
    }
})
})



//previous
$(document).ready(function(){
    $(".previous").on("click",function(){
        $(".the-check").hide();
       
      index--;
      for(let i=0 ;i<$("div[class='answer-container']").length ;i++){
        $(".answer-container").eq(i).children().eq(index-1).show();
        if(index>0){
            $(".answer-container").eq(i).children().eq(index-1).attr("name",index);
        }else{
            $(".answer-container").eq(i).children().last().attr("name","0");
        }
     //   $(".answer-container").eq(i).children().eq(index).attr("name",index);
    } 
      
      if(index==0){
        $(".check").removeClass("hide");
        $(".the-check").hide();
      }else{
          $(".check").addClass("hide");
      }
    
      if(index<questionContent.length-1){
        $(".next").removeClass("hide");
      }
     if(index==0){
          $(".previous").addClass("hide");
      }else{
        $(".previous").removeClass("hide");
      }

$(".card-header").text("Question"+" "+questionContent[index].number);
$(".card-title").text(questionContent[index].question);
for(let x=0;x<questionContent[index].answers.length;x++){
 
$(".answer").eq(x).text(questionContent[index].answers[x]);
} 
})
});



