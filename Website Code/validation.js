//Creates function with "form" as parameter for Actor searches, adding and deleting
function validationActor(form) {
    //Creates a variable and sets it to 1
    var result = 1;
    //Creates a variable and sets it to an empty string
    var message = "";
    //Creates variable which contains all characters which will be accepted by the input for "Actor Name"
    var characters = /^[a-zA-Z\\.\\-\\'\\ ]+$/;
    //for loop where i is incremented till it reaches the end of the form
    for (var i = 0; i < form.length; i++) {
        //if the form element values contain no input
        if (form.elements[i].value.trim() == "") {
            //store an error statement as the variable "message"
            message += "" + form.elements[i].name + " can't be blank. ";
            //Change result variable to 0 from 1
            result = 0;
        }
        //if the form element values contain no values which match the "characters" variable
        if (!form.elements[i].value.trim().match(characters)) {
            //store an error statement as the variable "message"
            message += "" + form.elements[i].name + " has invalid characters. ";
            //Change result variable to 0 from 1
            result = 0;
        }
    }
    //if the variable "result" is 0 then
    if (result == 0) {
        //print out stored statement in "message"
        alert(message);
        //return false
        return false;
    }
    else {
        //else return true
        return true;
    }
}
//Creates function with "form" as parameter for Movie searches and deleting
function validationMovie(form) {
    //Creates a variable and sets it to 1
    var result = 1;
    //Creates a variable and sets it to an empty string
    var message = "";
    //Creates variable which contains all characters which will be accepted by the input for Movie inputs
    var characters = /^[0-9a-zA-Z\\.\\,\\:\\-\\!\\?\\'\\&\\"\\ ]+$/;
    //for loop where i is incremented till it reaches the end of the form
    for (var i = 0; i < form.length; i++) {
        //if the form element values contain no input
        if (form.elements[i].value.trim() == "") {
            //store an error statement as the variable "message"
            message += "" + form.elements[i].name + " can't be blank. ";
            //Change result variable to 0 from 1
            result = 0;
        }
        //if the form element values contain no values which match the "characters" variable
        if (!form.elements[i].value.trim().match(characters)) {
            //store an error statement as the variable "message"
            message += "" + form.elements[i].name + " has invalid characters. ";
            //Change result variable to 0 from 1
            result = 0;
        }
    }
    //if the variable "result" is 0 then
    if (result == 0) {
        //print out stored statement in "message"
        alert(message);
        return false;
    }
    else {
        //else return true
        return true;
    }
}
function validationAddMovie(form) {
    //creates variable to store date
    var day = new Date();
    //creates variable to store current year
    var year = day.getFullYear();
    //Creates a variable and sets it to 1
    var result = 1;
    //Creates a variable and sets it to an empty string
    var message = "";
    //Creates variable which contains all characters which will be accepted by the input for Movie inputs
    var characters = /^[0-9a-zA-Z\\.\\,\\:\\-\\!\\?\\'\\&\\"\\ ]+$/;
    //for loop where i is incremented till it reaches the end of the form
    for (var i = 0; i < form.length; i++) {
        //if the form element values contain no input
        if (form.elements[i].value.trim() == "") {
            //store an error statement as the variable "message"
            message += "" + form.elements[i].name + " can't be blank. ";
            //Change result variable to 0 from 1
            result = 0;
        }
        //if the form element values contain no values which match the "characters" variable
        if (!form.elements[i].value.trim().match(characters)) {
            //store an error statement as the variable "message"
            message += "" + form.elements[i].name + " has invalid characters. ";
            //Change result variable to 0 from 1
            result = 0;
        }
    }
    //if the input "Movie Price" value is less than 0
    if (form.MoviePrice.value.trim() < 0) {
        //store an error statement as the variable "message"
        message += "" + form.MoviePrice.name + " has to be over 0. ";
        //Change result variable to 0 from 1
        result = 0;
    }
    //if the input "Movie Year" value is not 4 characters long
    if (form.MovieYear.value.trim().length != 4) {
        //store an error statement as the variable "message"
        message += "" + form.MovieYear.name + " has to be 4 characters long. ";
        //Change result variable to 0 from 1
        result = 0;
    }
    //if the input "Movie Year" value is less than 1900
    if (form.MovieYear.value.trim() < 1900) {
        //store an error statement as the variable "message"
        message += "" + form.MovieYear.name + " has to be over 1900. ";
        //Change result variable to 0 from 1
        result = 0;
    }
    //if the input "Movie Year" value is greater than the current year
    if (form.MovieYear.value.trim() > year) {
        //store an error statement as the variable "message"
        message += "" + form.MovieYear.name + " has to be " + year + " or under. ";
        //Change result variable to 0 from 1
        result = 0;
    }
    //if the variable "result" is 0 then
    if (result == 0) {
        //print out stored statement in "message"
        alert(message);
        return false;
    }
    else {
        //else return true
        return true;
    }
}