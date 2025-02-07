Introduction to While Loops
===========================

A **while loop** allows you to repeatedly execute a block of code as long as a specified condition is `true`. This is useful for running a loop when the number of iterations is not known beforehand.

Basic While Loop
----------------

The syntax of a while loop is:
```javascript
while (condition) {
    // Code to be executed
}
````
Example:
```javascript
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count = count + 1; // Increment count to avoid an infinite loop through variable reassignment
}
```


## The ++ (plus-plus) operator
Incrementing a variable up by 1 is such a common occurrence in computer programming (think C++) that there is a special operator to do just that:

```javascript
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++; // this is the same as count = count + 1.
}
```
In other words, the ++ takes a variable, adds 1 to it, and then reassigns that new value to the original variable

Iterating with a While Loop
---------------------------

We can use a while loop to iterate through an array:
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}
```
Breaking Out of a While Loop
----------------------------

Use the `break` statement to exit a while loop prematurely:
```javascript
let number = 0;
while (true) {
    console.log("Number is: " + number);
    if (number >= 3) {
        break;
    }
    number++;
}
```
Conclusion
----------

While loops are a powerful way to repeat actions until a certain condition is met. They are particularly useful for scenarios where the number of iterations is unknown in advance.
