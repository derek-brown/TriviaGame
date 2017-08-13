$(document).ready(function(){


var questions = {
    q1: {
        question: "How tall is Derek?",
        answerOne: "5 foot",
        answerTwo: "6 foot",
        answerThree: "5 foot 9 inches",
        answerFour: "5 foot 10 inces",
        answerFive: "5 foot 11 inches"
    },
    q2: {
        question: "How tall is Derek?",
        answerOne: "5 foot",
        answerTwo: "6 foot",
        answerThree: "5 foot 9 inches",
        answerFour: "5 foot 10 inces",
        answerFive: "5 foot 11 inches"
    },
    q3: {
        question: "How tall is Derek?",
        answerOne: "5 foot",
        answerTwo: "6 foot",
        answerThree: "5 foot 9 inches",
        answerFour: "5 foot 10 inces",
        answerFive: "5 foot 11 inches"
    },
    q4: {
        question: "How tall is Derek?",
        answerOne: "5 foot",
        answerTwo: "6 foot",
        answerThree: "5 foot 9 inches",
        answerFour: "5 foot 10 inces",
        answerFive: "5 foot 11 inches"
    },
    q5: {
        question: "How tall is Derek?",
        answerOne: "5 foot",
        answerTwo: "6 foot",
        answerThree: "5 foot 9 inches",
        answerFour: "5 foot 10 inces",
        answerFive: "5 foot 11 inches"
    }
};

    $(".answer1").on("click", function(){
        alert("It works! "+questions.q2.answerOne);
        console.log("Work!");
    });
});