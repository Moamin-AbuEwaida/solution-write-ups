# [Convert Minutes into Seconds](https://edabit.com/challenge/8q54MKnRrm89pSLmW)
This function is convert the number of minutes into a number of seconds
<!--
  describe the function's behavior in your own words.
  explain why someone might want to use this function
-->

## Syntax

> convert(`number`) -> `number`

### Parameters

**minute**: `number`
where the user inters a number representing the minutes
<!--
  describe the parameter
-->

### Return Value: `number`
the equivalent seconds number
<!--
  describe the return value
-->

## Test Cases

<!--
  copy in the test cases from the original challenge

  if you write your own test cases in a sandbox file, include those too
-->
```js
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120
```

## Use Cases
This example could be used for count down or timer applications to get a precise time counting with seconds
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

##  [Matt](https://edabit.com/user/BkPgkDQGHm66X4Qai) 

<!-- paste the solution here -->

```js
const convertMatt = (minutes) => minutes * 60;

```

### Strategy
Matt used math to get the result
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

Matt's return value is the result of multiplying the input `minute` by `60` to get the result directly with seconds

**Arrow function - implicit return**: Matt's solution is a single expression so he didn't need a `return` statement.

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

## [Igor](https://edabit.com/user/nnmY3xMDaRAQGpmMs)

<!-- paste the solution here -->

```js
function convert(minutes) {
	int = (minutes * 60);
	return int;
}
```

### Strategy
Igor used math to get the result
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
Igor declared a variable equals the multiplication of the input `minute` by `60` to get the result directly with seconds the returned the value of this variable

**simple function**: Igor's `return` statement value of the variable.

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

### Strategy
Rosebt used math to get the result
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
Rosebt multiplied the input `minute` by `60` to get the result directly with seconds

**Arrow function - implicit return**: Rosebt's `return` statement equals multiplying the input `minutes` by `60`.

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
