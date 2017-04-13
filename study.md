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
some of the similarites are that some of the methods at their core are doing the same thing. like with reduce they are both taking an array or an enumerable and reducing them down to one value based on some code.

Some of the differences include the syntatic sugar in Ruby allows you to accomplish essentially the same thing in a lot less lines of code. Also you can run some of these methods on enumerables in Ruby when there is no such thing as an enumerable in JS
```

## COMPARE: JS vs Ruby file reading

Look at the functions in `people.js` and `people.rb`. Both of these functions do
the same thing: they parse a csv file and enter the pertinent data into an array.
Explain the similarities and differences between these two functions.

```md
Similarities: They are doing the exact same thing... the end goal is exaclty the same

Differences: The Ruby file is much smaller. There are modules already accessiable to use in Ruby s(ex: CSV)
```

## PEOPLE COUNT

In `lib/people-array.js`, write a function `women` that will count the number of
women in an array of people.
What are the differences between this function and the ruby function we did
in class?

```md
this function has to be much longer to achieve the same results of the Ruby code. it almost seems like we need to access more methods in JS to get the same thing in Ruby
```
