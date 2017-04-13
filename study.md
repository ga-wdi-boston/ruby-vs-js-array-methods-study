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
  - Both Ruby and JS array methods use their `reduce` method.
Differences:
  - In Ruby, `num.even?` or `num.odd?` are used to check for even or odd numbers.
  - In JS, the `%` modulo operator boolean test is used to check for even
     (num % 2 === 0) or odd (num % 2 !== 0) numbers.
  - Ruby code that uses array methods are usually shorter in length than their
     JS equivalents.
```

## COMPARE: JS vs Ruby file reading

Look at the functions in `people.js` and `people.rb`. Both of these functions do
the same thing: they parse a csv file and enter the pertinent data into an array.
Explain the similarities and differences between these two functions.

```md
Similarities:
 - Both functions iterate through the data/people.csv file and load data into a
    people array.
Differences:
   - There are several differences between the `people.js` and the `people.rb`
     functions.  The Ruby function is much smaller in length than its JS
     function counterpart.  The Ruby function inherits methods from the CSV
     type and is much easier to use than the JS function.
```

## PEOPLE COUNT

In `lib/people-array.js`, write a function `women` that will count the number of
women in an array of people.
What are the differences between this function and the ruby function we did
in class?

```md
The Ruby function uses the `select` method and the JS function uses the `filter`
and the `reduce` methods.  The Ruby function is also shorter than the JS
function counterpart.
```
