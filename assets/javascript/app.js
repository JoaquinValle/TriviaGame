$(document).ready(function(){

    var questions = {
        questionOne: {
            question: "Text",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "Correct"
        },
        questionTwo: {
            question: "Text",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "Correct"
        },
        questionThree: {
            question: "Text",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "Correct"
        },
        questionFour: {
            question: "Text",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "Correct"
        },
        questionFive: {
            question: "Text",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "Correct"
        },
        questionSix: {
            question: "Text",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "Correct"
        },
    }

    var timeLeft = 30
    var intervalID

   


$("#start").on("click", function() {
    $("#content").text("")
    intervalID = setInterval(count, 1000)

    function count() {
        timeLeft--
        timeText.text("Time Remaining: " + timeLeft)
    }

    var timeText = $("<div id='time'></div> ")
    timeText.text("Time Remaining: " + timeLeft)
    $("#content").append(timeText)

    var questionText = $("<div>")
    var question = "Question"
    questionText.text(question)
    $("#content").append(questionText)

    var options = $("<div id='options'></div>")
    $("#content").append(options)

    var possibleAnswers = ["a", "b", "c", "d"]

for (i = 0; i < possibleAnswers.length; i++) {
    var optionText = $("<div>")
    var option = possibleAnswers[i]
    optionText.text(option)
    $("#options").append(optionText)
}

})



})