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
document.getElementById("demo").innerHTML = "Today is " + days[d.getDay()] + '.' + " The current time is " + h + " " + ampm + " : " + m + " : " + s;


// triangle problem starting
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);
document.getElementById("triangle").innerHTML = area.toFixed(4);


// this is where the temp will start
function toCelsius(f) {
    return (5/9) * (f-32);
}
document.getElementById("temp").innerHTML = "The temperature in Celsius would be " + toCelsius(77);