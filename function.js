// 1️⃣ Print “Hello JavaScript”

// 👉 Task:
// Write a function that prints "Hello JavaScript" in the console.

// Hint: console.log()

const helloJS =()=>(console.log('hello JavaScript'));

// helloJS();



// 2️⃣ Add Two Numbers

// 👉 Task:
// Create a function that takes two numbers and returns their sum.

// Example:
// add(5, 10) → 15

const sumFunction=(a,b)=>{
    const sum=a+b;
    // console.log(`The sum of the ${a} and ${b} is ${sum}`);
    return sum;
};

sumFunction(5,7);



// 3️⃣ Check Even or Odd

// 👉 Task:
// Write a function that checks whether a number is even or odd.

// Example:
// check(4) → "Even"
// check(7) → "Odd"

// Hint: % operator

const oddEvenCheck=(numb)=>{
    if(numb%2===0){
        return(`${numb} is a Even number`);
    }else{
        return(`${numb} is a odd number`);
    }
}

// console.log(oddEvenCheck(24));



// 4️⃣ Find the Largest Number

// 👉 Task:
// Given two numbers, find the larger one.

// Example:
// largest(10, 20, 30, 40, 41) → 41

const learge=(...nums)=>{
    let leargestNumbers = nums[0];

    for(let i=0; i<nums.length; i++){
        if(nums[i]>leargestNumbers){
            leargestNumbers= nums[i];
        }
    }
    return leargestNumbers;
}

// console.log(learge(10, 20, 30, 40, 41,33,32));

const leargestNumbers=(...nums)=>{
    return Math.max(...nums);
}

// console.log(leargestNumbers(10, 20, 30, 40, 41,33,32));



// 5️⃣ Convert Celsius to Fahrenheit

// 👉 Task:
// Convert temperature from Celsius to Fahrenheit.

// Formula:
// F = (C × 9/5) + 32

const celsiusToFahrenheit=(celsius)=>{
    const fahrenheit= (celsius*9/5)+32;
    return fahrenheit;
}

// console.log(celsiusToFahrenheit(0));   // 32
// console.log(celsiusToFahrenheit(25));  // 77
// console.log(celsiusToFahrenheit(100)); // 212



// 6️⃣ Print Numbers from 1 to 10

// 👉 Task:
// Use a loop to print numbers from 1 to 10.

// Hint: for loop


for(let i=1; i<=10; i++){
    // console.log(i);
}



// 7️⃣ Sum of an Array

// 👉 Task:
// Given an array of numbers, calculate the total sum.

// Example:
// [1, 2, 3, 4] → 10



const sumOfArr=(arr)=>{

    let result = 0;

    for(const array of arr){
        result= result+array;
    }
    return result;
}

const arr = [1, 2, 3, 4, 7];

// console.log(sumOfArr(arr));

const sumofArray=(arra)=>arra.reduce((sum, num)=> sum+num, 0);

const totalOfArray = [1, 2, 3, 4, 7];

// console.log(sumofArray(totalOfArray));



// 8️⃣ Count Characters in a String

// 👉 Task:
// Write a function that returns how many characters are in a string.

// Example:
// "JavaScript" → 10

const characters=(word)=>{

    let character = 0;

    for(const char of word){
        character++;
    }
    return character;
}

const programmingLanguge = 'javascript';


// console.log(characters(programmingLanguge));