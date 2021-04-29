*** ES6 ***

Explore differences between the var and let keywords:
  unlike var, when using let, a variable with the same name can only be declared once
  let varName = "cat";
  let varName = "dog";      // returns an error
  
Compare scopes of the var and let keywords:
  a var keyword is declared globally or locally if declared in a function
  if you declare a variable with the let keyword inside a block, statement or expression, its scope is limited to it
  
Declare a read-only variable with the const keyword:
  const has all the features of let + it is in read-only
  once a variable is assigned with const, it cannot be reassigned
  a common practice when declaring a constant variable is to use all uppercase letters
  
Mutate an array declared with const:
  objects to a variable using const are still mutable
  it only prevents reassignment of the variable identifier
  const array = [ 1, 2, 3 ];
  array = [ 1, 3, 3 ];          // returns an error
  array[1]=3;                   // does not return an error
  
Prevent object mutation:
  Object.freeze(object);
  you can no longer add, update or delete properties

Use arrow functions to write concise anonymous functions:
  we often don't need to name our functions, especially when passing a function as an argument to an other function
  we create inline functions
  we don't need to name these functions because we do not reuse them anywhere else
  instead of:
    const myFunc = function() {
      const myVar = "value" ;
      return myVar ;
    }
  we say:
    const myFunc = () => "value" ;
    
Write arrow function with parameters:
  const myFunc = (param1, param2) => statement ;        // parentheses can be omitted if only one parameter
  
Set default parameters for your function:
  const myFunc = ( param1 = default value ) => statement ;
  
Use the rest parameters with function parameters:
  you can create functions that take a variable number of arguments
  function myFunc ( ...args )
  
Use the spread operator to evaluate arrays in-place:
  (...arr) returns an unpacked / spread array
  
Use destructuring assignment to extract values from objects:
  const object = { param1: "value1", param2: "value2" }
  const { param1, param2 } = object ;         // creates a variable and assign the value of the corresponding parameter of the object
  
Use destructuring assignment to assign variables from objects:
  you can also assign the value of a parameter of an object to a variable with a new name
  const { param1: newName1, param2: newName2 } = object ;
  
Use destructuring assignment to assign variables from nested objects:
  const { paramParent: { paramChild } } = object ;        // variable with same name as paramChild
  const { paramParent { paramChild: newName } } = object ;
  
Use destructuring assignment to assign variables from array:
  [a, b] = [1, 2, 3, 4];  => a=1 and b=2
  [a, b,,, c] = [1, 2, 3, 4, 5, 6]  => a=1, b=2 and c = 5
  [a, b] = [b, a]
  
Use destructuring assignment with the rest parameter to reassign array elements:
  const [a, b, ...c] = [1, 2, 3, 4, 5, 6]; => a=1, b=2 and c=[3,4,5,6]

Use destructuring assignment to pass an object as a function's parameter:
  ES5:
    const profileUpdate = (profileData) => {
      const { name, age, nationality, location } = profileData ;
      // statements
    }
  ES6:
    const profileUpdate = ({name, age, nationality, location}) => {
      // statements
    }
    
Create strings using template literals:
  const string = `hello my name is ${object.parameter}`
  
Write concise object literal declarations using object property shorthand:
  ES5:
    const getMousePosition = (x, y) => {
      x: x,
      y: y
    }).
  ES6:
    const getMousePosition = (x, y) => ({x, y});
    
Write concise declarative functions with ES6:
  ES5:
    const person = {
      name: "Taylor",
      sayHello: function() {
        return `Hello my name is ${this.name}`;
      }
    };
  ES6:
    const person = {
      name: "Taylor,
      sayHello() {
        return `Hello my name is ${this.name}`;
      }
    }
    
Use class syntax to define a constructor function:
  E5S:
    var SpaceShuttle = function(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
    var zeus = new SpaceShuttle('Jupiter');
  ES6:
    classe SpaceShuttle {
      constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
      }
    }
    const zeus = new SpaceShuttle('Jupiter');
    
Use getters and setters to control access to an object:
  class Class {
    constructor(parameter) {
      this._parameter = parameter;      // it is a convention to precede the name of a private variable with an underscore
    }
    // getter
    get param() {
      return this._paramater;
    }
    // setter
    set param(updatedParam) {
      this._parameter = updatedParam;
    }
  }
  const newClass = new Class('param1');
  console.log(newClass.param);  // param1
  newClass.param = 'newParam';
  console.log(newClass.param);  // newParam

Create a module script:
  <script type="module" src="./filename.js"></script>
  
Use export to share a code block:
  const function = (parameters) => {
    statements;
  }
  export {function} ;
  
Reuse javascript code using import:
  import {function} from './filename.js';
  
Use * to import everything from a file:
  import * as moduleName from './filename.js';
  then to use it :
    moduleName.functionName(parameters);
    
Create an export fallback with export default:
  export default function functionName (parameters) {
    statements;
  }
  
Import a default export:
  import functionName from '..filename.js';
  
Create a javascript promise:
  const promiseName = new Promis((resolve, reject) => {
    if(condition) {
      resolve(statements);
    }
    else {
      reject(statements);
    }
    promiseName.then(result=>{
      statements;
    }
    promiseName.catch(error=>{
      statements;
    }
  });
