// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
// console.log(cohort.split(""))

// a) Your answer: ['D', 'e', 'l', 't', 'a', ' ', '2', '2']
// b) Verify and explain: This is correct. This happens because by using the split method on the string it is then stored in an array with its own index position. If you wanted to return it to the original string you would need to use the .join() method. This technique is used to map over the string and change or access elements to delete or update them.


// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: undefined. This is the result because the function has no return statement. A function needs a return statement to pass the data back to the rest of the code. Right now the code is passing in a string and running the string inside the function but it never leaves the function to return to the console.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer:[ 8, 10, 12, 14, 16 ]
// b) Verify and explain: [ 8, 10, 12, 14, 16 ]. This is the result because the array of numbers is being iterated over using the map method. it is then multiplying each element of the array by two and then returning it into an array which is then stored in the variable multBy2. When you console log the variable it will output the new array that was stored.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:[ 11, 13, 15 ]
// b) Verify and explain: [ 11, 13, 15 ]. This happrns because using the filter method a new array is created with values that pass a test. in this situation the test is whether the value passed modulo 2 does not evaluate to zero. which means it is an odd number and will be added to the new array. the new array is stored into the onlyOdds varaible and then displayed using console.log.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: Javascript. This is the result because the myCoding skills contains a variety of information in key value pairs. the languages key is storing a nested array. This array is able to be accessed using dot and bracket notation. You must move through the layers of the object to reach the array in this case myCodingSkills is the first layer then using . you access the languages array and are accessing the 0 index using [0]. The Javascript string is in the 0 index of the array.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer:Learn { student: 'George', cohort: 'Bravo', year: 2022 }
// b) Verify and explain:{ student: 'George', cohort: 'Bravo', year: 2022 }. This is the result because you are creating a new object with the Learn class. the constructor acts like a blueprint which creates and initializes the new object. The name paramater passes to this.name = name. creating a new name variable for the object. this is a keyword used to bind it to the new object that is constructed(learnStudent). this is the same for the other information in the class constructor but you do not need a paramater because the information is already defined in the class constructor. The new object is then created by being stored in the new objects name and is created using a new operator witch is set to create a new instance of the Learn class and passes in the name paramater "George".
