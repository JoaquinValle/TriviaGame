$(document).ready(function(){

    var questions = {
        question1: {
            count: 1,
            question: "Test Question One",
            answers: {
                answerA: "Test A",
                answerB: "Test B",
                answerC: "Test C",
                answerD: "Test D"
            },
            correctAnswer: "2"
        },
        question2: {
            count: 2,
            question: "Test Question Two",
            answers: {
                answerA: "Option A",
                answerB: "Option B",
                answerC: "Option C",
                answerD: "Option D"
            },
            correctAnswer: "3"
        },
        question3: {
            count: 3,
            question: "Test Question Three",
            answers: {
                answerA: "Test A",
                answerB: "Test B",
                answerC: "Test C",
                answerD: "Test D"
            },
            correctAnswer: "2"
        },
        question4: {
            count: 4,
            question: "Test Question Four",
            answers: {
                answerA: "Option A",
                answerB: "Option B",
                answerC: "Option C",
                answerD: "Option D"
            },
            correctAnswer: "1"
        },
        question5: {
            count: 5,
            question: "Test Question Five",
            answers: {
                answerA: "Test A",
                answerB: "Test B",
                answerC: "Test C",
                answerD: "Test D"
            },
            correctAnswer: "3"
        },
        question6: {
            count: 6,
            question: "Test Question Six",
            answers: {
                answerA: "Option A",
                answerB: "Option B",
                answerC: "Option C",
                answerD: "Option D"
            },
            correctAnswer: "4"
        },
    }
    
    var timeLeft = 10
    var intervalID
    var questionCount = 1
    var possibleAnswers = []
    var timeText = $("<div id='time'></div> ")
    var questionText = $("<div>")
    var options = $("<div id='options'></div>")
    var totalAnswers = ["2", "3", "2", "1", "3", "4"]


    $("#start").on("click", function() {

        $("#content").text("")
        intervalID = setInterval(count, 1000)
   
        timeText.text("Time Remaining: " + timeLeft)
        $("#content").append(timeText)

        onQuestion(questionCount)
        $("#content").append(questionText)

        $("#content").append(options)
        for (i = 0; i < possibleAnswers.length; i++) {
            var optionText = $("<div class='event' id='" + (i+1) + "'></div>")
            var option = possibleAnswers[i]
            optionText.text(option)
            $("#options").append(optionText)
        }
        console.log("Initial Count: " + questionCount)

        //$("#1").on("click", answerClick(1))
        //$("#2").on("click", answerClick(2))
        //$("#3").on("click", answerClick(3))
        //$("#4").on("click", answerClick(4))

        $(".event").on("click", function(){
            console.log(this)
            answerClick($(this).attr("id"))
        })
    })

    function count() {
        timeLeft--
        timeText.text("Time Remaining: " + timeLeft)
        noTime()
    }

    function noTime() {
        if (timeLeft === 0) {
            clearInterval(intervalID)
            questionText.text("Out of time!")
            offClick()
            setTimeout(clearElements, 4000)
            console.log("Count: " + questionCount)
        }
    }

    function answerClick(clicked) {
            clearInterval(intervalID)
             for (i = 1; i < 7; i++) {
                if (questionCount === i) {
                    if (clicked === totalAnswers[i-1]) {
                        questionText.text("Correct Answer")
                        offClick()
                        setTimeout(clearElements, 4000)
                        break
                    }
                    else if (clicked !== totalAnswers[i-1]) {
                        questionText.text("Incorrect Answer")
                        offClick()
                        setTimeout(clearElements, 4000)
                        break
                    }
                } 
            } 
            /*if (questionCount === 1) {
                if ($(this).attr("id") === questions.question1.correctAnswer) {
                    questionText.text("Correct Answer")
                    offClick()
                    setTimeout(clearElements, 4000)
                }
                else if ($(this).attr("id") !== questions.question1.correctAnswer) {
                    questionText.text("Incorrect Answer")
                    offClick()
                    setTimeout(clearElements, 4000)
                }
            }
            else if (questionCount === 2) {
                if ($(this).attr("id") === questions.question2.correctAnswer) {
                    questionText.text("Correct Answer")
                    offClick()
                    setTimeout(clearElements, 4000)
                }
                else if ($(this).attr("id") !== questions.question2.correctAnswer) {
                    questionText.text("Incorrect Answer")
                    offClick()
                    setTimeout(clearElements, 4000)
                }
            }
            else if (questionCount === 3) {
                if ($(this).attr("id") === questions.question3.correctAnswer) {
                    questionText.text("Correct Answer")
                    offClick()
                    setTimeout(clearElements, 4000)
                }
                else if ($(this).attr("id") !== questions.question3.correctAnswer) {
                    questionText.text("Incorrect Answer")
                    offClick()
                    setTimeout(clearElements, 4000)
                }
            }
            else if (questionCount === 4) {
                if ($(this).attr("id") === questions.question4.correctAnswer) {
                    questionText.text("Correct Answer")
                    offClick()
                    setTimeout(clearElements, 4000)
                }
                else if ($(this).attr("id") !== questions.question4.correctAnswer) {
                    questionText.text("Incorrect Answer")
                    offClick()
                    setTimeout(clearElements, 4000)
                }
            }
            else if (questionCount === 5) {
                if ($(this).attr("id") === questions.question5.correctAnswer) {
                    questionText.text("Correct Answer")
                    offClick()
                    setTimeout(clearElements, 4000)
                }
                else if ($(this).attr("id") !== questions.question5.correctAnswer) {
                    questionText.text("Incorrect Answer")
                    offClick()
                   setTimeout(clearElements, 4000)
                }
            }
            else if (questionCount === 6) {
                if ($(this).attr("id") === questions.question6.correctAnswer) {
                    questionText.text("Correct Answer")
                    offClick()
                    setTimeout(clearElements, 4000)
                }
                else if ($(this).attr("id") !== questions.question6.correctAnswer) {
                    questionText.text("Incorrect Answer")
                    offClick()
                    setTimeout(clearElements, 4000)
                }
            }*/
        //setTimeout(clearElements, 4000)
    }
    
    function offClick() {
        for(i = 1; i < 5; i++) {
            $("#" + i).off("click")
        }
    }

    function clearElements() {
        $("#options").text("")
        questionCount++
        console.log("Count: " + questionCount)
        for (i = 0; i < possibleAnswers.length; i++) {
            onQuestion(questionCount)
            timeLeft = 10
            timeText.text("Time Remaining: " + timeLeft)
            clearInterval(intervalID)
            intervalID = setInterval(count, 1000)
            var optionText = $("<div id='" + (i+1) + "'></div>")
            var option = possibleAnswers[i]
            optionText.text(option)
            $("#options").append(optionText)
        }
    }

    function onQuestion(qCount) {
        if (qCount === 1) {
            questionText.text(questions.question1.question)
            possibleAnswers = [questions.question1.answers.answerA,questions.question1.answers.answerB,
                               questions.question1.answers.answerC,questions.question1.answers.answerD]
            }
        if (qCount === 2) {
            questionText.text(questions.question2.question)
            possibleAnswers = [questions.question2.answers.answerA,questions.question2.answers.answerB,
                               questions.question2.answers.answerC,questions.question2.answers.answerD]
                }
        if (qCount === 3) {
            questionText.text(questions.question3.question)
            possibleAnswers = [questions.question3.answers.answerA,questions.question3.answers.answerB,
                               questions.question3.answers.answerC,questions.question3.answers.answerD]
                }
        if (qCount === 4) {
            questionText.text(questions.question4.question)
            possibleAnswers = [questions.question4.answers.answerA,questions.question4.answers.answerB,
                               questions.question4.answers.answerC,questions.question4.answers.answerD]
                }
        if (qCount === 5) {
            questionText.text(questions.question5.question)
            possibleAnswers = [questions.question5.answers.answerA,questions.question5.answers.answerB,
                               questions.question5.answers.answerC,questions.question5.answers.answerD]
                }
        if (qCount === 6) {
            questionText.text(questions.question6.question)
            possibleAnswers = [questions.question6.answers.answerA,questions.question6.answers.answerB,
                               questions.question6.answers.answerC,questions.question6.answers.answerD]
                }
    }    
})