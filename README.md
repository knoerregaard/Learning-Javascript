# Learning JavaScript

This learning course is based on the book Elequent JavaScript (ttps://eloquentjavascript.net/)

## 1. Index
1. Index
2. Prerequisite
3. Learning goals and Learning Path
4. Introduction to JavaScript
5. Key concepts

## Introduction to JavaScript

## Key concepts
#### Types
#### Operators
#### functions


### Types
Reference: https://eloquentjavascript.net/01_values.html
To understand types in JavaScript read chapter one "Values, Types, and Operators" in Elequent Javascript. The following list is a short list of available types in JavaScript

- Numbers (which include 'infinity, -infinity, NaN)
- String
- Boolean
- Undefined

### Operators
Reference
- https://eloquentjavascript.net/01_values.html
- https://www.w3schools.com/jsref/jsref_operators.asp

Use operators in combination with your values. There exists different operators that take care of different task.

#### Operators | Arithmetic

| operator      | meaning       |
| ------------- | ------------- |
| +             | addition      |
| -             | subtraction   |
| *             | multiplication|
| /             | division      |
| %             | modulus       |
| ++            | increment     |
| --            | decrement     |

#### Operators | Assignment

| operator      | meaning       |
| ------------- | ------------- |
| =             | assignment    |
| +=            | addition      |
| -=            | subtraction   |
| \*=           | multiplication|
| /=            | division      |
| %=            | modulus       |

#### Operators | String

| operator      | meaning       |
| ------------- | ------------- |
| +             | concatenation |
| +=            | concatenation |

#### Operators | Comparison

| operator      | meaning       |
| ------------- | ------------- |
| ==            | equal to      |
| ===           | equal value and type |
| !=            | not equal to  |
| !==           | not equal value and type |
| >             | greater than  | 
| <             | less than     |
| >=            | greater than or equal to | 
| <=            | les than or equal to|

#### Operators | Conditional (Ternary)

| operator      | meaning       |
| ------------- | ------------- |
| variablename = (condition) ? value1:value2 | condition ? exprT : exprF |

The conditional operator is a short version of the 'if' statement. It takes three operands.

#### Operators | Logical 
| operator      | meaning       |
| ------------- | ------------- |
| &&            | and           |
| ||            | or            |
| !             | not           |

#### Operators | Bitwise 

upcomming

| operator      | meaning       |
| ------------- | ------------- |

#### Operators | Typeof

Typeof returns the type of fof a variable, object, function or expression formatted as a string.

Example
```
typeof 3.14                   // Returns number
```

#### Operators | delete 

The 'delete' operator deletes a property from the object

#### Operators | In

The in operator returns true if the specified property is in the specified object, otherwise false:

#### Operators | InstanceOf

The instanceof operator returns true if the specified object is an instance of the specified object:

#### Operators | void

The void operator evaluates an expression and returns undefined. This operator is often used to obtain the undefined primitive value, using "void(0)" (useful when evaluating an expression without using the return value).

### Functions (https://eloquentjavascript.net/02_program_structure.html#h_K5Yd6h3Axg)

A function is a container where you can excute certain code in order to handle certain logic.

JavaScript already have a bunch of functions that you are able to call. Here are a few of them:
- console.log()
- math.random()

The term on the left is refering to the object where the method resides. So 'console' is the object and 'log()' is the method, and likewise with math.random().

Method often takes a paramter. The paramter is input to the function in order for it to function correctly. 'console.log()' takes on parameter which is a primitive type.

```
console.log("hello world")
```
This will write 'hello world' to the console (eg browser console).

We can also write our own functions. Here is the basic function template:

```
function(){
  //do something
}
```

