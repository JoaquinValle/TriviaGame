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
            correctAnswer: "2"
        },
        questionTwo: {
            count: 2,
            question: "Test Question Two",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "3"
        },
        questionThree: {
            count: 3,
            question: "Test Question Three",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "2"
        },
        questionFour: {
            count: 4,
            question: "Test Question Four",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "1"
        },
        questionFive: {
            count: 5,
            question: "Test Question Five",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "3"
        },
        questionSix: {
            count: 6,
            question: "Test Question Six",
            answers: {
                answerA: "A",
                answerB: "B",
                answerC: "C",
                answerD: "D"
            },
            correctAnswer: "4"
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
        //console.log(timeLeft)
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
                if ($(this).attr("id") === questions.questionOne.correctAnswer) {
                    questionText.text("Correct Answer")
                }
                else {
                questionText.text("Incorrect Answer")
                }
                
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

    var possibleAnswers = []

    if (questionCount === 1) {
    possibleAnswers = [questions.questionOne.answers.answerA,questions.questionOne.answers.answerB,
                       questions.questionOne.answers.answerC,questions.questionOne.answers.answerD]
    }


for (i = 0; i < possibleAnswers.length; i++) {
    var optionText = $("<div id='" + (i+1) + "'></div>")
    var option = possibleAnswers[i]
    optionText.text(option)
    $("#options").append(optionText)
}
})
})