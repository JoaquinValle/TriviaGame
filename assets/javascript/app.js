$(document).ready(function(){

    var questions = {
        totalQuestions: 10,
        question1: {
            question: "Pinotage is a hybrid vine from which two grapes?",
            answers: {
                answerA: "A. Grenache and Pinot Meunier.",
                answerB: "B. Pinot Noir and Cinsault.",
                answerC: "C. Cabernet Sauvignon and Grenache.",
                answerD: "D. Syrah and Peloursin."
            },
            correctAnswer: "2"
        },
        question2: {
            question: "Which region in Champagne is the most important for growing Chardonnay?",
            answers: {
                answerA: "A. Aube.",
                answerB: "B. Côte de Sezanne.",
                answerC: "C. Côte de Blancs.",
                answerD: "D. Montagne de Reims."
            },
            correctAnswer: "3"
        },
        question3: {
            question: "Where is the wine region of Lodi located?",
            answers: {
                answerA: "A. Provence, France.",
                answerB: "B. California, USA.",
                answerC: "C. Western Australia.",
                answerD: "D. Puglia, Italy."
            },
            correctAnswer: "2"
        },
        question4: {
            question: "When talking of Sauterns, what type of wine would you find?",
            answers: {
                answerA: "A. Very sweet wine affected by Botrytis Cinerea.",
                answerB: "B. Fortified red dessert wine.",
                answerC: "C. High tannin, mid acidity red blend.",
                answerD: "D. Unripe, high acid white wine."
            },
            correctAnswer: "1"
        },
        question5: {
            question: "Which acid is abundant in red wine grapes?",
            answers: {
                answerA: "A. Acetic acid.",
                answerB: "B. Ascorbic acid.",
                answerC: "C. Tartaric acid.",
                answerD: "D. Butyric acid."
            },
            correctAnswer: "3"
        },
        question6: {
            question: "What is an accurate description for 2,4,6-Trichloroanisole?",
            answers: 
                {
                answerA: "A. Damage caused by exposure to excessive radiation, usually UV.",
                answerB: "B. Wine with exposure to too much heat during storage.",
                answerC: "C. Contamination caused by too much oxygen exposure.",
                answerD: "D. A chemical contaminant due to a problem with the cork."
            },
            correctAnswer: "4"
        },
        question7: {
            question: "How many litters are in a Bordeaux barrel?",
            answers: 
                {
                answerA: "A. 100 liters.",
                answerB: "B. 185 liters.",
                answerC: "C. 205 liters.",
                answerD: "D. 225 liters."
            },
            correctAnswer: "4"
        },
        question8: {
            question: "Sekt is a sparkling wine from which country?",
            answers: 
                {
                answerA: "A. Italy.",
                answerB: "B. Germany.",
                answerC: "C. Spain.",
                answerD: "D. France."
            },
            correctAnswer: "2"
        },
        question9: {
            question: "What part of the grapes contain tannins?",
            answers: 
                {
                answerA: "A. Skins, seeds, and stems.",
                answerB: "B. Pulp and skin.",
                answerC: "C. Only skins.",
                answerD: "D. Tannins are not in the grapes and are a result of vinification."
            },
            correctAnswer: "1"
        },
        question10: {
            question: "Why are ladybuggs a problem in wine production?",
            answers: 
                {
                answerA: "A. They produce a bad flavor if they get pressed with the grapes.",
                answerB: "B. They attack the vine and kill it..",
                answerC: "C. They attract other pests that affect the vines.",
                answerD: "D. They eat the grapes and the vines produce a lower quality grape."
            },
            correctAnswer: "1"
        },
    }
    
    var timeChoose
    var timeLeft
    var intervalID
    var scoreInterval
    var thisOption
    var scoreRate
    var questionCount = 1
    var scoreCount = 0
    var correctCount = 0
    var incorrectCount = 0
    var noTimeCount = 0
    var initialScore = 0
    var currentScore
    var totalAnswers = []
    var possibleAnswers = []
    var timeText = $("<div id='time'></div> ")
    var scoreText = $("<div id='score'></div> ")
    var questionText = $("<div id='question'</div>>")
    var options = $("<div id='options'></div>")
    var responseText = $("<div id='response'></div>")
    var questionCounter = $("<div id='questionCounter'></div>")
    var ABCD = ["A", "B", "C", "D"]

    refreshAnswersArr()
    timeframe()
    start()

    function refreshAnswersArr() {
        totalAnswers = []
        for (i=0; i < questions.totalQuestions; i++) {
            totalAnswers.push(questions['question' + (i + 1)].correctAnswer)
        }
    }

    function timeframe() {
        $(".timeframe").on("click", function() {
            $(".timeframe").removeAttr("disabled")
            $(this).attr("disabled", true)
            $("#start").removeAttr("disabled")
            timeChoose = $(this).attr("value")
            timeLeft = timeChoose

            if ($(this).attr("value") === "10") {
                initialScore = 2970
                scoreRate = 30
            }
            else if ($(this).attr("value") === "20") {
                initialScore = 1990
                scoreRate = 10
            }  
            else if ($(this).attr("value") === "30") {
                initialScore = 897
                scoreRate = 3 
            }      
            console.log($(this).attr("value") + " seconds chosen.")
        })
    }

    function start() {
        $("#start").on("click", function() {

            $("#content").text("")
            intervalID = setInterval(count, 1000)

            questionCounter.text("Question " + questionCount + "/" + questions.totalQuestions)
            $("#content").append(questionCounter)
    
            currentScore = initialScore
            scoreText.text("Question Score: " + initialScore)
            scoreInterval = setInterval(scoreRefresh, 100)
            $("#content").append(scoreText)

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

            $("#content").append(responseText)

            console.log("----------------------------------------------------")
            console.log("Initial Question Count: " + questionCount)
            optionClicked()  
        })
    }

    function optionClicked(){
        $(".event").on("click", function(){
            answerCheck($(this).attr("id"))
            thisOption = $(this)
            $(".event").attr("turnOff", " ")
            $(this).attr("thisOption", " ")

        })
    } 

    function scoreRefresh() {
        currentScore = currentScore - scoreRate
        scoreText.text("Question Score: " + currentScore)   
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
            responseText.attr("no-time", " ")
            scoreCount = scoreCount + currentScore
            console.log("Score Count: " + scoreCount)
            clearInterval(scoreInterval)
            responseText.text("Out of time!")

            offClick()
            setTimeout(clearElements, 3000)
        }
    }

    function answerCheck(clicked) {
        clearInterval(intervalID)
        clearInterval(scoreInterval)
            for (i = 1; i < (questions.totalQuestions) + 1; i++) {
            if (questionCount === i) {
                if (clicked === totalAnswers[i-1]) {
                    correctCount++
                    scoreCount = scoreCount + currentScore
                    console.log("Score Count: " + scoreCount)
                    responseText.attr("correct", " ")
                    responseText.text("Correct Answer")
                    offClick()
                    setTimeout(clearElements, 3000)
                    
                    break
                }
                else if (clicked !== totalAnswers[i-1]) {
                    incorrectCount++
                    currentScore = 0
                    scoreCount = scoreCount + currentScore
                    scoreText.text("Question Score: " + currentScore)
                    console.log("Score Count: " + scoreCount)
                    responseText.attr("incorrect", " ")
                    responseText.text("Incorrect Answer. The Correct answer was " + rightanswer(questionCount))
                    offClick()
                    setTimeout(clearElements, 3000)
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
        responseText.removeAttr("correct")
        responseText.removeAttr("incorrect")
        responseText.removeAttr("no-Time")
        questionCount++
        timeLeft = timeChoose
        timeText.text("Time Remaining: " + timeLeft)
        currentScore = initialScore
        scoreText.text("Question Score: " + initialScore)
        $(thisOption).removeAttr("thisOption")
        $(".event").removeAttr("turnOff")
        clearInterval(intervalID)
        intervalID = setInterval(count, 1000)
        clearInterval(scoreInterval)
        scoreInterval = setInterval(scoreRefresh, 100)
        questionCounter.text("Question " + questionCount + "/" + questions.totalQuestions)
        if (questionCount < (questions.totalQuestions + 1)) {
            for (i = 0; i < possibleAnswers.length; i++) {
                var optionText = $("<div class='event' id='" + (i+1) + "'></div>")
                var option = possibleAnswers[i]
                optionText.text(option)
                $("#options").append(optionText)
            }
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
            clearInterval(intervalID)
            clearInterval(scoreInterval)
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

            var scoreTotal = $("<div id='score-total'></div>")
            scoreTotal.text("Total Score: " + scoreCount)
            $("#content").append(scoreTotal)

            var reset = $("<button id='reset'>Reset</button>")
            $("#content").append(reset)
            fullReset()
        }
    }

    function onQuestion(qCount) {
        for (i = 1; i < (questions.totalQuestions) + 1; i++) {
            if (qCount === i) {
                questionText.text(questions['question' + i].question)
                possibleAnswers = [questions['question' + i].answers.answerA,questions['question' + i].answers.answerB,
                                   questions['question' + i].answers.answerC,questions['question' + i].answers.answerD]
                }
        }
        for (i = 0; i < possibleAnswers.length; i++) {
            var option = possibleAnswers[i]
            $("#" + (i + 1)).text(option)
        }

    }

    function fullReset() {
        $("#reset").on("click", function() {
            correctCount = 0
            incorrectCount = 0
            noTimeCount = 0
            questionCount = 1
            scoreCount = 0
            possibleAnswers = []
            $("#content").text("")

                var firstRow = $("<div class='row' id='first-row'></div>")
                $("#content").append(firstRow)

                    var subRow1 = $("<div class='col-3'></div>")
                    $("#first-row").append(subRow1)

                    var subRow2 = $("<div class='col-6' id='sub-row-2'></div>")
                    $("#first-row").append(subRow2)

                        var startBTN = $("<button id='start' type='button' class='btn-block' disabled>Start</button>")
                        $("#sub-row-2").append(startBTN)

                    var subRow3 = $("<div class='col-3'></div>")
                    $("#first-col").append(subRow3)

                var secondRow = $("<div class='row mt-5' id='second-row'></div>")
                $("#content").append(secondRow)

                    var colBTN = $(" <div class='col-12' id='col-btn'></div>")
                    $("#second-row").append(colBTN)

                        var tenSecs = $("<button class='timeframe' value='10'>10 Seconds</button>")
                        $("#col-btn").append(tenSecs)

                        var twentySecs = $("<button class='timeframe' value='20'>20 Seconds</button>")
                        $("#col-btn").append(twentySecs)

                        var thirtySecs = $("<button class='timeframe' value='30'>30 Seconds</button>")
                        $("#col-btn").append(thirtySecs)
        refreshAnswersArr()
        timeframe()
        start()
        })
    }
})