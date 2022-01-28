var questionContent = [
  
    {
        question: "What is the capital of Egypt?",
        answers: ["Alex", "Aswan", "Cairo"],
        rightAnswer: 02,
        number: "One",
        
    },

    {
        question: "What is the nationality of Zewail?",
        answers: ["Egyptian", "American", "England"],
        rightAnswer: 10,
        number: "Two",
        
    },

    {
        question: "Egypt belong to?",
        answers: ["Africa", "Asia", "Europe"],
        rightAnswer: 20,
        number: "Three",
        
        
    },
    {
        question: "when was Al Ahly SC established?",
        answers: ["1910", "1907", "1903"],
        rightAnswer: 31,
        number: "Four",
        
       
    },
    {
        question: "The last time Egypt won the cup of Africa?",
        answers: ["2012", "2008", "2010"],
        rightAnswer: 42,
        number: "Five",
        
        
    },
   
   
    
];
 var resultArr=[];
resultArr.length=questionContent.length;
/*
//Email and Password
let theMail="osama_mishmish94@gmail.com";
let thePassword="123456";
var theMailInput=document.querySelector(".email"),
    thePasswordInput=document.querySelector(".password");
$(document).ready(function(){
    $(".enter").on("click",function(){

        
  
    
    if(theMailInput.value==theMail && thePasswordInput.value==thePassword){
        window.stop();
        $(".start").removeClass("hide");
        
    }
})
    })*/




//create the input radio
$(document).ready(function(){
    for(let i=0 ;i<questionContent.length ; i++){
        
        for (let x=0 ;x<questionContent[i].answers.length ;x++){
            var theCheckField=document.createElement("input");
        $(theCheckField).attr("type","radio").addClass("the-check");
           $(theCheckField).prependTo($(".answer-container").eq(x));
        }
     }
})
 




let index=0;
//Start the exam
$(document).ready(function(){
    $(".start").on("click",function(){
        $(this).remove();
        
        $(".the-check").hide();
        $(".content").removeClass("hide");
        
        
       
        $(".card-header").text("Question"+" "+questionContent[index].number);
        $(".card-title").text(questionContent[index].question);
        for(let x=0 ;x<questionContent[index].answers.length;x++){        
            $(".answer").eq(x).text(questionContent[index].answers[x]);
            
        }
        for(let i=0 ;i<$("div[class='answer-container']").length ;i++){
            $(".answer-container").eq(i).children().eq(index).show();
            $(".answer-container").eq(i).children().eq(index).attr("name",index).on("click",function(){
                resultArr.splice(index,1,$(this).attr("name")+questionContent[index].answers.indexOf($(this).siblings().last().text()));
            })
        }
    })
})










//Next
$(document).ready(function(){
    $(".next").on("click",function(){
        "use strict";
       // $(".content").hide();
       $(".content").hide({ direction: 'right' }, 800);
        index++;
        if(index==questionContent.length-1){
            $(".next").hide();
             $(".result").show();
         }
        $(".the-check").hide();
        if(index>0){
            $(".previous").show();
        }else{
            $(".previous").hide();
        }
        
        
        $(".card-header").text("Question"+" "+questionContent[index].number);
        $(".card-title").text(questionContent[index].question);
       // $(".content").fadeOut().fadeIn(2000);
        for(let x=0 ;x<questionContent[index].answers.length;x++){        
            $(".answer").eq(x).text(questionContent[index].answers[x]);
            
        }
        for(let i=0 ;i<$("div[class='answer-container']").length ;i++){
            $(".answer-container").eq(i).children().eq(index).show();
            $(".answer-container").eq(i).children().eq(index).attr("name",index).on("click",function(){
                resultArr.splice(index,1,$(this).attr("name")+questionContent[index].answers.indexOf($(this).siblings().last().text()));
            })
        }
      //  $(".content").fadeIn(2000);
      $(".content").show(800);
    })
})





//previous
$(document).ready(function(){
    $(".previous").on("click",function(){
        "use strict";
       // $(".content").hide();
       $(".content").hide( { direction: 'left' }, 800);
        index--;
        if(index<questionContent.length-1){
            $(".next").show();
            $(".result").hide();
        }
        if(index==0){
            $(".previous").hide();
        }
        $(".the-check").hide();
        $(".card-header").text("Question"+" "+questionContent[index].number);
        $(".card-title").text(questionContent[index].question);
        
        for(let x=0 ;x<questionContent[index].answers.length;x++){        
            $(".answer").eq(x).text(questionContent[index].answers[x]);
            
        }
        for(let i=0 ;i<$("div[class='answer-container']").length ;i++){
            $(".answer-container").eq(i).children().eq(index).show();
            $(".answer-container").eq(i).children().eq(index).attr("name",index).on("click",function(){
                resultArr.splice(index,1,$(this).attr("name")+questionContent[index].answers.indexOf($(this).siblings().last().text()));
            })
        }
        $(".content").show(800);
       // $(".content").fadeIn(2000);
    })
})



//Behaviour of the form
$(document).ready(function(){
    $(function(){
        if(index==questionContent.length-1){
            $(".next").hide();
            $(".result").show();
        }else{
            $(".next").show();
            $(".result").hide();
        }
    })
})


console.log("result",resultArr);







//Calculate the result
let result ;
let mark =questionContent.length*5;
$(document).ready(function(){
    $(".result").on("click",function(){
       
       result=0;
    for(let i=0 ;i<resultArr.length ; i++){
       if(questionContent[i].rightAnswer==resultArr[i]){
        
           result=result+5;  
       }   
    }
    $(".content").fadeOut(2000,function(){
        $(".card-header").text("The Result");
        $(".card-text").empty();
    $(".card-title").text("you got"+" "+result+" "+"out of "+mark );
    $(".result").hide();
    $(".previous").hide();
    });
    
$(".content").fadeIn(2000);
})
})









