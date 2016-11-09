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
I used .splice(1) to remove the first element of the array. In ruby, I would
use .shift method. JS has the .shift method as well, it would return the
the removed method, whereas in Ruby, it would return the new array.
.splice() does not exist in Ruby??? I think the equivalent would be slice??

I used .filter() in JS to select numbers in the array that are odd or even. In
Ruby, I would use .select or .reject methods.
```

## COMPARE: JS vs Ruby file reading

Look at the functions in `people.js` and `people.rb`. Both of these functions do
the same thing: they parse a csv file and enter the pertinent data into an array.
Explain the similarities and differences between these two funtions.

```md
At first glance, JS code is very long, and does the same thing that Ruby
acheives in a longer way. Ruby uses a lot less LOC.
```

## PEOPLE COUNT

In `lib/people-array.js`, write a function `women` that will count the number of
women in an array of people.
What are the differences between this function and the ruby funcion we did
in class?

```md
In JS, I used the .filter() method to filter the women out of an array of
people.
In Ruby, I used the .select method to do the same.
```
