# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A paramater is used to pass arguments into a function. Although the name is not what matters it is important to name paramaters something that relates to the argument that is being passed. paramaters will pass in arguments in the order that they are declared in the function. Paramaters allow a function to be reused instead of directly placing the information in the function. This creates the ability to continuously performs the actions of the function while new arguments are being declared. Arguments are set peices of information that may be stored in variables or the datatype themselves. The arguments will be passed into the function when the function is invoked.

  Researched answer: Arguments are values that are declared within a function when a function is called, and paramaters are variables that are defined when the function is declared.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The predefined paramaters are value, index and array. The optional paramaters are index and array. The value paramater is required. These paramaters are all recieved from the current element and used to access information inside of the array.

  Researched answer: The predetermined paramaters of the .map() method are currentValue, index and array. The currentValue paramater is the only one that is required and they all are properties of the current element that is being accessed.



3. What is the difference between map and filter?

  Your answer: The map method iterates over an array calling a function each time it iterates over an index of the array. This method is used to perform some action on the original array and returns data to a new array. map does not change the original array. The filter method also calls a function while itereating ove each index of an array, however it is testing for certain criteria of the data. If the data equals true then it is stored in a new array which can be accessed and returned.

  Researched answer: map is a method that creates a new array by changing each index element individually, whill the filter method creates an array by removing elements that do not fit the current conditions.



4. What is the difference between a function and a method?

  Your answer: A function is a set block of code that can be reused creating the ability to not have to rewrite a program everyime you want it to run. A method on the other hand has properties that can can be accessed to perform a specific action and can be accesed using dot notation.

  Researched answer: A function is a reusable block of code that is invoked by its name. It can pass and return data that it operates on. A method is called by its name that is associated with an object. A method is an instance of a class.



5. What is object destructuring?

  Your answer: Object destructuring is the prcocess of taking values from objects and arrays and storing them in a variable. This allows faster and easier access to this information to us in a program. Instead of using dot or bracket notation to continuously access nested arrays, objects or just values you can call the variable name to gain all of the information you have stored. The path to the information such as <class.array[0]> will all be stored in the variable such as<path>.

  Researched answer: Object destructing is a Javascript expresion that allows you to extract data from arrays and objects. It hen stores it in a variable which can be called by name to by accessed later.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting is the act of moving the  declaration of functions, variables and classes higher in their scope befor the code is executed. This can be safely done with functions so that you may use them prior to them being executed in the code. With variables and classes the hoisted declarations are not ran until the code is executed.

  Researched answer: A proceess where the interpreter appears to move declarations of functions, classes and variables to the top of its scope befor the execution of its code.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Class inheritence allows you to take all information from a parent class and add more. It is useful for code reusibility

2. React: React is a component based, javascript library used for frontend development. It is primarily used for user interface on single page applications.

3. React state: State allows programmers to manage data in a changing application. It is defined in an object in key value pairs used to track data in an application.

4. React lifecycle methods: Each react components life cycle can be monitored during the three main phases mounting, updating and unmounting. Mounting is used when a component is being created and inserted into the DOM. 
updating is caused by updates to the props or state. Unmounting occurs when a component is being removed from the DOM.

5. DOM: The Document Object Model(DOM) defines the structure of documents. It controls how a document is accessed and manipulated. It is an API for HTML and XML documents.
