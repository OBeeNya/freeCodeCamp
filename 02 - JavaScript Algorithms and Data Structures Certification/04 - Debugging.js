*** DEBUGGING ***

Issues in code generally come in 3 forms:
  syntax errors that prevenet your program from running
  runtime errors where your code has unexpected bzhavior
  logical errors where your code doesn't do what you intended
  
Use the javascript console to check the value of a variable:
  use console.log() at strategic points to show the intermediate values of variables
  
Understanding the difference between the freecodecamp and browser console:
  if you want the browser console to mimic the freecodecamp console, place console.clear() before any other console calls, to clear the browser console
  
Use typeof to check the type of a variable:
  javascript recognizes 6 primitive (immutable) data types: boolean, null, undefined, number, string and symbol
  and 1 mutable type: object
  console.log(typeof "");
  
Catch misspelled variable and function names:
  one syntax-level issue that fast typers can commiserate with is the humble spelling error
  
Catch unclosed parentheses, brackets, braces and quotes:
  one way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, then move the cursor back between them
  
Catch mixed usage of single and double quotes:
  you can escape the quotes inside the string by using the backslash (\) escape character
  
Catch use of assignment operator instead of equality operator:
  the assignment operator = in JavaScript assigns a value to a variable name
  the == and === operators check for equality
  the triple === tests for strict equality, meaning both value and type are the same
  
Catch missing open and closing parentheses after a function call:
  when a function or method doesn't take any arguments, you may forget to include the empty opening and closing parentheses when calling it
  
Catch arguments passed in the wrong order when calling a function:
  make sure to supply all required arguments, in the proper order to avoid these issues
  
Catch off by one errors when using indexing:
  off by one errors (OBOE) crop up when you're trying to target a specific index of a string or array, or when looping over the indices of them
  
Use caution when reinitializing variables inside a loop:
  printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, or failing to reset a variable
  
Prevent infinite loops with a valid terminal condition:
  it's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached
