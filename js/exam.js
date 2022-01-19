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



//start the exam
$(document).ready(function(){
        $(questionContent[0].previous).addClass("hide");
        $(".start").on("click",function(){
            $(this).remove();
            $(".content").removeClass("hide");
            $(".card-header").text("Question"+" "+questionContent[0].number);
            $(".card-title").text(questionContent[0].question);
            for(let index=0 ;index<questionContent[0].answers.length;index++){
                $(".check").eq(index).on("click",function(){
                    var theIndex=  questionContent[0].answers.indexOf($(".check").eq(index).siblings().text());
                      console.log(theIndex);
                  });
            }
            
            for(let x=0 ;x<questionContent[0].answers.length;x++){
                
            
                $(".answer").eq(x).text(questionContent[0].answers[x]);
                
            } 
});
})


/*$(document).ready(function(){

for(let i=0 ;i<questionContent[0].answers.length;i++){
var theChecked=document.querySelector(".answer-container")[i];
}
   // for(let index=0 ;index,questionContent.length;index++){
   // for(let i=0 ;i<questionContent[0].answers.length;i++){
        $(theChecked).children().eq(0).on("click",function(){
            $(this).parent().attr("checked","true");
            $(this).parent().siblings().children().eq(0).removeAttr("checked");

          //  $(".answer-container").hasAttr("checked").siblings().removeAttr("checked");
           // $(".check").eq(i+1).attr("checked","false");
            //$(".check").eq(i-1).attr("checked","false");
        })
   // }
    
    
        
    
        
//} 
})*/

var theContainer=document.querySelectorAll(".answer-container");
let index=0;
//Next
$(document).ready(function(){
        $(".next").on("click",function(){
           
          //  $(".the-check").addClass("hide");
          index++;
         /* if(index=index++){
              for (let y=0 ;y<3;y++){
                var theRadio=document.createElement("input");
                
                $(theRadio).eq(y).attr("type","radio").prependTo(".answer-container").addClass("check");
               // $(".check").addClass("hide");
              }
          }*/
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
for(let i=0 ;i<questionContent[index].answers.length;i++){
    $(".check").eq(i).on("click",function(){
        var theIndex=  questionContent[index].answers.indexOf($(".check").eq(i).siblings().text());
          console.log(theIndex);
      });
}


//$(".the-check").addClass("hide");
for(let x=0;x<questionContent[index].answers.length;x++){
    
    
    $(".answer-container").eq(x).children().last().text(questionContent[index].answers[x]);
   // $(theContainer).eq(x).children().eq(0).addClass("hide");
   // $(".answer").eq(x).text(questionContent[index].answers[x]);
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
      $(".check").attr("name",index);
$(".card-header").text("Question"+" "+questionContent[index].number);
$(".card-title").text(questionContent[index].question);
for(let x=0;x<questionContent[index].answers.length;x++){
$(".answer").eq(x).text(questionContent[index].answers[x]);
} 
})
});



/*var theChecked =document.querySelector(".check"),
    checkStatus =theChecked.getAttribute("checked");
$(document).ready(function(){
    switch($(".check").attr("name")){
        case 0 :
            if(checkStatus==true){
                console.log($(theChecked).next().text());
            };
            break;
            default:
                console.log("hhhhhhhhh");
                break;
    }
})*/



