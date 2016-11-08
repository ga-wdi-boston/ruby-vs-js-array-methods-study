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
Both languages have a reduce function that makes adding or multiplying elements of an array easier.
JavaScript required a little more work to grab just the even and odd numbers and to remove 0 from the calculation.
The above was much easier in Ruby because of additional methods like select and reject.
```

## COMPARE: JS vs Ruby file reading

Look at the functions in `people.js` and `people.rb`. Both of these functions do
the same thing: they parse a csv file and enter the pertinent data into an array.
Explain the similarities and differences between these two funtions.

```md
The JavaScript function definitely seems more complex.  It's also built out as a separate function whereas the Ruby function is built as a method within the People class.  It seems like once some of the setup is done for JavaScript the portion where it reads from the CSV file and enters the data into an array is fairly similar to Ruby.  JavaScript uses a while loop and pushes to the empty array while Ruby uses foreach and append.
```

## PEOPLE COUNT

In `lib/people-array.js`, write a function `women` that will count the number of
women in an array of people.
What are the differences between this function and the ruby funcion we did
in class?

```md
Both functions follow the same process, they check whether gender is equal to 'f' for each person and if so, they
get counted.  In JavaScript this is done by iterating through the people array, seeing if each item has a gender of 'f' and if so, incrementing a counter.  In Ruby, this is done by selecting values from within the people array that meet the gender == 'f' condition and then finding the length of that array selection.  It is much simpler and much less typing in Ruby.
```
