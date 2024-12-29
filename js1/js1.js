// var num1 =+prompt("enter the frist number")
// var num2 = +prompt("enter the second number")
// sum=num1+num2;
// document.write("<h2>" +num1+ " + " +num2 +" = "+ sum + "</h2>");

// ########################################################################################

// var num =+prompt("enter the frist number")

// if (num % 2 === 0) {
//   document.write( num  +' is even');
// } else {
//   document.write(num + ' is odd');
// }

// ########################################################################################


// var question=prompt('enter month')
// switch (question) {
// case "january":
// case "march":
// case "may":
// case "july":
// case "august": 
// case "october":
// case "december":
// document.write("31 days");
// break;
// case "april":
// case "june":
// case "september":
// case "november":
// document.write("30 days");
// break;
// case "february":
// document.write("28 days");
// break
// }

// ###############################################################################

var num1 =+prompt("enter the frist number")
var num2 = +prompt("enter the second number")

if (num1 > num2) {
  document.write(num1 + " is greater than " + num2);
}
else if (num1 < num2) {
  document.write(num2 + " is greater than " + num1);
}
else{
  document.write(num1 + " is equal to " + num2);
}

