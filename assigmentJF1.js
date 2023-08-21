/* 1-Create a simple discount calculator that takes two values from the variables - the total cost and the
discount percentage - and prints the discounted value*/

let totalValue= 2000;
let discountPercentage=20;

let discount = totalValue - (totalValue*(discountPercentage/100))
console.log("Final price after discount is:" ,discount)

/* 2-You are building a simple login system. 
Implement the login feature that takes in two parameters: username and password. 
You should check if the username is "admin" and the password is "12345". 
If both conditions are true, print "Login successful"; otherwise, print "Invalid credentials".*/

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login Successful");
} else {
  console.log("Invalid credentials");
}

/*3- You are working on a currency conversion application. 
Write a program that has a variable which stores the amount in Indian Rupees (INR) and prints the equivalent amount in US Dollars (USD). 
Use the current exchange rate of 1 USD = 82 INR.*/

let ammountInINR = 850;
let ammountInUSD = 850 / 82;
console.log(`${ammountInINR} INR is ${ammountInUSD} USD`);

/* 4-You are developing a booking application for a cinema. The ticket price depends on the type of the
viewer("child", "adult", or "senior"). Write a program which calculates the price accordingly and prints the total
price to be paid.Let’s assume the ti-ket price for a child is Rs. 100, adult ticket price is Rs. 150 and ticket price
for a senior is Rs.120. */

let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let childTicketPrice = 100;
let adultTicketPrice = 150;
let seniorTicketPrice = 120;

let totalPrice =
  numberOfChilds * childTicketPrice +
  numberOfAdults * adultTicketPrice +
  numberOfSeniors * seniorTicketPrice;

console.log(`The total ticket price is ${totalPrice}`);

/*5- You are building a shipping application. Write a program that takes the type of package ("standard", "express", or "overnight") and uses a switch statement to calculate and print the estimated 
delivery time based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" would be delivered the next day.*/

let typeOfPackage = "overnight";

switch (typeOfPackage) {
  case "standard":
    console.log("Your package will be delivered in next 3-5 Days");
    break;
  case "express":
    console.log("Your package will be delivered in next 1-2 Days");
    break;
  case "overnight":
    console.log("Your package will be delivered by tomorrow");
    break;
  default:
    console.log("Invalid package type!!");
}

/* 6- You are developing a form validation system. Write a program that takes user information(such as name, email, age) 
and uses the typeof operator to check the data type of each input. Print appropriate messages like "Name should be a string," 
"Email should be a string," or "Age should be a number." if any field is not proper.*/

let name = "Mithun";
let email = "mithun.s@pw.live";
let age = "21";

if (typeof name !== "string") {
  console.log(`Name Should Be A String..`);
} else if (typeof email !== "string") {
  console.log(`Email Should Be A String..`);
} else if (typeof age !== "number") {
  console.log(`Age Should Be A Number..`);
} else {
  console.log(`Yahh!!! All the fields are proper.`);
}

/* 7- You are building a simple shopping list app. You have the items name in an array. 
Write a program that uses a for loop to print all the items in the shopping list array.*/

let shoppingList = [
    "Pen",
    "Papper",
    "Candy",
    "Soda",
    "Keyboard",
    "Screen Protector",
  ];
  
  for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
  }

  /* 8-You are creating a countdown app. Implement a program that uses a while loop to count down from 10 to 1 and prints each number.*/

console.log("Counting From 10 to 0");
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

/* 9- You are given with an array of numbers and strings. Your task is to find the first string in the array. 
On finding the first string print “Found the First String” and its value.*/

const array = [1, 2, 999, 56, "Mithun", 1234, "PW"];

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "string") {
    console.log(`Found The First String: ${array[i]}`);
    break;
  }
}

/* 10- You are given with an array of numbers both positive and negative. 
Your task is to print only the positive numbers.*/

let arr = [1, 2, -3, 5, -9, -8, -7, 7];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    continue;
  }
  console.log(arr[i]);
}