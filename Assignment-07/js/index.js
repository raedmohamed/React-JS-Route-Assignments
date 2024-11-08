//? 1- Write a program that allow to user enter number then print it

// var number = +window.prompt("Enter a Number");
// console.log(number);

//* --------------------------------------------------------------------------------

//?  2- Write a program that take number from user then print yes if that number can divide by 3
//?     and 4 otherwise print no

// var number = +window.prompt("Enter a Number");
// if (number % 3 === 0 && number % 4 === 0) console.log("Yes");
// else console.log("No");

//* --------------------------------------------------------------------------------

//? 3- Write a program that allows the user to insert 2 integers then print the max

// var number1 = +window.prompt("Enter First Number");
// var number2 = +window.prompt("Enter Secound Number");
// if (number1 > number2) console.log(number1);
// else console.log(number2);

//* --------------------------------------------------------------------------------

//? 4- Write a program that allows the user to insert an integer then print negative if it is
//?    negative number otherwise print positive.

// var number = +window.prompt("Enter First Number");
// if (number > 0) console.log("Positive");
// else if (number < 0) console.log("Negative");
// else console.log(number);

//* --------------------------------------------------------------------------------

//? 5- Write a program that take 3 integers from user then print the max element
//?    and the min element.

// var number1 = +window.prompt("Enter First Number");
// var number2 = +window.prompt("Enter Second Number");
// var number3 = +window.prompt("Enter Third Number");
// var max, min;

// if (number1 > number2 && number1 > number3) {
//   max = number1;
// } else if (number2 > number1 && number2 > number3) {
//   max = number2;
// } else {
//   max = number3;
// }

// if (number1 < number2 && number1 < number3) {
//   min = number1;
// } else if (number2 < number1 && number2 < number3) {
//   min = number2;
// } else {
//   min = number3;
// }

// console.log("Max: " + max + " Min: " + min);

//* --------------------------------------------------------------------------------

//? 6- Write a program that allows the user to insert integer number then
//?    check If a number is oven or odd

// var number = +window.prompt("Enter a Number");

// if (number % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

//* --------------------------------------------------------------------------------

//? 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
//?    then print vowel otherwise print consonant

// var char = window.prompt("Enter a Char a,e,I,o,u");

// switch (char) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
// }

// if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u"
// ) {
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }

//* --------------------------------------------------------------------------------

//? 9- Write a program that allows user to insert integer then print all numbers between 1 to
//?    that’s number

// var number = +window.prompt("Enter a Number");

// for (var i = 1; i <= number; i++) {
//   console.log(i);
// }

//* --------------------------------------------------------------------------------

//? 10- Write a program that allows user to insert integer then print a multiplication table up to 12.

// var number = +window.prompt("Enter a Number");

// for (var i = 1; i <= 12; i++) {
//   console.log(i + " * " + number + " = " + i * number);
// }

//* --------------------------------------------------------------------------------

//? 11- Write a program that allows to user to insert number then print all even numbers
//?     between 1 to this number

// var number = +window.prompt("Enter a Number");

// for (var i = 1; i <= number; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//* --------------------------------------------------------------------------------

//? 12- Write a program that take two integers then print the power

// var number1 = +window.prompt("Enter First Number");
// var number2 = +window.prompt("Enter Secound Number");

// console.log(number1 ** number2);

//* --------------------------------------------------------------------------------

//? 12- Write a program to enter marks of five subjects and calculate total, average and
//?     percentage.

// var number1 = +window.prompt("Enter First Number");
// var number2 = +window.prompt("Enter Secound Number");
// var number3 = +window.prompt("Enter Third Number");
// var number4 = +window.prompt("Enter Fourth Number");
// var number5 = +window.prompt("Enter fifth Number");

// var totalMarks = number1 + number2 + number3 + number4 + number5;
// var averageMarks = (number1 + number2 + number3 + number4 + number5) / 5;
// var percentageMarks = (totalMarks / 500) * 100;

// console.log(
//   "Total Marks: " + totalMarks + " ",
//   "Average Marks: " + averageMarks + " ",
//   "Percentage Marks: " + percentageMarks + "%"
// );

//* --------------------------------------------------------------------------------

//? 13- Write a program to input month number and print number of days in that
//?     month.

// var monthNumber = +window.prompt("Enter First Number");
// var year = 2024;

// var days;

// if (
//   monthNumber === 1 ||
//   monthNumber === 3 ||
//   monthNumber === 5 ||
//   monthNumber === 7 ||
//   monthNumber === 8 ||
//   monthNumber === 10 ||
//   monthNumber === 12
// ) {
//   days = 31;
// } else if (
//   monthNumber === 4 ||
//   monthNumber === 6 ||
//   monthNumber === 9 ||
//   monthNumber === 11
// ) {
//   days = 30;
// } else if (monthNumber === 2) {
//   // February: Check for leap year
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     days = 29;
//   } else {
//     days = 28;
//   }
// }

// console.log(days);

//* --------------------------------------------------------------------------------

//? 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade

// var totalSubjects = 5;
// var grade;

// for (var i = 1; i <= totalSubjects; i++) {
//   var marks = +window.prompt("Enter marks for subject " + i);
//   var percentage = (marks / 100) * 100;

//   if (percentage >= 90) {
//     grade = "A";
//   } else if (percentage >= 80) {
//     grade = "B";
//   } else if (percentage >= 70) {
//     grade = "C";
//   } else if (percentage >= 60) {
//     grade = "D";
//   } else if (percentage >= 40) {
//     grade = "E";
//   } else {
//     grade = "F";
//   }

//   console.log(
//     "Subject " + i + " - Percentage: " + percentage + "%, Grade: " + grade
//   );
// }

//* --------------------------------------------------------------------------------

//? 15- Write a program to print total number of days in month

// var monthNumber = +window.prompt("Enter First Number");
// var year = 2024;

// var days;

// switch (monthNumber) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     days = 30;
//     break;
//   case 2:
//     // February: Check for leap year
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       days = 29;
//     } else {
//       days = 28;
//     }
//     break;
//   default:
//     days = "Invalid month";
//     break;
// }

// console.log(days);

//* --------------------------------------------------------------------------------

//? 16- Write a program to check whether an alphabet is vowel or consonant

// var char = window.prompt("Enter a Char a,e,I,o,u");

// switch (char) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
// }

//* --------------------------------------------------------------------------------

//? 17- Write a program to find maximum between two numbers

// var number1 = +window.prompt("Enter First Number");
// var number2 = +window.prompt("Enter Second Number");

// switch (true) {
//   case number1 >= number2:
//     console.log("Max: " + number1 + " Min: " + number2);
//     break;
//   case number2 > number1:
//     console.log("Max: " + number2 + " Min: " + number1);
//     break;
//   default:
//     console.log("Unexpected input.");
//     break;
// }

//* --------------------------------------------------------------------------------

//? 18- Write a program to check whether a number is even or odd

// var number1 = +window.prompt("Enter a Number");

// switch (true) {
//   case number1 % 2 === 0:
//     console.log("Even");
//     break;
//   case number1 % 2 !== 0:
//     console.log("Odd");
//     break;
//   default:
//     console.log("Invalid input");
//     break;
// }

//* --------------------------------------------------------------------------------

//? 19- Write a program to check whether a number is positive or negative or zero

// var number1 = +window.prompt("Enter a Number");

// switch (true) {
//   case number1 > 0:
//     console.log("Positive");
//     break;
//   case number1 < 0:
//     console.log("Negative");
//     break;
//   default:
//     console.log(number1);
//     break;
// }

//* --------------------------------------------------------------------------------

//? 20- Write a program to create Simple Calculator

// var number1 = +window.prompt("Enter First Number");
// var char = window.prompt("Enter + or - or * or / ");
// var number2 = +window.prompt("Enter Second Number");

// switch (char) {
//   case "+":
//     console.log(number1 + number2);
//     break;
//   case "-":
//     console.log(number1 - number2);
//     break;
//   case "/":
//     console.log(number1 / number2);
//     break;
//   case "*":
//     console.log(number1 * number2);
//     break;
//   default:
//     console.log("Invalid operator");
//     break;
// }
