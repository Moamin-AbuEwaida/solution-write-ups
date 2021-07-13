# [Add up the Numbers from a Single Number](https://edabit.com/challenge/4gzDuDkompAqujpRi)

A function that calculate the summation of the numbers starting from 1 till the assigned number

## Syntax

> quarterOf(`number`) -> `number`

### Parameters

**num**: `number`

- A number assigned to have the final calculations.

### Return Value: `number`

The result of the summation of numbers.

## Test Cases

Sample tests from edabit:

```js
describe('Basic Tests', () => {
Test.assertEquals(addUp(4), 10)
Test.assertEquals(addUp(13), 91)
Test.assertEquals(addUp(600), 180300)
Test.assertEquals(addUp(392), 77028)
Test.assertEquals(addUp(53), 1431)
Test.assertEquals(addUp(897), 402753)
Test.assertEquals(addUp(23), 276)
Test.assertEquals(addUp(1000), 500500)
Test.assertEquals(addUp(738), 272691)
Test.assertEquals(addUp(100), 5050)
Test.assertEquals(addUp(925), 428275)
Test.assertEquals(addUp(1), 1)
Test.assertEquals(addUp(999), 499500)
Test.assertEquals(addUp(175), 15400)
Test.assertEquals(addUp(111), 6216)
});
```


## Use Cases

<!-- >  > Notice! The examples should not include the source code for your solution or someone else's. Examples show how to _call_ the function in a realistic(ish) setting.

This function's behavior is relatively simple to understand. This exercise didn't include complicated edge cases so there are only 12 possible examples. I chose two that show the transition from one quarter to the next

The last second quarter month:

```

---

---
-->
## [-sir](https://[www.codewars.com/users/Dannerd](https://edabit.com/user/F7iZc3vpy7d9ALD6D))

```js
function addUp(num) {
  return (num * (num + 1))/2;
}
```

### Strategy

The developer used a pure math calculation method the reach to the result value

### Implementation

The developer wrote an equation where adding `1` to the number then multiplies the result with the same number then divide the result on `2` to reach to the final return value.

### Possible Refactors
??


This strategy could also be implemented with these Implementation ...

- a long `if else if else` statement
- a long `switch case`,
- an object with key/value pairs to represent the possible correct answers

### References



---

## [Gabriel](https://edabit.com/user/akYGmQ9iZcZm2d8BP)

```js
function addUpGabriel(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
```

### Strategy

Gabriel used iteration to go through the implement the increment/summation "accumulate" process 

### Implementation

through the for loop the developer used, the function started from `1` and started to doing the summation to the number though each iteration untill the number of loops reaches to the number assigned to the function.
 
### Possible Refactors


???

This strategy could also be implemented using these (but not only these) Implementation ...

- an arrow function with implicit return
- bitwise operators (if you want to make your life difficult)
- `Math.ceil` to round up, instead of rounding down

### References

For ldq's solution I needed to review operator precedence and look up how `Math.floor` works.



---

### [범두](https://edabit.com/user/REGpkw8KfARygwCmB)

```js
function addUpKorean(num) {
  var a = 0;
  for (var i = num; i > 0; i--) {
    a += i;
  }
  return a;
}
```

### Strategyde
The developer here used to go through the accumulating process using iterations

### Implementation
The developer chossed to use a for loop through by decrementing  the counter starting from the number needed to stop the counter from till the counter stops at `1` then accumulate the result.

### Possible Refactors
??

### References


---

## Retrospective

Studying ldq's solution I finally understood why to use parenthesis, I'd always wondered why you'd need to wrap thing in extra parenthesis. Experimenting with their solution I found that it only works with the parenthesis like they are. any other way and it doesn't pass the tests. (order of operations!)

Statements and expressions also clicked for me. Studying solutions that do and don't use implicit returns helped to see this.

I'm still struggling to tell the difference between strategy and implementation. Its hard for me to describe how the problem was solved without mentioning the Implementation that are used.

## [Omaymaguelmami]([https://[www.codewars.com/users/Dannerd](https://edabit.com/user/F7iZc3vpy7d9ALD6D)](https://edabit.com/user/jP9hmYa7DeMMktsoj))

```js
function addUp(num) {
	if(num===0){
		return num
	}
	return num +addUp(num-1)
}
```

### Strategy

This problem has a small number of possible arguments and return values. Dan chose the strategy of listing all possible solutions and using the argument to determine which value to return.

### Implementation

Dannerd wrote a one-line implementation of his strategy that uses array access to get the correct answer. The trickiest bit of his implementation is that that his array actually has 13 entries because the first value's index is `0`, not `1`. He wrote a `1` as the first entry but it could actually be any value because it's never used.

**Arrow function - implicit return**: Dannerd's solution is a single expression so he didn't need a `return` statement.

**Array literal (hard-coded values)**: He hard-coded all the right answers (in order) into an array.

**Array access by index**: Since the parameter is a number, Dan used it as an index to access the correct answer in the array.

### Possible Refactors

This strategy could also be implemented with these Implementation ...

- a long `if else if else` statement
- a long `switch case`,
- an object with key/value pairs to represent the possible correct answers

### References

This solution was interesting because of how Dannerd used JS, the only new that confused me for a minute was the implicit return:

- implicit returns: [kbarker.dev](https://kbarker.dev/blog/implicit-return-statements-in-javascript/)

---
