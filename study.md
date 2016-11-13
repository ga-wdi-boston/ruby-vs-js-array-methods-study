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
There are inherent methods you can use on arrays in both JS and Ruby. You can iterate through arrays. In JS I'm more accustomed to using for loops, while that's not the case in Ruby.
```

## COMPARE: JS vs Ruby file reading

Look at the functions in `people.js` and `people.rb`. Both of these functions do
the same thing: they parse a csv file and enter the pertinent data into an array.
Explain the similarities and differences between these two funtions.

```md
Way less code required to accomplish the same task in Ruby than in JS. In JS, many more local variables/constants were declared to store the results of different parsing / manipulations. In Ruby, the "getter" and "setter" methods make it much easier to assign values to instance variables and retrieve values. In this instance, it made it much easier to extrapolate what we wanted from the CSV and put it somewhere new...
```

## PEOPLE COUNT

In `lib/people-array.js`, write a function `women` that will count the number of
women in an array of people.
What are the differences between this function and the ruby funcion we did
in class?

```md
We had to explicitly return a new array in JS rather than using .select in Ruby which automatically returns a new array (and because there is an implicit return in Ruby) so we could extrapolate what we wanted from the "people" array in Ruby (just women), automatically get that new array and then just use .length to tally up how many were in the new array. In JS, I had to explicitly return the new array of women so I could then count them by using .reduce, which is a callback. Otherwise, they seem pretty simliar to me in terms of process. 
```
