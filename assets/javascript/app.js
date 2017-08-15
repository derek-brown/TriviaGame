$(document).ready(function(){


var q1 = {
        question: "What is the main protagonist of DragonBallZ's name?",
        answer1: "Alfred Hitchcock",
        answer2: "Goku",
        answer3: "Hercules",
        realAnswer: "Goku"
};
var q2 = {
        question: "Is the Earth flat?",
        answer1: "Possibly?",
        answer2: "Absolutely!",
        answer3: "No.",
        realAnswer: "No."
};
var q3 = {
    question: "What's going on?",
    answer1: "Yayay!",
    answer2: "Nothin'",
    answer3: "A whole lotta sumthin'",
    realAnswer: "Yayay!"
}

var qArray = [q1, q2, q3];
var count=0;
var timeHolder;

function check(){
    if(count===qArray.length){
        alert("is this running?");
        count=0;
    }
};

function questionTime(){
    timeHolder = setInterval(questionTime, 30000);
    var qDiv = $("<div class='question'>").text(qArray[count].question);
    var anOne = $("<div class='btn btn-default btn-sm answer' data='"+qArray[count].answer1+"'>").text(qArray[count].answer1);
    var anTwo = $("<div class='btn btn-default btn-sm answer' data='"+qArray[count].answer2+"'>").text(qArray[count].answer2);
    var anThree = $("<div class='btn btn-default btn-sm answer' data='"+qArray[count].answer3+"'>").text(qArray[count].answer3);
    $("#question-section").html(qDiv).append(anOne).append(anTwo).append(anThree);
};

$(".btn").click(questionTime);

$("#question-section").on("click", ".answer", function(){
    var chosenAnswer = $(this).attr("data");
    if(chosenAnswer===qArray[count].realAnswer){
        alert("Correct!");
        count++;
        console.log(count, qArray.length);
        check();
    }
    else{
        alert("Wrong!");
        count++;
        console.log(count, qArray.length);
        check();
   }
});


 });

