# [Check if One Array can be Nested in Another](https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj)

A function where check between two arrays of numbers, if the second array can nest the first array 
<!--
  describe the function's behavior in your own words.
  explain why someone might want to use this function
-->

## Syntax

> canNest(`array number`, `array number`) -> `boolean`

### Parameters

**arr1**: `array number`
first input/parameter which contains a number of elements -numbers-

**arr2**: `array number`
second input/parameter which contains two elements -numbers- for checking the possibility to nest the 1st parameter
<!--
  describe the parameter
-->

### Return Value: `boolean`
the result of the checking operation if the 2nd array can nest the 1st array

<!--
  describe the return value
-->

## Test Cases

```js
Test.assertEquals(canNest([1, 2, 3, 4], [0, 6]), true)
Test.assertEquals(canNest([3, 1], [4, 0]), true)
Test.assertEquals(canNest([9, 9, 8], [8, 9, 10]), false)
Test.assertEquals(canNest([9, 9, 8], [8, 9]), false)
Test.assertEquals(canNest([1, 2, 3, 4], [2, 3]), false)
```

<!--
  copy in the test cases from the original challenge

  if you write your own test cases in a sandbox file, include those too
-->

## Use Cases
!!!

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

## [Pustur](https://edabit.com/user/65dbBZynphj53nXqA)

<!-- paste the solution here -->

```js
const canNest = (arr1, arr2) =>
  Math.min(...arr1) > Math.min(...arr2) &&
  Math.max(...arr1) < Math.max(...arr2);
```

### Strategy
 Using the Js builtin code statement with conditional check to return the result
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
An arrow function -with no return statement-using `Math.min` and `Math.max` to compare between the arrays elements values, in case the 2nd array elements values can nest the 1st array elements values (both conditions are complied), then the result will be `true`

<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->

### Possible Refactors
!!
<!--
  List a couple changes you could make in their code without changing their strategy.
  For example:
    `while` loops and `for` loops can often be interchanged.
    `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

  You don't need to actually rewrite the function.
  The goal of this section is that you exploring different JS language features
  and think of different ways to implement the same strategy.
-->
## [Neveen Sharma](https://edabit.com/user/zNN2fW2pJGpTxBgzx)

<!-- paste the solution here -->

```js
function canNest(arr1, arr2) {
	let arr1Min = Math.min(...arr1), arr1Max = Math.max(...arr1), arr2Min = Math.min(...arr2), arr2Max = Math.max(...arr2);
  
  if (arr1Min > arr2Min && arr1Max < arr2Max) {
    return true;
  } else {
    return false;
  }
}
```
### Strategy
Neveen declared and initialized variable to check their variables according to the conditional statement to verify if the 2nd array can nest the 1st array or not 
 

### Implementation
Neveen declared 4 new variables and initialized their values with the max and min elements values of the 1st and 2nd arrays. then with `if` statement check the values of the 2nd array elements values wether they can host the 1st array or not.

### Possible Refactors
- the new variables could be declared and initialized in multi lines which would make the lines more readable 


## [JamesMartinez](https://edabit.com/user/xQxs2NHM2qpv66hWb)

<!-- paste the solution here -->

```js
function canNest(arr1, arr2) {
    let firstMax = Math.max(...arr1);
  let secondMax = Math.max(...arr2);

  let firstMin = Math.min(...arr1);
  let secondMin = Math.min(...arr2);

  if ((firstMax < secondMax) && (firstMin > secondMin)) {
    return true;
  } else {
    return false;
  }
}
```
### Strategy
Neveen declared and initialized variable to check their variables according to the conditional statement to verify if the 2nd array can nest the 1st array or not 
 

### Implementation
Neveen declared 4 new variables and initialized their values with the max and min elements values of the 1st and 2nd arrays. then with `if` statement check the values of the 2nd array elements values wether they can host the 1st array or not.


### Possible Refactors
Here it looks more clear and readable

## [Yaman Alramahi](https://edabit.com/user/omn98QP6uBd923Azp)

<!-- paste the solution here -->

```js
	arr1=arr1.sort((a,b)=>a-b)
  arr2=arr2.sort((a,b)=>a-b)
  arr1_min=arr1[0];arr2_min=arr2[0];
  arr1_max=arr1[arr1.length-1];arr2_max=arr2[arr2.length-1];
  if(arr1_min>arr2_min && arr1_max<arr2_max)return true
  return false
}

```
### Strategy

Complex and weird way with .sort statement
### Implementation

### Possible Refactors
- new arrays to be declared in different lines to be more readable


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
