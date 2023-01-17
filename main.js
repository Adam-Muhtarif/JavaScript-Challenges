//!---------------1 To 9--------------------
/* 
//**************** Assignment 5  *************************
  `Print a message in console like example`;

  //**************** Assignment 5 Solution *************************

  window.onload = function () {
    console.table(["adam", "ahmed", "naciima", "cayush"]);
  };

  //**************** Assignment 6  *************************
  `You have the following code in the js file, you are required to cancel the execution of the code by what you have learned`;
  `
  It is required to carry out the task in two ways
  You cannot delete or modify the code from the file
  You can write before or after it without any problem
  `;
  
  console.log("Iam In Console");
  document.write("Iam In Page");
  */

//!---------------10 To 17--------------------
/* 
  //**************** Assignment 1  *************************
  `
  Create two variables named Number One and Number Two in the correct way and criteria for naming variables
  The first variable has a value of 10 and the data type is Number
  The second variable has a value of 20 and the data type is Number
  On the first line, print the result 1020 in the console using the normal Concatenate method
  In the second line, print data type 1020 in the console using the normal Concatenate method
  In the third line, print the result 1020 in the console using Template Literals in the Concatenate work
  In the fourth line, print the data type 1020 in the Console using the Template Literals in Concatenate work.
  In the fifth and sixth lines, without repeating the console.log, print the number 20 and below it the number 10 using the regular Concatenate
  In the seventh and eighth line, without repeating the console.log, print the number 20 and below it the number 10 using the Template Literals
  `;

  //**************** Assignment 1 Solution *************************

  // let numberOne = 10;
  // let numberTwo = 20;
  // console.log(numberOne, numberTwo);
  // console.log(typeof (numberOne, numberTwo));
  // console.log(`${numberOne} ${numberTwo}`);
  // console.log(`${typeof (numberOne, numberTwo)}`);
  // console.log(" 20", "\n", "10");
  // console.log(`${numberTwo}
  // ${numberOne}`);

  //**************** Assignment 2  *************************
  `
  The JS file must not be modified at all
  You must not write any JavaScript code anywhere to access the required
  You have to make this code run and output the existing result
  `;

  //**************** Assignment 2 Solution *************************

  // console.log(elzero.innerHTML); // object
  // console.log(typeof elzero); // object

  //**************** Assignment 3  *************************
  `
  Print the following result without using the Template Literals method in Concatenate work
  `;
  //**************** Assignment 3 Solution *************************

  //**************** Assignment 4  *************************
  `
  Use the variables to come up with the result in the code
  A variable cannot be repeated more than once
  No numbers can be written by hand and only variable values are used
  `;

  //**************** Assignment 4 Solution  *************************

  // console.log(
  //     "\`I\'m In \n"+
  //     "\\\\ \n" +
  //     "Love \\\\ \"\"\" \'\'\' \n" +
  //     "++ with ++ \n" +
  //     "\\\"\"\"\\\"\"\"\n" +
  //     "\"\"JavaScript\"\"\`\`"
  // );
*/

// -----------------exercise 10-----------------
// let a = 21;
// let b = 20;
// console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);
// _21_2021_2021_2021_20_

// ---------------------challenge 1--------------------
/**  let meTitle = "Elzero",
    meDescription = "Elzero Web School",
    meDate = "25/10";
    let card = `
        <div>
            <h3>${meTitle}</h3>
            <p>${meDescription}</p>
            <span>${meDate}</span>
        </div>
    `;
    document.write(card.repeat(4));
*/

// ------------------Challenge 2---------------------------
/* 
    let a = 10;
      let b = "20";
      let c = 80;

      console.log(++a + +b++ + +c++ - +a++);
      console.log(++a + -b + +c++ - -a++ + +a);
      console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

  
  // Console 1
  
      [++a] [+] [+b++] [+] [+c++] [-] [+a++]
      [++a]
      Value: 11
      Explain: Pre Increment
      [+]
      Explain: Add
      [+b++]
      Value: 20
      Explain: + Unary Plus , Post Increment
      [+]
      Explain: Add
      [+c++]
      Value: 80
      Explain: +  Unary Plus , Post Increment
      [-]
      Explain: Sub
      [+a++]
      Value: 11
      Explain: + Unary Plus , Post Increment 
  
  // Console 2
      [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
      [++a]
      Value: 13
      Explain: Pre Increment, The Value Has Increased In Previous Console With Pre&Post Increment
      [-b]
      Value: -21
      Explain: - Unary Negation , The Value Has Increased In Previous Console With Post Increment 
      [+c++]
      Value: 81
      Explain: The Value Has Increased In Previous Console With Post Increment , + Unary Plus , Post Increment 
      [-a++]
      Value: -13
      Explain: - Unary Negation , Post Increment
      [+a]
      Value: 14
      Explain: + Unary Plus , The Value Has Increased With Post Increment
  
  // Console 3
  
      [--c] [+] [+b] [+] [--a] [*] [+b++] - [+b] [*] [a] [+] [--a] [-] [+true]
      [--c]
      Value: 81
      Explain: Pre Decrement 
      [+b]
      Value: 21
      Explain: + Unary Plus 
      [--a]
      Value: 13
      Explain: Pre Decrement
      [+b++]
      Value: 21
      Explain: + Unary Plus , Post Increment
      [+b]
      Value: 22
      Explain: + Unary Plus , The Value Has Increased With Post Increment
      [a]
      Value: 13
      [--a]
      Value: 12
      Explain: Pre Decrement
      [+true]
      Value: 1
      Explain: + Unary Plus 
  
*/

// --------------------Challenge 3-------------
/*  let d = "-100";

    let e = "20";
    let f = 30;
    let g = true;

    console.log(-d * +e ); //2000
    console.log(++g * ++e + -d + ++f); //173
*/

//----------------- exercise 11-------------------------
/* 
    // Replace ? With Arithmetic Operators
    // console.log(10 * 20 - 15 + 3 - 190 + 10 - 400); // 0
*/

//----------------- exercise 12-------------------------

/*  let num = 3;

    // Solution One
    console.log(num++ + --num); // 6

    // Solution Two
    console.log(num ** num / num - num); // 6

    // Soultion Three
    console.log(num + num); // 6

    // Soultion Four
    console.log(num * num - num); // 6

    // Solution Five
    console.log((num * num * num) / num - num); // 6

    // Solution Six
    console.log((num * num * num) % ++num + --num); // 6
*/

//----------------- exercise 13-------------------------

/* let num = "10";

    // Solution One
    console.log(+num + +num); // 20

    // Solution Two
    console.log(+num * +num / num + +num); // 20

    // Solution Three
    console.log(+num + ++num % +num + --num); // 20

    // Solution Four
    console.log(+num + ++num - num + --num ); // 20
*/

//----------------- exercise 14-------------------------
/* 
    let points = 10;
    // Write Your Code Here

    console.log(++points + ++points - --points + ++points - --points); // 13

    // Write Your Code Here

    console.log(--points - --points + --points + --points - ++points); // 8;
*/

// --------------------Challenge 4-------------

/*  let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find smallest Number IN All Variables
console.log(Math.min(a, b, c, d));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.floor(d))); //10000

// Get Integer 2 from d with 4 methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use b + d To Get The Values
console.log((Math.ceil(--b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Math.ceil(--b) / Math.ceil(d))); // 67 => Number
*/

// --------------------Challenge 5-------------

/* let a = "Elzero Web School";

// slice , charAt
console.log(); //Zero

// 8 H
console.log(); //HHHHHHHH

// Return Array
console.log(a.split(" ", 1)); //[Elzero]

// Use Only substr + template literals
console.log(); //Elzero School

let solution = `
    <p>${a.charAt(2).toUpperCase() + a.slice(3, 6)}</p>
    <p>${a.charAt(13).toUpperCase().repeat(8)}</p>
    <p>${a.split(" ", 1)}</p>
    <p>${a.substr(0, 6)} ${a.substr(10)}</p>
    <p>${a.charAt(0).toLowerCase()}${a.substring(1, a.length-1).toUpperCase()}${a.substring(a.length-1)}</p>

`;

// solution
document.write(solution);

*/

//---------------exercise 15--------------------
/* 
    // Your Solutions
    console.log(1e5); // 100000
    console.log(100 * 1000); // 100000
    console.log(+100000); // 100000
    console.log(parseInt(100000)); // 100000
    console.log(`${Number(100000)}`); // 100000
    console.log(`${parseInt(100000)}`); // 100000
    console.log(parseFloat(parseInt(100000))); // 100000
    console.log(+100_000); // 100000
    console.log(); // 100000
    console.log(); // 100000
*/

//---------------exercise 16--------------------
// console.log(-Number.MIN_SAFE_INTEGER)

//---------------exercise 17--------------------
/* 
    console.log(
    Number(
        (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER)
        .toExponential(0)
        .slice(3, 5)
        )
        );
*/

//---------------exercise 18--------------------
/* 
    let myVar = "100.56789 Views";

    console.log(parseInt(myVar)); // 100
    console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57
*/

//---------------exercise 19--------------------
/* 
let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2 
*/

//---------------exercise 20--------------------
/* 
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10
console.log(parseInt(flt)); // 10
console.log(Number(parseFloat(flt).toFixed(0))); // 10
*/

//---------------exercise 21--------------------
/* 
    console.log(parseInt(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4
*/

//---------------exercise 22--------------------
/* 
    let userName = "Elzero";
    console.log(); // e
    console.log(); // e
    console.log(); // e
    console.log(); // e
    console.log(); // eee

    let outPut = `
            <div>${userName[0].toLowerCase()}</div>
            <div>${userName.slice(0, 1).toLowerCase()}</div>
            <div>${userName.substring(0,1).toLowerCase()}</div>
            <div>${userName.substr(0,1).toLowerCase()}</div>
            <div>${userName.charAt(0).toLowerCase().repeat(3)}</div>
    `;
    document.write(outPut);
*/

//---------------exercise 23--------------------
/* 
    let word = "Elzero";
    let letterZ = "z";
    let letterE = "e";
    let letterO = "O";

    console.log(); // True
    console.log(); // True
    console.log(); // True

    let outPut = `
            <div>${word.includes("z")}</div>
            <div>${word.startsWith("E")}</div>
            <div>${word.endsWith("o")}</div>
    `;
    document.write(outPut);
*/

// --------------------Challenge 6-------------
/* 
let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

let result =
  a < 10
    ? console.log(10)
    : a >= 10 && a <= 40
    ? console.log("10 To 40")
    : a > 40
    ? console.log("> 40")
    : console.log("Unknown");
*/
/* 
let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
  // console.log("Good")
}

// My Solution
if (st.match("W")[0].toLocaleLowerCase() === "w") {
    // console.log("Good");
}

// Cheat
if (st[st.indexOf("W")].toLowerCase() === "w") {
  // console.log("Good");
}


if (st !== "string") {
  //   console.log("Good");
}
if (typeof st.length === "number") {
  //   console.log("Good");
}

if (st.split(" ", 1)[0].repeat(2) === "ElzeroElzero") {
    // console.log("Good");
}
*/

// --------------------Challenge 7-------------
/* 
let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
  console.log(salary);
} else if (job === "IT" || job === "Support") {
  salary = 6000;
  console.log(salary);
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
  console.log(salary);
} else {
  salary = 4000;
  console.log(salary);
}

switch (job) {
  case (job = "Manager"):
    salary = 8000;
    console.log(salary);
    break;
  case (job = "IT"):
  case (job = "Support"):
    salary = 6000;
    console.log(salary);
    break;
  case (job = "Developer"):
  case (job = "Designer"):
    salary = 7000;
    console.log(salary);
    break;
  default:
    salary = 4000;
    console.log(salary);
}


// -------------------------------------

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

// let holidays = 0;
// let money = 0;

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}

*/

//---------------exercise 24--------------------

/*
  console.log(100 == "100"); // true
  console.log(100 !== 1000); // true
  console.log(110 !== 100 && 10 !== 20); // true
  console.log(-10 == "-10"); // true
  console.log(10 - 50 == +"-40"); // true
  console.log(- 40 != -"-40"); // true
  console.log(+"10" === 10); // true
  console.log(!20 === false); // true
 */

//---------------exercise 25--------------------
/* 
  let num1 = 10;
  let num2 = 20;

  console.log(num1 < num2); // true
  console.log(num2 > num1); // true
  console.log(num2 >= num1); // true
  console.log(num1 <= num2); // true
  console.log(num1 !== num2); // true
  console.log(!num1 === !num2); // true

*/

//---------------exercise 26--------------------
/* 
  let a = 20;
  let b = 30;
  let c = 10;

  console.log(a !== b && a > c || a === b); // true
  console.log(a < b && a > c); // true
  console.log(!(a > b) && !(a === b) && !!(a !== c) && !(a <= c)); // true
*/

//---------------exercise 27--------------------
/* 
  Test Case 1
  let num = 9; // "009"

  Test Case 2
  let num = 20; // "020"

  Test Case 3
  let num = 110; // "110"

  // -----------Solution-------------

  Case 1
  if (num < 10) {
    console.log(`00${num}`);
  }

  Case 2
  if (num > 10 && num < 100) {
    console.log(`0${num}`);
  }

  Case 3
  if (num >= 100) {
    console.log(`${num}`);
  }
*/

//---------------exercise 28--------------------
/*
  let num1 = 9;
  let str = "9";
  let str2 = "20";

  //---------------Solution---------------
 
  if (num1 == str) {
    console.log(`${num1} Is The Same Value As ${str}`);
  }

  if (num1 !== str) {
    console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
  }

  if (num1 !== str2 && typeof num !== typeof str2) {
    console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
  }

  if (str !== str2 && typeof str === typeof str2) {
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
  }

  // Output
  ("{num1} Is The Same Value As {str}");
  ("{num1} Is The Same Value As {str} But Not The Same Type");
  ("{num1} Is Not The Same Value Or The Same Type As {str2}");
  ("{str} Is The Same Type As {str2} But Not The Same Value");
*/

//---------------exercise 29--------------------
/* 
  let num1 = 10;
  let num2 = 30;
  let num3 = "30";

  // Needed Output
  ("30 Is Larger Than 10 And Type string Not The Same Type As number");
  ("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
  ("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

  // -----------------Solution---------------

  if (num3 > num1 && typeof num3 !== typeof num2) {
    console.log(
      "30 Is Larger Than 10 And Type string Not The Same Type As number 10"
    );
    if (num3 > num1 && num3 == num2) {
      console.log(
        "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
      );
    }
    if (num3 !==  num1 && typeof num3 !== typeof num2) {
      console.log(
        `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
      );
    }
  }
*/

//---------------exercise 30--------------------
/*
  // Edit What You Want Here

  let num1 = 15;
  let num2 = 1;
  let num3 = Number("15");
  let num4 = 50;

  
  // Condition 1

  if (num1 > num2) {
    console.log("True");
  } else {
    console.log("False");
  }

  // Condition 2

  if (num1 > num2 && num1 < num4) {
    console.log("True");
  } else {
    console.log("False");
  }

  // Condition 3

  if (num1 > num2 && num1 === num3) {
    console.log("True");
  } else {
    console.log("False");
  }

  // Condition 4

  if ((num1 + num2) < num4) {
    console.log("True");
  } else {
    console.log("False");
  }

  // Condition 5

  if ((num1 + num3) < num4) {
    console.log("True");
  } else {
    console.log("False");
  }

  // Condition 6

  if ((num1 + num2 + num3) < num4) {
    console.log("True");
  } else {
    console.log("False");
  }

  // Condition 7

  if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
  } else {
    console.log("False");
  }
*/

//---------------exercise 31--------------------
/* 
  // let day = "   friday  ";
  // You Need To Remove Spaces And Make First Letter Capital => Friday

  // let day = "Friday";
  // let day = "Saturday";
  // let day = "Sunday";
  // Output => "No Appointments Available"

  // let day = "Monday";
  // let day = "Thursday";
  // Output => "From 10:00 AM To 5:00 PM"

  // let day = "Tuesday";
  // Output => "From 10:00 AM To 6:00 PM"

  // let day = "Wednesday";
  // Output => "From 10:00 AM To 7:00 PM"

  // let day = "World";
  // Output => "Its Not A Valid Day"

  let day = "    Friday    ";
  day = day.trim().charAt(0).toUpperCase().concat(day.trim().substring(1));
  console.log(day);

  switch (day) {
    case (day = "Friday"):
    case (day = "Saturday"):
    case (day = "Sunday"):
      console.log("No Appointments Available");
      break;
    case (day = "Monday"):
    case (day = "Thursday"):
      console.log("From 10:00 AM To 5:00 PM");
      break;
    case (day = "Tuesday"):
      console.log("From 10:00 AM To 6:00 PM");
      break;
    case (day = "Wednesday"):
      console.log("From 10:00 AM To 7:00 PM");
      break;
    default:
      console.log("Its Not A Valid Day");
  }
*/

// --------------------Challenge 8-------------
/* 
  let zero = 0;
  let counter = 3;
  let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

  // my.reverse().splice(zero, ++zero + zero);
  // console.log(my);
  // ["Osama", "Elham", "Mazero", "Ahmed"];
  // -----another solution-----
  // my = my.slice(zero, ++counter).reverse();


  // --------------------------------------------------------

  // my.reverse();
  // console.log(my.slice(counter, -++zero));
  // ["Elham", "Mazero"]

  // --------------------------------------------------------

  // my[zero] = '"Elzero"';
  // console.log(my[zero]); // "Elzero"

  // -------------------------------------------------------

  // my.splice(zero, 1, '"rO"');
  // console.log(my[zero]); // "rO"
*/

//---------------exercise 25--------------------
/*
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];

  // Method 2
  console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];
 */

//---------------exercise 26--------------------
/* 
  let start = 10;
  let end = 100;
  let exclude = 40;

  for (let i = start; i <= end; i += start) {
    if (i === 40 ) {
      continue;
    }
    console.log(i);
    
  }

  // Output
  10;
  20;
  30;
  50;
  60;
  70;
  80;
  90;
  100;
*/

//---------------exercise 27--------------------
/* 
  let start = 10;
  let end = 0;
  let stop = 3;

  for (let i = start; i !== end; i--) {
    if (i === start) {
      console.log(`${i}`);
      continue;
    }
    if (i !== start) console.log(`${end}${i}`);
    if (i === 3) break;
  }

  // Output
  10;
  09;
  08;
  07;
  06;
  05;
  04;
  03;
*/

//---------------exercise 28--------------------
/* 
  let start = 1;
  let end = 6;
  let breaker = 2;

  for (let i = start; i <= end; i++) {
    console.log(i);
    for (let k = breaker; k < end;) {
      console.log("--", k);
      k += breaker;
    }
  }

  // Output
  // 1
  // -- 2
  // -- 4
  // 2
  // -- 2
  // -- 4
  // 3
  // -- 2
  // -- 4
  // 4
  // -- 2
  // -- 4
  // 5
  // -- 2
  // -- 4
  // 6
  // -- 2
  // -- 4
*/

//---------------exercise 29--------------------
/* 
  let index = 10;
  let jump = 2;
  let end = 0;

  for (let i = index; i > end; ) {
    console.log(i);
    i -= jump;
    if (i === jump) break;
  }

  // Output
  // 10;
  // 8;
  // 6;
  // 4;
*/

//---------------exercise 30--------------------
/* 
  let friends = [
    "Ahmed",
    "Sayed",
    "Eman",
    "Mahmoud",
    "Ameer",
    "Osama",
    "Sameh",
  ];
  let letter = "a";

  let num = Number(Boolean(letter));

  for (let i = num - num; i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase())) {
      friends.splice(i, num);
    }
    console.log(`${i + num} => ${friends[i]}`);
  }
  
  // Output
  // ("1 => Sayed");
  // ("2 => Eman");
  // ("3 => Mahmoud");
  // ("4 => Osama");
  // ("5 => Sameh");
*/

//---------------exercise 31--------------------
/*
let start = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    result = result.concat(swappedName[i].toLowerCase());
  } else {
    result = result.concat(swappedName[i].toUpperCase());
  }
}
console.log(swappedName);
console.log(result);

// Output
// ("ELzERo");
 */

//---------------exercise 32--------------------
/* 
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
let jump = start;

for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] === "number") {
    if (mix[jump] === ++start) continue;
    console.log(mix[i]);
  }
  }
  // Output
  // 2;
  // 3;
  // 4;
  */
//---------------exercise 33--------------------
/* 
  let friends = [
    "Fahad",
    "Adam",
    "Ahmed",
    "Sayed",
    "Ali",
    1,
    2,
    "Mahmoud",
    "Amany",
    3,
    4,
  ];

  let index = 0;
  let counter = 0;
  ++counter;

  // Letters that begin with 👇A👇 will deleted from the array
  let letter = "A";

  // Filter Loop
  while (index < friends.length) {
    if (typeof friends[index] === "number") {
      friends.splice(index, counter);
      index--;
    } else {
      if (friends[index].startsWith(letter)) {
        friends.splice(index, counter);
        index--;
      }
    }

    index++;
  }

  // Display Output
  for (let i = --counter; i < friends.length; i++) {
    console.log(`${i + counter} => ${friends[i]}`);
  }

  // Output
  ("1 => Fahad");
  ("2 => Sayed");
  ("3 => Mahmoud");


  ("(☞ﾟヮﾟ)☞ Adam Muhtarif")
*/

// --------------------Challenge 9-------------
/* 
  let myAdmins = ["Ahmed", "Osama", "Sayed", "lowerCase", "Stop", "Samera"];
  let myEmployees = [
    "Amgad",
    "Samah",
    "Ameer",
    "Omar",
    "Othman",
    "Amany",
    "Samia",
    "l_isWorking"
  ];

  document.write(`<div> We Have X Admins</div>`);

// ------------ Solution ---------------------

  // Count Admins 
  let adminsNum = 0;

  for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop" || myAdmins[i] === "stop") {
      break;
    } else {
      adminsNum += 1;
    }
  }
  document.write(`
    <div> We Have ${adminsNum} Admins</div>
    <hr>
  `);

  // Div's

  // Main Loop 👉  prints admin's name & and team members title
  let i = 0;
  while (i < adminsNum) {
    document.write(`
    <div>The Admin For Team ${i + 1} is ${myAdmins[i]} </div>
    <h3>Team Members : </h3>
    `);

    let countEmployees = 0;
    let letter = myAdmins[i].charAt(0).toUpperCase();

    // Inner Loop Matches & Print Employees
    for (let k = 0; k < myEmployees.length; k++) {
      if (
        myEmployees[k].startsWith(letter) ||
        myEmployees[k].startsWith(letter.toLowerCase())
      ) {
        document.write(`
        <p> - ${++countEmployees} ${myEmployees[k]}</p>
        `);
      }
    }

    countEmployees = 0;
    document.write(`<hr>`);

    i++;
  }

  document.write(`<h1>💻⌨ Adam Muhtarif</h1>`);
*/

// ------------ Challenge 10 ---------------------
/* 
  function showDetails(name, age, status) {
    //* for swap between parameters
    let swap;

    //* Ternary Filter
    // Case 1
    typeof name === "number" ? ((swap = name), (name = age), (age = swap)) : "";

    // Case 2
    typeof name === "boolean" && typeof status === "string"
      ? ((swap = name), (name = status), (status = swap))
      : "";

    // Case 3
    typeof name === "boolean" &&
    typeof age === "string" &&
    typeof status === "number"
      ? ((swap = name), (name = age), (age = status), (status = swap))
      : "";

    // Print Output
    document.write(
      `
        <div>
          Hello ${name}, Your Age Is ${age}, ${
        status === true
          ? "Your Are Available For Hire"
          : "Your Are Not Available For Hire"
      }
        </div>
        `
    );
  }

  showDetails("Osama", 38, true);
  showDetails(38, "Osama", true);
  showDetails(false, 38, "Osama");
  showDetails(true, "Osama", 38);
*/

//---------------exercise 34--------------------
/* 

  function sayHello(theName = "Unknown", theGender = "Unknown") {
    //-------------Solution 1---------------
    
    // document.write(`<div>`);
    // document.write(`Hello `);
    // theGender === "Male"
    //   ? document.write(`Mr `)
    //   : theGender === "Female"
    //   ? document.write(`Miss `)
    //   : "";
    // document.write(`${theName} `);
    // document.write(`</div>`);

    //-------------Solution 2 Using Return---------------

    return document.write(`
    <div>
      Hello
      ${theGender === "Male" ? `Mr` : theGender === "Female" ? `Miss` : ""}
      ${theName}
    </div>
    `);
  }

  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"
*/

//---------------exercise 35--------------------
/* 
  function calculate(firstNum, secondNum, operation) {
    let result = 0;
    if (!secondNum) {
      return document.write(`
          <div>
            Second Number Not Found
          </div>
          `);
    } else {
      if (!operation) {
        document.write(`
          <div>
            ${firstNum + secondNum}
          </div>
        `);
      } else {
        operation === "add"
          ? (result = firstNum + secondNum)
          : operation === "subtract"
          ? (result = firstNum - secondNum)
          : operation === "multiply"
          ? (result = firstNum * secondNum)
          : "";
        return document.write(`
          <div>
            ${result}
          </div>
        `);
      }
    }
  }

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, "multiply"); // 600
*/

//---------------exercise 36--------------------
/* 
  function ageInTime(theAge) {
    let year = 365; //days
    let month = 30.4167; //days
    let week = 7; //days
    let day = 24; //hours
    let hour = 60; //minute
    let minute = 60; //seconds
    let second = 60; //ms

    if (theAge < 0 || theAge > 100) {
      document.write(`<p>Age Out Of Range</p>`);
    } else {
      document.write(`<p>${theAge} Years</p>`);
      document.write(`<p>${Math.ceil((theAge * year) / month)} Months</p>`);
      document.write(`<p>${((theAge * year) / week).toFixed(4)} Weeks</p>`);
      document.write(`<p>${theAge * year} Days</p>`);
      document.write(`<p>${theAge * year * day} Hours</p>`);
      document.write(`<p>${theAge * year * day * minute} Minutes</p>`);
      document.write(`<p>${theAge * year * day * minute * second} Seconds</p>`);
    }
  }

  // Needed Output
  // ageInTime(110); // Age Out Of Range
  ageInTime(5); // Months Example => 456 Months
  // ageInTime(9); // Months Example => 456 Months
*/

//---------------exercise 37--------------------
/* 
  function createSelectBox(startYear, endYear) {
    document.write(`<select>`);
    for (let i = startYear; i <= endYear; i++) {
      document.write(`<option value = "${i}">${i}</option>`);
    }
    document.write(`</select>`);
  }
  createSelectBox(2000, 2021);
  
  <select>
    <option value="2000">2000</option>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2004">2004</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
    <option value="2013">2013</option>
    <option value="2014">2014</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
  </select>;
*/

//---------------exercise 38--------------------
/* 
  function multiply(...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] === "string") {
        continue;
      } else {
        numbers[i] = Math.trunc(numbers[i]);
        result *= numbers[i];
      }
    }
    return document.write(`<div>${result}</div>`);
  }

  multiply(10, 20); // 200
  multiply("A", 10, 30); // 300
  multiply(100.5, 10, "B"); // /1000
*/

// ------------ Challenge 10 ---------------------

// ***************** Challenge 11 ********************
/* 
  // ------------ Regular Function ---------------------

  // let names = function (...names) {
  //   return `String [${names.join("], [")}] => Done!`
  // };
  // document.write(names("Osama", "Mohamed", "Ali", "Adam"));
  // String [Osama], [Mohamed], [Ali], [Adam] => Done !

  // ------------ Arrow Function ---------------------

  // let names = (...names) => `String [${names.join("], [")}] => Done!`;
  // document.write(names("Osama", "Mohamed", "Ali", "Adam"));

  // ***************** Challenge 2******************** 
  // ------------ Arrow Function ---------------------

  // let myNumbers = [20, 50, 10, 60];
  // let calc = (one, two, ...numbers) => one + two + numbers[one - one];
  // document.write(calc(10, 50, 20)); //80

  // ------------ Regular Function ---------------------

  let myNumbers = [20, 50, 10, 60];
  let calc = function (one, two, ...numbers) {
    return one + two + numbers[one - one];
  };
  document.write(calc(10, 50, 20)); //80
*/

//---------------exercise 39--------------------
/*

  function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      // Osama Mohamed => Osama M.
      return zName.substring(0, 6) + zName.substring(6, 7).toUpperCase() + ".";
    }
    function ageWithMessage(zAge) {
      // 38 Is My Age => Your Age Is 38
      return `, Your Age Is ` + zAge.substring(0, 2);
    }
    function countryTwoLetters(zCountry) {
      // Egypt => You Live In EG
      return `, You Live in ` + zCountry.substring(0, 2).toUpperCase();
    }
    function fullDetails() {
      return (
        `Hello ` +
        namePattern(zName) +
        ageWithMessage(zAge) +
        countryTwoLetters(zCountry)
      );
    }
    return fullDetails(); // Do Not Edit This
  }

  document.write(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG

  // document.write(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY
*/

//---------------64 To 70--------------------
/* 
//**************** Assignment 2 ********************
  `# Change These Two Functions To Arrow Function`;

  `# Function 1`;
  function itsMe() {
    return `Iam A Normal Function`;
  }

  `# Function 2`;
  function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
  }

  console.log(itsMe()); // Iam A Normal Function
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
  
  //**************** Assignment 2 Solution ***************
  
  // `# Function 1`;
  // itsMe = () => ` Iam A Arrow Function`;
  // document.write(`<div>${itsMe()}</div>`);
  
  // `# Function 2`;
  // urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
  // document.write(`<div>${urlCreate("https", "elzero", "org")}</div>`); // Iam A Normal Function
  
  

//**************** Assignment 3 *************************
`Change This Regular Function To Arrow Function`;

function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Available`;
    };
  };
}

// document.write(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//**************** Assignment 3 Solution *************************

checker2 = (zName) => (status) => (salary) =>
status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Available`;

document.write(checker2("Adam")("Available")(9000));

*/

//**************** Assignment 4  *************************
/*
  function specialMix(...data) {
    // Your Code Here
  }

  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
*/
//**************** Assignment 4 Solution *************************
/* 
function specialMix(...data) {
  let result = 0;
  let number;
  let arrayOfNumbers = [];

  function check(data) {
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] === "number") {
        arrayOfNumbers.push(data[i]);
      }

      if (typeof data[i] === "string") {
        number = data[i].match(/\d+/g);
        if (number === null) {
          continue;
        } else arrayOfNumbers.push(parseFloat(number));
      }
    }
    return sum(arrayOfNumbers);
  }

  function sum(arrayOfNumbers) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      result += arrayOfNumbers[i];
    }
    return result === 0 ? `All Is String` : `Result Is = ${result}`;
  }

  return check(data);
}

// document.write(specialMix(10, 20, 30)); //60
// document.write(specialMix("10Test", "Testing", "20Cool")); // 30
// document.write(specialMix("Testing", "10Testing", "40Cool")); // 50
// document.write(specialMix("Test", "Cool", "Test")); // All Is Strings

//**************** New Information  *************************

  !To eliminate numbers from a string we use this method below
  ------------word = word.replace(/\d+/g, "");------------
  "\d" => Decimals 0-9 we can replace "\d" with "[0-9]" => the same results
  "\D" => Removes the string and keep the numbers
  "^[0-9]"  => It means remove everything upper than d or 0-9
  "g"   => Global
  ""   => Is what eliminates the numbers with making it empty string
  
// let word = "111adam222";
// document.write(`Before Eliminate  ${word}`);
// word = word.replace(/\d+/g, "");
// document.write(`</br> After Eliminate  ${word}`);

// !To Extract numbers from a string we use this method below
// ------------let numbers = word.match(/\d+/g)---------;

// They export numbers by finding them

// let numbers = word.match(/\d+/g);
// document.write(`</br> After Eliminate  ${numbers}`);
*/
