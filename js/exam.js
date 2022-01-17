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
    },

    {
        question: "Egypt belong to?",
        answers: ["Africa", "Asia", "Europe"],
        rightAnswer: 0,
        number: "Three",
        
    },
    {
        question: "when was Al Ahly SC established?",
        answers: ["1910", "1907", "1903"],
        rightAnswer: 1,
        number: "Four",
       
    },
    {
        question: "The last time Egypt won the cup of Africa?",
        answers: ["2012", "2008", "2010"],
        rightAnswer: 2,
        number: "Five",
        
    },
   
   
    
];




//start the exam
$(document).ready(function(){
        $(questionContent[0].previous).addClass("hide");
        $(".start").on("click",function(){
            $(this).remove();
            $(".content").removeClass("hide");
            $(".card-header").text("Question"+" "+questionContent[0].number);
            $(".card-title").text(questionContent[0].question);
            for(let x=0 ;x<questionContent[0].answers.length;x++){
                $(".answer").eq(x).text(questionContent[0].answers[x]);
            } 
});
})




let index=0;
//Next
$(document).ready(function(){
        $(".next").on("click",function(){
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
    $(".answer").eq(x).text(questionContent[index].answers[x]);
} 
})
})



//previous
$(document).ready(function(){
    $(".previous").on("click",function(){
      index--;
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





