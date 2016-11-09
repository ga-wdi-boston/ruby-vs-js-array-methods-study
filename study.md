# Ruby vs JavaScript Array Methods Study

Use your favorite search engine and any other resources to research and
respond to the following questions.

In your responses, be sure to cite any relevant sources you consulted in your
search. We ask you to write responses in your own words in order to see how you
process what you've read. Please do not respond with direct quotes from source
material. Instead, digest what you've read and repeat it in your own voice.

Use `grunt test` to test your code.


## FIBONACCI

In `bin/fibonacci.js` please write the following:
1. `sumFibs`. Use reduce to find the sum of the `fibs` array.
2. `prodFibs`. Use array methods to find the product of the `fibs` array,
    not including 0.
3. `sumOdd`. Use array methods to find the sum of the odd numbers in the
    `fibs` array.
4. `prodEven`. Use array methods to find the product of the even numbers in the
    `fibs` array, not including 0.


What were some similarities and differences between the Ruby and JS array methods?

```md
the methods do similar things -- they reduce, split, filter arrays and are similarly chainable, but JS methods require explicit return statements in their callbacks
```

## COMPARE: JS vs Ruby file reading

Look at the functions in `people.js` and `people.rb`. Both of these functions do
the same thing: they parse a csv file and enter the pertinent data into an array.
Explain the similarities and differences between these two funtions.

```md
Ruby comes with a method which parses the csv directly, js requires more functions to be written and calls to file names more specifically. Ruby is more implicit.
```

## PEOPLE COUNT

In `lib/people-array.js`, write a function `women` that will count the number of
women in an array of people.
What are the differences between this function and the ruby funcion we did
in class?

```md
For this, we used a callback function feeding into the filter() method. In ruby we just used a code block with the select method. They're similar, but the select method iterates over elements in one line
```
