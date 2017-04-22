# Ruby vs JavaScript Array Methods Study

Use your favorite search engine and any other resources to research and
respond to the following questions.

In your responses, be sure to cite any relevant sources you consulted in your
search. We ask you to write responses in your own words in order to see how you
process what you've read. Please do not respond with direct quotes from source
material. Instead, digest what you've read and repeat it in your own voice.

Use `grunt test` to test your code.


## FIBONACCI

In `lib/fibonacci.js` please write the following in **_JavaScript_**:
1. `sumFibs`. Use reduce to find the sum of the `fibs` array.
2. `prodFibs`. Use array methods to find the product of the `fibs` array,
    not including 0.
3. `sumOdd`. Use array methods to find the sum of the odd numbers in the
    `fibs` array.
4. `prodEven`. Use array methods to find the product of the even numbers in the
    `fibs` array, not including 0.

    **Note:** `sumFibs`, `prodFibs`, `sumOdd`, and `prodEven` should be variables that store the result of invoking array methods on the `fibs` array, and not the methods themselves.


What were some similarities and differences between the Ruby and JS array methods?

```md
Similarities:
-In both, arrays represent lists.

Differences:
- In Ruby, "Array" is a class that hold methods for arrays.  In JavaScript, "Array.prototype" is an object that hold methods for arrays.
- In JavaScript, we used a function to control the behavior of Array methods. In Ruby, we use blocks.
```

## COMPARE: JS vs Ruby file reading

Look at the functions in `people.js` and `people.rb`. Both of these functions do
the same thing: they parse a csv file and enter the pertinent data into an array.
Explain the similarities and differences between these two functions.

```md
Similarities:
- Both are parsing a cvs file and entering data in n array
- Both declare an empty people array
-

Differences:
- The Ruby function requires significantly less lines of code
- Ruby uses attr_reader to communicate the intent
- Ruby uses intialize for the initial setup of the class

```

## PEOPLE COUNT

In `lib/people-array.js`, write a function `women` that will count the number of
women in an array of people.
What are the differences between this function and the ruby function we did
in class?

```md
At this point, I don not recall the specific Ruby function that we did in class.  However, I would think that the Javascript function requires more lines of code than the Ruby function.
```
