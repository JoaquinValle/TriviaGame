$(document).ready(function(){

    var questions = {
        question1: {
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
        question2: {
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
        question3: {
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
        question4: {
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
        question5: {
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
        question6: {
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
                questionText.text("Out of time!")
            }
            answerClick(1)
            answerClick(2)
            answerClick(3)
            answerClick(4)

            function clearElements() {
                $("#options").text("")
            }

            function answerClick(clicked) {
                $("#" + clicked).on("click", function() {
                    clearInterval(intervalID)
                    if ($(this).attr("id") === questions.question1.correctAnswer) {
                        questionText.text("Correct Answer")
                        for(i = 1; i < 5; i++) {
                            $("#" + i).off("click")
                        }
                        setTimeout(clearElements, 4000)
                        questionCount++
                    }
                    else {
                        questionText.text("Incorrect Answer")
                        for(i = 1; i < 5; i++) {
                            $("#" + i).off("click")
                        }
                        setTimeout(clearElements, 4000)
                        questionCount++
                    }
                })
            }
        }

        var timeText = $("<div id='time'></div> ")
        timeText.text("Time Remaining: " + timeLeft)
        $("#content").append(timeText)

        var questionText = $("<div>")
        questionText.text(questions.question1.question)
        $("#content").append(questionText)

        var options = $("<div id='options'></div>")
        $("#content").append(options)

        var possibleAnswers = []

        onQuestion(questionCount)

        function onQuestion(qCount) {
            if (qCount ===1) {
            possibleAnswers = [questions.question1.answers.answerA,questions.question1.answers.answerB,
                               questions.question1.answers.answerC,questions.question1.answers.answerD]
            }
            if (qCount ===2) {
                possibleAnswers = [questions.question2.answers.answerA,questions.question2.answers.answerB,
                                   questions.question2.answers.answerC,questions.question2.answers.answerD]
                }
            if (qCount ===3) {
                possibleAnswers = [questions.question3.answers.answerA,questions.question3.answers.answerB,
                                   questions.question3.answers.answerC,questions.question3.answers.answerD]
                }
            if (qCount ===4) {
                possibleAnswers = [questions.question4.answers.answerA,questions.question4.answers.answerB,
                                   questions.question4.answers.answerC,questions.question4.answers.answerD]
                }
            if (qCount ===5) {
                possibleAnswers = [questions.question5.answers.answerA,questions.question5.answers.answerB,
                                   questions.question5.answers.answerC,questions.question5.answers.answerD]
                }
            if (qCount ===6) {
                possibleAnswers = [questions.question6.answers.answerA,questions.question6.answers.answerB,
                                   questions.question6.answers.answerC,questions.question6.answers.answerD]
                }
        }    

        for (i = 0; i < possibleAnswers.length; i++) {
            var optionText = $("<div id='" + (i+1) + "'></div>")
            var option = possibleAnswers[i]
            optionText.text(option)
            $("#options").append(optionText)
        }
    })
})