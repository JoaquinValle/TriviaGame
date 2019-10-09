$(document).ready(function(){

    var questions = {
        totalQuestions: 6,
        question1: {
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
            question: "Test Question Six",
            answers: [
                {
                answerA: "Option A",
                answerB: "Option B",
                answerC: "Option C",
                answerD: "Option D"
            }],
            correctAnswer: "4"
        },
    }
    
    var timeChoose
    var timeLeft
    var intervalID
    var questionCount = 1
    var possibleAnswers = []
    var timeText = $("<div id='time'></div> ")
    var questionText = $("<div id='question'</div>>")
    var options = $("<div id='options'></div>")
    var correctCount = 0
    var incorrectCount = 0
    var noTimeCount = 0
    var responseText = $("<div id='response'></div>")
    var questionCounter = $("<div id='questionCounter'></div>")
    var ABCD = ["A", "B", "C", "D"]

/*var totalAnswers = []
    for (i=0; i < questions.totalQuestions; i++) {
        totalAnswers.push(questions.question)
    } */
    
    totalAnswers = [questions.question1.correctAnswer, questions.question2.correctAnswer, questions.question3.correctAnswer, 
                    questions.question4.correctAnswer, questions.question5.correctAnswer, questions.question6.correctAnswer]

    $(".timeframe").on("click", function() {
        $(".timeframe").removeAttr("disabled")
        $(this).attr("disabled", true)
        $("#start").removeAttr("disabled")
        timeChoose = $(this).attr("value")
        timeLeft = timeChoose
        console.log($(this).attr("value") + " seconds chosen.")
    })

    $("#start").on("click", function() {

        $("#content").text("")
        intervalID = setInterval(count, 1000)

        questionCounter.text("Question " + questionCount + "/" + questions.totalQuestions)
        $("#content").append(questionCounter)
   
        timeText.text("Time Remaining: " + timeLeft)
        $("#content").append(timeText)

        $("#content").append(responseText)

        onQuestion(questionCount)
        $("#content").append(questionText)

        $("#content").append(options)
        for (i = 0; i < possibleAnswers.length; i++) {
            var optionText = $("<div class='event' id='" + (i+1) + "'></div>")
            var option = possibleAnswers[i]
            optionText.text(option)
            $("#options").append(optionText)
        }
        console.log("----------------------------------------------------")
        console.log("Initial Question Count: " + questionCount)
        optionClicked()  
    })

    function optionClicked(){
        $(".event").on("click", function(){
            answerCheck($(this).attr("id"))
        })
    } 

    function count() {
        timeLeft--
        timeText.text("Time Remaining: " + timeLeft)
        noTime()
    }

    function noTime() {
        if (timeLeft === 0) {
            noTimeCount++
            clearInterval(intervalID)
            questionText.text("Out of time!")
            offClick()
            setTimeout(clearElements, 4000)
        }
    }

    function answerCheck(clicked) {
        clearInterval(intervalID)
            for (i = 1; i < (questions.totalQuestions) + 1; i++) {
            if (questionCount === i) {
                if (clicked === totalAnswers[i-1]) {
                    correctCount++
                    responseText.text("Correct Answer")
                    offClick()
                    setTimeout(clearElements, 4000)
                    
                    break
                }
                else if (clicked !== totalAnswers[i-1]) {
                    incorrectCount++
                    console.log(questionCount)
                    responseText.text("Incorrect Answer. The Correct answer was " + rightanswer(questionCount))
                    offClick()
                    setTimeout(clearElements, 4000)
                    break
                }
            } 
        } 
    }

    function rightanswer(questCount) {
        if (totalAnswers[questCount-1] === "1") {
            return(ABCD[0])
        }
        if (totalAnswers[questCount-1] === "2") {
            return(ABCD[1])
        }
        if (totalAnswers[questCount-1] === "3") {
            return(ABCD[2])
        }
        if (totalAnswers[questCount-1] === "4") {
            return(ABCD[3])
        }
    }
    
    function offClick() {
        for(i = 1; i < 5; i++) {
            $("#" + i).off("click")
        }
    }

    function clearElements() {
        $("#options").text("")
        $("#response").text("")
        questionCount++
        timeLeft = timeChoose
        timeText.text("Time Remaining: " + timeLeft)

        clearInterval(intervalID)
        intervalID = setInterval(count, 1000)
        questionCounter.text("Question " + questionCount + "/" + questions.totalQuestions)
        for (i = 0; i < possibleAnswers.length; i++) {
            var optionText = $("<div class='event' id='" + (i+1) + "'></div>")
            var option = possibleAnswers[i]
            optionText.text(option)
            $("#options").append(optionText)
        }
        onQuestion(questionCount)
        optionClicked()
        results(questionCount)
        console.log("----------------------------------------------------")
        console.log("Question: " + questionCount)
        console.log("Correct: " + correctCount + ".     Incorrect: " + incorrectCount + ".     Not Answered: " + noTimeCount)
    }

    function results(tCount) {
        if (tCount > questions.totalQuestions) {
            $("#content").text("")
            var endMessage = $("<div id='endMessage'></div>")
            endMessage.text("All done! Here is how you did:")
            $("#content").append(endMessage)

            var correct = $("<div id='correct'></div>")
            correct.text("Correct answers: " + correctCount)
            $("#content").append(correct)

            var incorrect = $("<div id='incorrect'></div>")
            incorrect.text("Incorrect answers: " + incorrectCount)
            $("#content").append(incorrect)

            var outOfTime = $("<div id='outOfTime'></div>")
            outOfTime.text("Out of time: " + noTimeCount)
            $("#content").append(outOfTime)
        }
    }

    function onQuestion(qCount) {
        for (i = 1; i < (questions.totalQuestions) + 1; i++) {
            if (qCount === i) {
                questionText.text(questions['question' + i].question)
                possibleAnswers = [questions['question' + i].answers.answerA,questions.question1.answers.answerB,
                                   questions.question1.answers.answerC,questions.question1.answers.answerD]
                }
        }
    }
 
})