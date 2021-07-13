# [Find the Smallest and Biggest Numbers](https://edabit.com/challenge/Q3n42rEWanZSTmsJm)

A function which returns an array with the lowest and highest numbers of the input array
<!--
  describe the function's behavior in your own words.
  explain why someone might want to use this function
-->

## Syntax

> minMax(`array of numbers`) -> `array of number`

### Parameters

**arr**: `array of numbers`
The input array which contains multiple different elements of numbers

<!--
  describe the parameter
-->

### Return Value: `array of numbers`
The return value is an array of two numbers, the minimum number and the maximum number of the input numbers

<!--
  describe the return value
-->

## Test Cases

``` js
Test.assertSimilar(minMax([14, 35, 6, 1, 34, 54]), [1, 54])
Test.assertSimilar(minMax([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734])
Test.assertSimilar(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]), [0.2345, 0.984])
Test.assertSimilar(minMax([13, 72, 98, 43, 24, 65, 31]), [13, 98])
```


<!--
  copy in the test cases from the original challenge

  if you write your own test cases in a sandbox file, include those too
-->

## Use Cases

- Ths function could be used for an auction/bedding online platform to select the max. and min.-lower and higher bedder- and point them out 
- Games recording players highest  scores and point them later
- recording the readings of weather and temperature at a certain area then point them out for reporting 

<!--
  write a minimum of 2 use cases to show this functions behavior.

  try to find interesting _edge cases_, it's good for you ;)
  an edge case is when a function behaves different than you'd expect.
  This will help you and others better understand the function.

  https://www.geeksforgeeks.org/dont-forget-edge-cases/
-->

---

---

<!-- copy this section for every solution you study -->

## [Marc](https://edabit.com/user/6QR2QdW689ihtHjan)

<!-- paste the solution here -->

```js
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
```

### Strategy
Marc used a straight forward JS builtin statement to point the lower and higher numbers of an array
<!--
  Describe what strategy they used to pass this challenge.
  Careful! your strategy description should not mention
    the code they wrote to solve the challenge.

  Practice describing their strategy at a higher level:
  a simple way to understand strategy is to think of the important steps
  between the argument values and the return values.

  For example if they use a `for` loop
  you won't mention that `i` was incremented,
  but you might mention how the final result changes at each iteration.
-->

### Implementation
Using `array.min` and `array.max` directly to be the elements of the return array output
<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->

### Possible Refactors
??
<!--
  List a couple changes you could make in their code without changing their strategy.
  For example:
    `while` loops and `for` loops can often be interchanged.
    `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

  You don't need to actually rewrite the function.
  The goal of this section is that you exploring different JS language features
  and think of different ways to implement the same strategy.
-->

## [Saw](https://edabit.com/user/L5rM3oxwjJzQErs6g)

<!-- paste the solution here -->

```js
function minMax(arr) {
	var min = Math.min(...arr);
	var max = Math.max(...arr);

	return [min, max];

}
```

### Strategy
Saw used a straight forward JS builtin statement to point the lower and higher numbers of an array
<!--

<!--
  Describe what strategy they used to pass this challenge.
  Careful! your strategy description should not mention
    the code they wrote to solve the challenge.

  Practice describing their strategy at a higher level:
  a simple way to understand strategy is to think of the important steps
  between the argument values and the return values.

  For example if they use a `for` loop
  you won't mention that `i` was incremented,
  but you might mention how the final result changes at each iteration.
-->

### Implementation
Saw declared two variables to save the min. and max numbers of the input array of numbers. then return an array contains the values of the tow variables  

<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->

### Possible Refactors

I found this code is a clean, clear and maintainable code

<!--
  List a couple changes you could make in their code without changing their strategy.
  For example:
    `while` loops and `for` loops can often be interchanged.
    `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

  You don't need to actually rewrite the function.
  The goal of this section is that you exploring different JS language features
  and think of different ways to implement the same strategy.
-->

## [Evan](https://edabit.com/user/T6fPadFz77qMprTFN)

<!-- paste the solution here -->

```js
function minMax(arr) {
  arr.sort(function(a, b){return a-b});
  return [arr[0], arr[arr.length-1]];
  
}
```

### Strategy
Evan used a JS statement to re-arrange the array elements from the lower to the highest amount to point them out later at another array

<!--
  Describe what strategy they used to pass this challenge.
  Careful! your strategy description should not mention
    the code they wrote to solve the challenge.

  Practice describing their strategy at a higher level:
  a simple way to understand strategy is to think of the important steps
  between the argument values and the return values.

  For example if they use a `for` loop
  you won't mention that `i` was incremented,
  but you might mention how the final result changes at each iteration.
-->

### Implementation
Evan used `array.sort` to re-arrange the original array element them returned a the values of the first and last values of this new array as the output

<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->

### Possible Refactors
This is a complex code where the developer created a function to re-arrange the array elements from the lower to the highest values then to call them, then call them back through the new array indexes 

<!--
  List a couple changes you could make in their code without changing their strategy.
  For example:
    `while` loops and `for` loops can often be interchanged.
    `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

  You don't need to actually rewrite the function.
  The goal of this section is that you exploring different JS language features
  and think of different ways to implement the same strategy.
-->

## [Yoon](https://edabit.com/user/cCnbuR9M6o4uKQ65F)

<!-- paste the solution here -->

```js
function minMax(arr) {
  var returnArr = [];
  var min = arr[0];
  var max = arr[0];
  
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  
  returnArr.push(min);
  returnArr.push(max);
  
  return returnArr;
}
```

### Strategy
Yoon used conditional checking loops to point out the min. and max. values of the the input array elements through iterations

<!--
  Describe what strategy they used to pass this challenge.
  Careful! your strategy description should not mention
    the code they wrote to solve the challenge.

  Practice describing their strategy at a higher level:
  a simple way to understand strategy is to think of the important steps
  between the argument values and the return values.

  For example if they use a `for` loop
  you won't mention that `i` was incremented,
  but you might mention how the final result changes at each iteration.
-->

### Implementation
Yoon declared two variables -with the value of the array 1st element value-to save the min. and max. values of the array elements through looping through the array elements and comparing their values to the value of the values of the new  variables. if the value of an element is less then the new variable so the variable which save the min. value will re-assigned to the new lower value, the same with the max value variable. then return a new array of the values of the  min and max variable values

<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->

### Possible Refactors
- `while` loop could be used instead of `if`
- the returned value could be called directly `return returnedArr(min,max)` without using returnedArr.push method to insert the array elements
<!--
  List a couple changes you could make in their code without changing their strategy.
  For example:
    `while` loops and `for` loops can often be interchanged.
    `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

  You don't need to actually rewrite the function.
  The goal of this section is that you exploring different JS language features
  and think of different ways to implement the same strategy.
-->



### References

<!--
  links that helped you to understand this solution or to think of possible refactors
-->

---

> ... maybe even more write-ups?

---

### Remix

<!-- paste your remixed solution here -->

```js
```

### Strategy

### Implementation

### Possible Refactors

### Inspired By

<!--
  which solutions inspired your solution?
  what did you take from each one?
-->

### References

---

## Retrospective

<!--
  write any notes to help you review this exercise later, and to help others' study it.

  this might include:

  - good ideas to use later in your own code
  - less good ideas to avoid in your own code
  - new vocabulary you learned
  - the most important thing(s) you learned
  - something that you still don't understand but want to keep studying
  - something that surprised you
  - tricks you will want to remember and use later
-->
