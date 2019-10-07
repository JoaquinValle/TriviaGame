$(document).ready(function(){

$("#start").on("click", function() {
    $("#content").text("")

    var timeText = $("<div>")
    var timeLeft = 30
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