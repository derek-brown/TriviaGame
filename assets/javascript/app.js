$(document).ready(function(){

var q1 = {
    question: "What is the main protagonist of Dragon Ball Z's name?",
    answer1: "Alfred Hitchcock",
    answer2: "Goku",
    answer3: "Hercules",
    answer4: "Bill Murray",
    answer5: "The Chosen One",
    realAnswer: "Goku"
};
var q2 = {
    question: "What was the name of the red ranger in the first season of the Mighty Morphin Power Rangers?",
    answer1: "Chuck",
    answer2: "Austin",
    answer3: "Jason",
    answer4: "Tucker",
    answer5: "Billy",
    realAnswer: "Jason"
};
var q3 = {
    question: "In what year was the original Star Wars Episode IV: A New Hope released?",
    answer1: "umm..",
    answer2: "1776, it ain't accurate, but it will blow your mind",
    answer3: "1982",
    answer4: "1977",
    answer5: "1999",
    realAnswer: "1977"
};
var q4 = {
    question: "In the movie series The Matrix, the main protagonist is known as Neo, but What was is his real name?",
    answer1: "Thomas Anderson",
    answer2: "Billy Bob",
    answer3: "Johnny Appleseed",
    answer4: "John Smith",
    answer5: "Tyler Durden",
    realAnswer: "Thomas Anderson"
};
var q5 = {
    question: "What is the name of Billy and Ted's band from Bill and Ted's Excellent Adventure?",
    answer1: "The onion knights",
    answer2: "The Cool Kids",
    answer3: "Rockers Rocking",
    answer4: "Exploding Bacon",
    answer5: "Wlyd Stallyons",
    realAnswer: "Wlyd Stallyons"
};

var qArray = [q1, q2, q3, q4, q5];

var count=0;
var timeHolder=0;
var timeRunning = false;
var time = 30;
var currTime;
var correct=0;
var incorrect=0;

function check(){
    stopTimer();
    if(count===qArray.length){
        var qDiv = $("<div class='question'>").text("Your Results!");
        var anOne = $("<div class='result'>").text("Amount Correct: "+correct);
        var anTwo = $("<div class='result'>").text("Amount Incorrect: "+incorrect);
        var playAgain = $("<div class='btn btn-default btn-sm play'>").text("Play again?");
        $("#question-section").html(qDiv).append(anOne).append(anTwo).append(playAgain);
        count=0;
    }
};

function startTimer(){
    if(!timeRunning){
        timeHolder = setInterval(timer, 1000);
        timeRunning = true;
    }
};

function stopTimer(){
    clearInterval(timeHolder);
    time = 30;
    timeRunning = false;
    $(".timer").html(time);
};

function timer(){
    if(time===0){
        stopTimer();
    }
    currTime = timeConverter(time);
    $(".timer").html(currTime);
    time--;
};

function timeConverter(t){
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
};

function questionTime(){
    $(".timer").html("00:00");
    startTimer();
        var qDiv = $("<div class='question'>").text(qArray[count].question);
        var anOne = $("<div class='btn btn-default btn-sm answer' data='"+qArray[count].answer1+"'>").text(qArray[count].answer1);
        var anTwo = $("<div class='btn btn-default btn-sm answer' data='"+qArray[count].answer2+"'>").text(qArray[count].answer2);
        var anThree = $("<div class='btn btn-default btn-sm answer' data='"+qArray[count].answer3+"'>").text(qArray[count].answer3);
        var anFour = $("<div class='btn btn-default btn-sm answer' data='"+qArray[count].answer4+"'>").text(qArray[count].answer4);
        var anFive = $("<div class='btn btn-default btn-sm answer' data='"+qArray[count].answer5+"'>").text(qArray[count].answer5);
        $("#question-section").html(qDiv).append(anOne).append(anTwo).append(anThree).append(anFour).append(anFive);
};

$(".btn").click(questionTime);

$("#question-section").on("click", ".answer", function(){
    var chosenAnswer = $(this).attr("data");
    if(chosenAnswer===qArray[count].realAnswer){
        alert("Correct! The answer is "+qArray[count].realAnswer);
        count++;
        correct++;
        check();
    }
    else{
        alert("Wrong! The correct answer is "+qArray[count].realAnswer);
        count++;
        incorrect++;
        check();
   }
});

});

