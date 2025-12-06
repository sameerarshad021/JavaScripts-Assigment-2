// Chapter 5

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

    var num1 = 9
    var num2 = 6

    var sum = num1 + num2;

    document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "<br>" );

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

    var sum = num1 - num2;

    document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "<br>" );

    var sum = num1 * num2;

    document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "<br>" );

    var sum = num1 / num2;

    document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "<br><br>" );

// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value

// MATH EXPRESSIONS | JAVASCRIPT

// Page 2 of 9

// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

    var num;

    document.write("Value after variable declaration is: " + num + "<br>");

    num = 5;
    document.write("Initial value: " + num + "<br>");

    num++;
    document.write("Value after increment is: " + num + "<br>");

    num = num + 7;
    document.write("Value after addition is: " + num + "<br>");

    num--;
    document.write("Value after decrement is: " + num + "<br> ");

    var remainder = num % 3;
    document.write("The remainder is: " + remainder + "<br> <br>");

    // Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

    var ticketPrice = 600;
    var totalCost = ticketPrice * 5
    document.write("Cost of buying 5 movie tickets is" + totalCost + "PKR <br>")

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

    var num = prompt("Enter a number for its multiplication table:", 5);

    document.write("<h2>Multiplication Table of " + num + "</h2>");

    document.write(num + " x 1 = " + (num*1) + "<br>");
    document.write(num + " x 2 = " + (num*2) + "<br>");
    document.write(num + " x 3 = " + (num*3) + "<br>");
    document.write(num + " x 4 = " + (num*4) + "<br>");
    document.write(num + " x 5 = " + (num*5) + "<br>");
    document.write(num + " x 6 = " + (num*6) + "<br>");
    document.write(num + " x 7 = " + (num*7) + "<br>");
    document.write(num + " x 8 = " + (num*8) + "<br>");
    document.write(num + " x 9 = " + (num*9) + "<br>");
    document.write(num + " x 10 = " + (num*10) + "<br>");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

    var celsius = 25;

    var fahrenheit = (celsius * 9/5) + 32;
    document.write(celsius + "°C is " + fahrenheit + "°F<br>");

    var fTemp = 70;

    var cTemp = (fTemp - 32) * 5/9;
    document.write(fTemp + "°F is " + cTemp + "°C<br>");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// MATH EXPRESSIONS | JAVASCRIPT

// Page 5 of 9

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

    var priceItem1 = 650;
    var priceItem2 = 100;

    var qtyItem1 = 3;
    var qtyItem2 = 7;
    var shippingCharges = 100;

    var totalCost = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharges;

    document.write("<h2>Shopping Cart</h2>");
    document.write("Price of item 1 is " + priceItem1 + "<br>");
    document.write("Quantity of item 1 is " + qtyItem1 + "<br><br>");

    document.write("Price of item 2 is " + priceItem2 + "<br>");
    document.write("Quantity of item 2 is " + qtyItem2 + "<br><br>");

    document.write("Shipping Charges: " + shippingCharges + "<br><br>");

    document.write("<b>Total Cost of Your Order is: " + grandTotal + " PKR</b>");

    // 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

    var totalMarks = 500;
    var obtainedMarks = 420;

    var percentage = (obtainedMarks / totalMarks) * 100;

    document.write("<h1>Marks Sheet</h1>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Obtained Marks: " + obtainedMarks + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

    let totalPKR = (10 * 104.80) + (25 * 28);

    document.write("<h1>Currency in PKR</h1>");
    document.write("Total Currency in PKR: " + totalPKR);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

    var num = 10;
    var result = ((num + 5) * 10) / 2;

    document.write("<h1>Arithmetic Operations</h1>");
    document.write("Initial number: " + num + "<br>");
    document.write("Result after calculation: " + result);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

    var currentYear = 2025;
    var birthYear = 2000;

    var age1 = currentYear - birthYear;
    var age2 = age1 - 1;

    document.write("<h1>Age Calculator</h1>");
    document.write("They are either " + age2 + " or " + age1 + " years old.");

// Output them to the screen like so: “They are either NN or NN
// years old”.

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// MATH EXPRESSIONS | JAVASCRIPT

// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

    var radius = 7;
    var pi = 3.142;

    var circumference = 2 * pi * radius;
    var area = pi * radius * radius;

    document.write("<h1>The Geometrizer</h1>");
    document.write("Radius of circle: " + radius + "<br>");
    document.write("The circumference is: " + circumference + "<br>");
    document.write("The area is: " + area);

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

    var snack = "Chocolate Chip Cookies";

    var currentAge = 25;

    var maxAge = 70;

    var amountPerDay = 3;

    var yearsLeft = maxAge - currentAge;
    var totalNeeded = yearsLeft * 365 * amountPerDay;

    document.write("<h1>Lifetime Supply Calculator</h1>");
    document.write("You will need " + totalNeeded + " " + snack + 
                   " to last you until the ripe old age of " + maxAge + ".");

               //    Chapter 6 - 9

// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

    var d = 10;

    document.write("The value of d is: " + d + "<br><br>");

    document.write("The value of ++d is: " + (++d) + "<br>");
    document.write("Now the value of d is: " + d + "<br><br>");

    document.write("The value of d++ is: " + (d++) + "<br>");
    document.write("Now the value of d is: " + d + "<br><br>");

    document.write("The value of --d is: " + (--d) + "<br>");
    document.write("Now the value of d is: " + d + "<br><br>");

    document.write("The value of d-- is: " + (d--) + "<br>");
    document.write("Now the value of d is: " + d);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// Explain the output at each stage:

    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    

    // --a; 1
    // --a - --b; 0
    // --a - --b + ++b; 1
    // --a - --b + ++b + b--; 1
   
    document.write("a = " + a + "<br>");
    document.write("b = " + b + "<br>");
    document.write("result = " + result + "<br>");

    // 3. Write a program that takes input a name from user &
    // greet the user.

    var name = prompt("Enter your name")
    alert("Hello, " + name + "! Welcome! ")


// 5. Write a program to take input a number from user & display it's multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
    
    var num = prompt("Enter a number for multiplication table:") || 5;

    document.write("<h2>Multiplication Table of " + num + ":</h2>");

    for (var i = 1; i <= 10; i++) {
    document.write(num + " × " + i + " = " + (num * i) + "<br>");
  }

//   Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// ALERTS | JAVASCRIPT

// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

  var sub1 = prompt("Enter name of first subject:");
  var sub2 = prompt("Enter name of second subject:");
  var sub3 = prompt("Enter name of third subject:");

  // b) Total marks for each subject
  var totalMarks = 100;

  // c & d) Take obtained marks from user
  var marks1 = Number(prompt("Enter obtained marks for " + sub1 + ":"));
  var marks2 = Number(prompt("Enter obtained marks for " + sub2 + ":"));
  var marks3 = Number(prompt("Enter obtained marks for " + sub3 + ":"));

  // e) Calculate total obtained marks and percentage
  var obtainedTotal = marks1 + marks2 + marks3;
  var percentage = (obtainedTotal / (totalMarks * 3)) * 100;

  // Display result in table format
  document.write("<h2>Marks Sheet</h2>");
  document.write("<table border='1' cellpadding='10'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
  document.write("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
  document.write("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");
  document.write("<tr><th>Total</th><th>" + (totalMarks*3) + "</th><th>" + obtainedTotal + "</th></tr>");
  document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
  document.write("</table>");
    