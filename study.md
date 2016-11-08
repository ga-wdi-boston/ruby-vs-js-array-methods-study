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
The fact that both Ruby and JavaScript have a reduce method makes things a little easier for me but I found that things were quite a bit easier when trying to find the even and odd numbers then with JavaScript
```

## COMPARE: JS vs Ruby file reading

Look at the functions in `people.js` and `people.rb`. Both of these functions do
the same thing: they parse a csv file and enter the pertinent data into an array.
Explain the similarities and differences between these two funtions.

```md
The syntax is quite different but that is the obvious answer. The functions are both written differently because Ruby's method is built within the People's class and the JavaScript function is built as a seperate function from the rest of the code.
```

## PEOPLE COUNT

In `lib/people-array.js`, write a function `women` that will count the number of
women in an array of people.
What are the differences between this function and the ruby funcion we did
in class?

```md
I find the function in Ruby is way more simple than JavaScripts in this scenario, most of all they are very similar as they are accomplishing the same thing. They check the gender for 'f' and then counts. It is iterated in JavaScript and selected within the array in Ruby.
```
