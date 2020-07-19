var now = new Date();
now.setTime(0,9,30,0);

var sunday = new Date(now);
sunday.setDate(sunday.getDate() - sunday.getDay() + 7);

consol.log(sunday);



var date = new Date();
var day = date.getDay();

if (day == 0) {
var end = date
}
else if (day > 0) {
var sunday = ((day + (0 + 7 - day)) % 7);
}


console.log(day);
console.log(sunday);



// Works to get current date and change time to 9:30am
var now = new Date();

now.setHours(09);
now.setMinutes(30);
now.setSeconds(00);


document.write(now);
