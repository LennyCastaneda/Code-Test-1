// creating a date object by using "new"
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var ampm = h >= 12 ? 'pm' : 'am';
// using modulo to change out in order to input am and  pm
h = h % 12;
h = h ? h : 12; // the hour '0' should be '12

// created an array to get the day of week
var days = 
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// sending output of information to html
document.getElementById("time").innerHTML = "Today is " + days[d.getDay()] + '.' + 
" The current time is " + h + " " + ampm + " : " + m + " : " + s;


// triangle problem starting
function findArea() {
var side1 = $('#side1').val(); 
var side2 = $('#side2').val(); 
var side3 = $('#side3').val();
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));

document.getElementById("triangle").innerHTML = "The area of your triangle would be " 
+ area.toFixed(4);
};


// Code for the display scroll
function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}

/*(function() {
    var word = 'Origin Code Academy Rocks!';

    document.getElementById('#scroll').innerHTML = word;

    setInterval(function() {
        var last = word.slice(-1);
        var curr = word.slice(0,-1);
        word = last+curr;
        document.getElementById('#scroll').innerHTML = word;
    },150);

})();*/


// leap year information
function findYear() {
var inputyear = $('#year').val();
var x = (inputyear % 100 === 0) ? (inputyear % 400 === 0) : (inputyear % 4 === 0);  
$("#leapYear").html('the year ' + inputyear + " " + "is " + x);
}
// alert(x);



// this is where the temp will start
/*function toCelsius(f) {
    return (5/9) * (f-32);
}*/

// Note that the Math.round method is used, so that the result will be returned as an integer.

function convert(degree) {
    if (degree == "C") {
        F = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(F);
    } else {
        C = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(C);
    }
}
