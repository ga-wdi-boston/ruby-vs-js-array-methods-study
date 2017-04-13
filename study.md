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
Similarities: both Ruby and JS array methods perform some kind of function across each element of an array. Both languages have a multitude of methods that can be applied to transform an array.

Differences: syntax in how each of these methods is called.
```

## COMPARE: JS vs Ruby file reading

Look at the functions in `people.js` and `people.rb`. Both of these functions do
the same thing: they parse a csv file and enter the pertinent data into an array.
Explain the similarities and differences between these two functions.

```md
The functions are similar in that they are performing the same action. They differ in syntax. While javascript uses curly braces, ruby uses do...end. Javascript requires keywords like `let` and `const` to declare variables. Ruby does not.
```

## PEOPLE COUNT

In `lib/people-array.js`, write a function `women` that will count the number of
women in an array of people.
What are the differences between this function and the ruby function we did
in class?

```md
Most of the differences are about syntax. The functionality of both functions is the same.
```
