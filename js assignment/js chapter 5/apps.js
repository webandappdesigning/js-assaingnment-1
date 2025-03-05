// *-----Chapter 5 Maths Expression Start-----*

// ==== Question 1 =====

// let firstNumber = +prompt("Enter First Number");
// let lastNumber = +prompt("Enter Last Number");
// let add = firstNumber + lastNumber
// document.write("sum of " + firstNumber + " and " + lastNumber + " is " + add);

// ==== Question 2 =====

// let firstNumber = +prompt("Enter First Number");
// let lastNumber = +prompt("Enter Last Number");
// let substraction = firstNumber - lastNumber;
// document.write("sum of " + firstNumber + " and " + lastNumber + " is " + substraction);

// let firstNumber = +prompt("Enter First Number");
// let lastNumber = +prompt("Enter Last Number");
// let multiply = firstNumber * lastNumber
// document.write("sum of " + firstNumber + " and " + lastNumber + " is " + multiply);

// let firstNumber = +prompt("Enter First Number");
// let lastNumber = +prompt("Enter Last Number");
// let divide = firstNumber / lastNumber
// document.write("sum of " + firstNumber + " and " + lastNumber + " is " + divide);

// let firstNumber = +prompt("Enter First Number");
// let lastNumber = +prompt("Enter Last Number");
// let modulus = firstNumber % lastNumber
// document.write("sum of " + firstNumber + " and " + lastNumber + " is " + modulus);

// ==== Question 3 =====
// ...... part a ......

// let number;

// ...... part b ......

// document.write("Value after variable declaration is: " + number + "<br>" );

// ...... part c ......

// number = 5;

// ...... part d ......

// document.write("Initial value is: " + number + "<br>" );

// ...... part e ......

// number++;

// ...... part f ......

// document.write("Value after increment is: " + number + "<br>");

// ...... part g ......

// number += 7;

// ...... part h ......

// document.write("Value after addition is: " + number + "<br>" );

// ...... part i ......

// number--;

// ...... part j ......

// document.write("Value after decrement is: " + number + "<br>" );

// ...... part k ......

// number =number % 3;

// ...... part l ......

// document.write("The reminder is: " + number + "<br>" );

// ==== Question 4 =====

// let ticketPrice = 600;
// let ticketQuantity = 5;
// let price = ticketPrice * 5;
// document.write("Total cost to buy " + ticketQuantity + " ticket to a movie is: " + price + "PKR" );

// ==== Question 5 =====

// document.write('Table of '+6+'<br>')
// for(var i=1;i<=10;i++){
//     document.write('6 X '+i+' ='+6*i+"<br>")
// }

// ==== Question 6 =====

// ...... part a ......

// var celsius = 25;

// ...... part b ......

// var fahrenheit = (celsius * 9 / 5) + 32;

// ...... part c ......

// fahrenheit = 77;

// ...... part d ......

// celsius = (fahrenheit - 32) * 5 / 9;
// document.write(celsius + "C is " + fahrenheit + "F" + "<br/>"); 
// document.write(fahrenheit + "F is " + celsius + "C" + "<br/>");

// ==== Question 7 =====

// let priceItem1 = 650;
// let priceItem2 = 100;
// let quantityItem1 = 3;
// let quantityItem2 = 7;
// let shippingCharges = 100;
// let total = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// document.write("<h1>"+"Shopping Cart" + "<br/>" + "</h1>");
// document.write( "<br/>");
// document.write("<h3>"+"Price of item 1 is " + priceItem1 + "<br/>");
// document.write("Quantity of item 1 is " + quantityItem1 + "<br/>");
// document.write("Price of item 2 is " + priceItem2 + "<br/>");
// document.write("Quantity of item 2 is " + quantityItem2 + "<br/>");
// document.write("Shipping Charges " + shippingCharges + "<br/>");
// document.write( "<br/>");
// document.write("Total cost of your order is " + total + "<br/>");

// ==== Question 8 =====

// let totalMarks = 980;
// let marksObtained = 804;
// let percentage = ( marksObtained / totalMarks) * 100;
// document.write("<h1>"+"Marks Sheet" + "<br/>" + "</h1>");
// document.write( "<br/>");
// document.write("Total Marks: " + totalMarks +"<br/>" );
// document.write("Marks Obtained: " + marksObtained +"<br/>" );
// document.write("percentage: " + percentage +"<br/>" );

// ==== Question 9 =====

// let pkr = (10*104.80)+(25*28);

// document.write("<h3>" + "Currency Conversion in PKR" + "</h3>");
// document.write("Total Currency in PKR: " + pkr);

// ==== Question 10 =====

// let num = 4;
// num = (((num + 5) * 10)/ 2);
// document.write("<h3>" + "Arithmetic Operation in single statement" + "</h3>");
// document.write("Output: " + num);

// ==== Question 11 =====

// let currentYear = 2025;
// let birthYear = 2005;
// let age = currentYear - birthYear;

// document.write("<h3>" + "Age Calculator" + "</h3>"); 
// document.write("Current Year: " + currentYear + "<br/>");
// document.write("Birth Year: " + birthYear + "<br/>");
// document.write("Your age is: " + age);

// ==== Question 12 =====

// document.write("<h3>" + "The Geometrizer" + "</h3>");

// let radius = 20;
// document.write("Radius of a Circle: " + radius + "<br/>");

// let circumference = 2 * 3.142 * radius;
// document.write("The circumference is: " + circumference + "<br/>");

// let area = 3.142 * radius * radius;
// document.write("The area is: " + area);

// ==== Question 13 =====

document.write("<h3>" + "The Lifetime Supply Calculator" + "</h3>");
document.write( "<br/>");

let favSnack = "chocalate chip";
document.write("Favourite Snack: " + favSnack + "<br/>");

let currentAge = 20;
document.write("Current Age: " + currentAge + "<br/>");


let maxAge = 60;
document.write("Estimated Maximum Age: " + maxAge + "<br/>");


let snackPerday = 3;
document.write("Amount of snacks per day: " + snackPerday + "<br/>");

let eat = (maxAge - currentAge) *  snackPerday;
document.write("You will need " + eat + " to last you until the ripe old age of " + maxAge);
