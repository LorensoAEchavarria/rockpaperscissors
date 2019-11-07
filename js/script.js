// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
 let input =$("#input").val();
if (input === "rock" || input === "paper" || input === "scissors") {
$("#userChoice").html(`<p> ${input} </p>`);
}else{
    ("#result").append("<p>" + "Please put rock,paper, or scissors" + "</p>")
}

});

// DOCUMENT READY FUNCTION BELOW

