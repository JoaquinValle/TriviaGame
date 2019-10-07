$(document).ready(function(){

    var questions = {
        questionOne: {
            count: 1,
            question: "Test Question one",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "B"
        },
        questionTwo: {
            count: 2,
            question: "Text",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "C"
        },
        questionThree: {
            count: 3,
            question: "Text",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "B"
        },
        questionFour: {
            count: 4,
            question: "Text",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "A"
        },
        questionFive: {
            count: 5,
            question: "Text",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "C"
        },
        questionSix: {
            count: 6,
            question: "Text",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "D"
        },
    }

    var timeLeft = 10
    var intervalID
    var questionCount = 1

$("#start").on("click", function() {
    $("#content").text("")
    intervalID = setInterval(count, 1000)

    function count() {
        timeLeft--
        timeText.text("Time Remaining: " + timeLeft)
        console.log(timeLeft)
        if (timeLeft === 0) {
            clearInterval(intervalID)
            questionText.text("Nope! Wrong Answer")
        }
        answerClick(1)
        answerClick(2)
        answerClick(3)
        answerClick(4)

        function answerClick(clicked) {
            $("#" + clicked).on("click", function() {
                clearInterval(intervalID)
                questionText.text("Answer might be right")
            })
        }
        

    }

    var timeText = $("<div id='time'></div> ")
    timeText.text("Time Remaining: " + timeLeft)
    $("#content").append(timeText)

    var questionText = $("<div>")
    var question = "Question"
    questionText.text(questions.questionOne.question)
    $("#content").append(questionText)

    var options = $("<div id='options'></div>")
    $("#content").append(options)

    var possibleAnswers = ["answer 1", "answer 2", "answer 3", "answer 4"]

for (i = 0; i < possibleAnswers.length; i++) {
    var optionText = $("<div id='" + (i+1) + "'></div>")
    var option = possibleAnswers[i]
    optionText.text(option)
    $("#options").append(optionText)
}

})



})