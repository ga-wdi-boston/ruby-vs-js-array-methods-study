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
- Similarities
  - Both methods have 2 arguments, an accumlator and the current element
  - Both methods return the accumulator
  - Both methods allow you to specify an initial value
- Differences
  - In Ruby, the initial value is passed in using parens next to "reduce"
  - In JS, the initial value is passed in by putting it at the end of the reduce function
```

## COMPARE: JS vs Ruby file reading

Look at the functions in `people.js` and `people.rb`. Both of these functions do
the same thing: they parse a csv file and enter the pertinent data into an array.
Explain the similarities and differences between these two functions.

```md
- Similarities
- Differences
  - Ruby function is much shorter
  - JS function declares a lot more variables
  - JS is exporting the function, Ruby doesnt seem to be
  - Ruby uses a foreach, JS uses a while loop
```

## PEOPLE COUNT

In `lib/people-array.js`, write a function `women` that will count the number of
women in an array of people.
What are the differences between this function and the ruby function we did
in class?

```md
* You have to use the "return" keyword to specify a return value, in ruby it was implicit
* The initial value of 0 goes at the end of the reduce function instead of the beginning
```
