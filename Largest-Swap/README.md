# [Largest Swap](https://edabit.com/challenge/hD3euqPHM82Cbr7R8)
 a function check whether flipping the two digits number will result a bigger or smaller number with a true or false flag
<!--
  describe the function's behavior in your own words.
  explain why someone might want to use this function
-->

## Syntax

> largestSwap(`Number`) -> `Boolean`

### Parameters

**Num**: `Number`
a two digits number
<!--
  describe the parameter
-->

### Return Value: `Boolean`
a true of false value indicates whether the input parameter number flipping will be smaller or bigger number
<!--
  describe the return value
-->

## Test Cases
```js
Test.assertEquals(largestSwap(27), false, '27 < 72, so not largest swap.')
Test.assertEquals(largestSwap(43), true, '43 > 34, so largest swap.')
Test.assertEquals(largestSwap(14), false, '14 < 41, so not largest swap.')
Test.assertEquals(largestSwap(53), true, '53 > 35, so largest swap.')
Test.assertEquals(largestSwap(99), true, 'Cannot do better, so largest swap.')
```

<!--
  copy in the test cases from the original challenge

  if you write your own test cases in a sandbox file, include those too
-->

## Use Cases
??
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

## [Maria Milovanava](https://edabit.com/user/CDu3FgsPPzS3ryPHP)

<!-- paste the solution here -->

```js
function largestSwapMaria(num) {
  return num / 10 > num % 10;
}
```

### Strategy
Using mathematics to check the swapping result possibilities 
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
The developer compares between the result of the dividing the input number over 10 and the result of the modulus operation of 10, incase the result of the dividing operation is greater than the reminder, the return is `true`
<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->

### Possible Refactors
- could have a conditional statement (if or while) to make sure the input parameter is a double digit integer 
- 

<!--
  List a couple changes you could make in their code without changing their strategy.
  For example:
    `while` loops and `for` loops can often be interchanged.
    `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

  You don't need to actually rewrite the function.
  The goal of this section is that you exploring different JS language features
  and think of different ways to implement the same strategy.
-->

## [CVF](https://edabit.com/user/yjtdwc2AC4jA2RWtn)

<!-- paste the solution here -->

```js
function largestSwapCVF(num) {
  return Math.floor(num / 10) >= num % 10;
}

```

### Strategy
Using mathematics to check the swapping result possibilities 


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
The developer used the mathematical operators `/` and `%` to compare between the results of the two operation to flag true or false greater swapping opportunity. Adding the `Math.floor` doesn't change anything as `Math.floor` acts the same of the `>` comparison operator to return a Boolean value
`Math.floor() function returns the largest integer less than or equal to a given number.`

<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->

### Possible Refactors
- Math.floor could be removed

<!--
  List a couple changes you could make in their code without changing their strategy.
  For example:
    `while` loops and `for` loops can often be interchanged.
    `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

  You don't need to actually rewrite the function.
  The goal of this section is that you exploring different JS language features
  and think of different ways to implement the same strategy.
-->


## [Binada](https://edabit.com/user/SxLAeYg3KiEGz3qqL)

<!-- paste the solution here -->

```js
function largestSwapBinada(num) {
  let first = Math.trunc(num / 10);
  let second = num - first * 10;
  if (num >= first + second * 10) {
    return true;
  } else {
    return false;
  }
}
```

### Strategy
Using conditional statement to flag the return value 

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
the developer declared two variables and initiates their values with mathematical and JS statements to find out the results which will be compared to return the swapping operation possibility to get greater or smaller number.
* `first = Math.trunc(num / 10)` and `second = num - first * 10` variables to be used for the comparing statement

NOTE:
`Math.trunc() function returns the integer part of a number by removing any fractional digits.`
<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->

### Possible Refactors
!!!

<!--
  List a couple changes you could make in their code without changing their strategy.
  For example:
    `while` loops and `for` loops can often be interchanged.
    `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

  You don't need to actually rewrite the function.
  The goal of this section is that you exploring different JS language features
  and think of different ways to implement the same strategy.
-->



## [PavelSrom](https://edabit.com/user/TMTH5LfMm9MrBFyEx)

<!-- paste the solution here -->

```js
const largestSwapPavelSrom = (num) =>
  Number(num.toString().split("").reverse().join("")) <= num;

```

### Strategy
the developer used JS builtin statements to reverse the input parameter digits
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
with a one line arrow function with no `return` statement , the developer used `num.string` to changed the parameter type and split the string into two stings by `.split` then swap the number with `reverse` and at the end rejoin the two stings by `.join` . The whole operation is returned to be number again by`.Number`. this new number is compared with the original parameter number to result a Boolean flag whether the new number bigger or smaller than the original number

<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->

### Possible Refactors

<!--
  List a couple changes you could make in their code without changing their strategy.
  For example:
    `while` loops and `for` loops can often be interchanged.
    `if else`, `switch case` and `_ ? _ : _` can sometimes be interchanged.

  You don't need to actually rewrite the function.
  The goal of this section is that you exploring different JS language features
  and think of different ways to implement the same strategy.
-->



## [AlwaysDistracted](https://edabit.com/user/3EgZShfBYmWwS57Lp)

<!-- paste the solution here -->

```js

function largestSwapAlwaysDistracted(num) {
  return num.toString().charAt(0) >= num.toString().charAt(1);
}
```

### Strategy
The developer used JS built in statement to compare between the tow digits of the input parameter. 
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
The developer changed the `number` into a `string` then checked between the string characters values to return true or false largest swap

<!--
  Describe the solution written by this user.
  How did they use JS to implement their strategy?
  What language features did they use?
  What decisions do you think they made and why?
-->

### Possible Refactors

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
