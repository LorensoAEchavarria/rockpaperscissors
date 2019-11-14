// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
 let input =$("#input").val();

 if (input === "rock" ) {
$("#userChoice").html(`<p> ${input} </p>`);
}else if (input === "paper" ){
    $("#userChoice").html(`<p> ${input} </p>`);
}else if(input === "sissors" ) {
    $("#userChoice").html(`<p> ${input} </p>`);
}else {
    alert("Please put rock,paper, or scissors")
}

var choice = Math.random();
if (choice < .33){
    $("#computerChoice").html("scissors");
}else if (choice < .66){
    $("#computerChoice").html("paper");
}else{
    $("#computerChoice").html("rock");
}

i


});

// DOCUMENT READY FUNCTION BELOW

