// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// input: array of numbers
// output: each index multiplied by three

describe("byThree", () => {
  it("takes in an array and multiplies each value by three", () => {
    const numbersArray1 = [6, 7, 8, 9, 10]
    const numbersArray2 = [24, 27, 30, 33, 36]
    
    expect(byThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    // Expected output: [18, 21, 24, 27, 30]
    expect(byThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    // Expected output: [72, 81, 90, 99, 108]
    
  })
})

//ReferenceError: byThree is not defined

// b) Create the function that makes the test pass.

// Pseudo----->
// create a function named byThree
// pass in an <array> paramater to add new arrays to the function
//use dot notation to access the map method to iterate over each index in the array(array.map())
// set the return value in the map method to * 3 to multiply by three on each iteration
// Each number will return multiplied by three.
//If we were outside of testing finish the function using console.log to see the result

const byThree = (array) => array.map(value => value * 3)

// byThree
// ✓ takes in an array and multiplies each value by three (4 ms)


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// input: <number>
// output: <number> is divisible by three
// input: <number>
// output: <number> is not divisible by three
// input: <other datatype> 
// output: <other datatype> is not a number

describe("divisibleByThree", () => {
  it("The function takes in a number and determines if it is divisible by three ----> <added> or if the number is not a number datatype", () => {
    const num1 = 15
    const num2 = 0
    const num3 = -7
    
    expect(divisibleByThree(num1)).toEqual(`${num1} is divisible by three`)
    // Expected output: "15 is divisible by three"
    
    expect(divisibleByThree(num2)).toEqual(`${num2} is divisible by three`)
    // Expected output: "0 is divisible by three"

    expect(divisibleByThree(num3)).toEqual(`${num3} is not divisible by three`)
    // Expected output: "-7 is not divisible by three"

     expect(divisibleByThree("Four")).toEqual(`Four is not a number`)
    // // Expected output: "Four is a word not a number"
    
  })
})

// ReferenceError: divisibleByThree is not defined

// b) Create the function that makes the test pass.

// Pseudo----->
// create a function called divisiibleByThree
// pass a <number> paramater to the function
// using a conditional statement(if) evaluate the number is the correct datatype using typeof and set the number does not equal "number"
// if the statement is true return `${number} is a word not a number`
// if the statement returns false continue to an else if conditional statement checking if the number modulo 3 does not equal 0.
// if the statement returns true return `${number} is not divisible by three`
// if the statement returns false use final conditional else statement to return all numbers divisible by three
// return `${number} is divisible by three` 
// log the function passing in the correct paramater if outside of jest testing

const divisibleByThree = (number) => {
  if(typeof number !== "number"){
    return `${number} is not a number`
  }else if(number % 3 !== 0){
    return `${number} is not divisible by three`
  }else{
    return `${number} is divisible by three`
  }
}

//  divisibleByThree
// ✓ The function takes in a number and determines if it is divisible by three ----> <added> or if the number is not a number datatype


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// input: array of strings
// output: array of strings capitalized


describe("capitalized", () => {
    it("passes an array as a paramater and retruns each word capitalized in the array", () => {
     const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
     
     const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
     
     expect(capitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
     // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
     
     expect(capitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
     // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
      
    })
  })
//  //  ReferenceError: capitalized is not defined

//  // b) Create the function that makes the test pass.

  // Pseudo----->
// create a function named capitalized
// pass in an array paramater to the function
// iterate over the array passed in using the .map() method
// return the first index of the array setting it toUpperCase()
// add the capitalized index back to the rest of the array 
// access the rest of the string using the substring(1) method taking the 1 index  to the last index to be added to index 0
// set the rest of the string to lowercase to ensure there are no uppercase letters using toUpperCase()
// if outside of jest testing log the function with the desired array to be passed in

  const capitalized = (array) => array.map(letter =>{
    return letter[0].toUpperCase() + letter.substring(1).toLowerCase()
  })
  

// capitalized
// ✓ passes an array as a paramater and retruns each word capitalized in the array (1 ms)


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// input: a word
// output: the first vowels index
// input: a number
// output: <number> is not a number

describe("firstVowel", () => {
  it("function passes in a string and returns the first vowels index", () => {
    
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
    
    expect(firstVowel(vowelTester1)).toEqual(1)
    // Expected output: 1
    
    expect(firstVowel(vowelTester2)).toEqual(0)
    // Expected output: 0
    
    expect(firstVowel(vowelTester3)).toEqual(2)
    // Expected output: 2
    
    expect(firstVowel(5)).toEqual('5 is not a word')
    
  })
})

// ReferenceError: firstVowel is not defined

//b) Create the function that makes the test pass.

// Pseudo----->
// create a function called firstVowel
// pass in a <string> paramater to the function
// use a conditional if statement to evaluate if the typeof the parameter <string> is strictly equal to 'string'
// if the statement evaluates to true return the paramater and access the string using the .search() method
// in the search method use a regular expression that contains all vowels followed by the character i to search for both upper and lowercase letters.
// if the statement returns false use an else statement to return `${str} is not a word`
// if outside of jest testing log function to see result

 const firstVowel = (str) =>{ 
    if(typeof str === 'string'){
      return str.search(/[aeiou]/i)
    }else{
      return `${str} is not a word`
    }
 }

 //  firstVowel
 // ✓ function passes in a string and returns the first vowels index (1 ms)

 

 
  
 
