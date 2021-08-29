// let js = "amazing";
// if (js === "amazing") alert("Javascript is fun!");

// console.log(38+46+55-47);
// console.log('wei');

// let javascriptisfun = true;
// console.log('javascriptisfun');

/////////////////////////////////////////////////

// console.log(typeof true);
// console.log(typeof javascriptisfun);
// console.log(typeof 21);
// console.log(typeof 'wei');

// const firstname = 'jun-wei';
// const lastname = 'you';
// console.log (firstname + ' ' + lastname);

//////////////////////////////////////////////////

/* 💡Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀 */

// const massmark = 95;
// const massjohn = 85;
// console.log(massmark,massjohn);

// const heightmark = 1.88;
// const heightjohn = 1.76;
// console.log(massmark,heightmark,massjohn,heightjohn);

// //BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// const BMImark = massmark / (heightmark * heightmark);
// const BMIjohn = massjohn / (heightjohn * heightjohn);

// console.log(BMImark > BMIjohn);

// console.log(BMImark , BMIjohn);

//////////////////////////////////////////////////

// const firstname = 'wei';
// const birthyear = 2000;
// const year = 2021;
// const school = '文化大學';

//const wei = `Hi!我叫${firstname},今年${year - birthyear}歲,就讀於${school}。`;
//console.log(wei);

/////////////////////////////////////////////////

/* 💡Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😀
GOOD LUCK 😀 */ 

const massmark = 78;
const heightmark = 1.69;
const massjohn = 92;
const heightjohn = 1.95;

const BMImark = massmark / (heightmark * heightmark);
const BMIjohn = massjohn / (heightjohn * heightjohn);

if(BMImark > BMIjohn){
    console.log(`Mark's BMI(${BMImark}) is higher than John's(${BMIjohn})!`)
}
else{
    console.log(`John's BMI(${BMIjohn}) is higher than Mark's(${BMImark})!`)
}

////////////////////////////////////////////////////

//💡type coercion

let n = '4'+5;
n = n - 3;
console.log(n); //n=42

