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
<!--
They both use the same notation to apply the method to a variable: 'fib.reduce' for example. Both allow users to put parameters in "()", but Ruby does not require it. The difference in equality signs is also noticable: "===" in JS vs "==" in Ruby. Both languages also have a lot of methods in common; several of the methods in common do essentially the same thing within each language.

Ruby allows users to use the ! and ? notation in order to change how the method
is applied and/or what action is performed, JS does not.


 -->
```

## COMPARE: JS vs Ruby file reading

Look at the functions in `people.js` and `people.rb`. Both of these functions do
the same thing: they parse a csv file and enter the pertinent data into an array.
Explain the similarities and differences between these two funtions.

```md
<!--
They both create new objects by capitalizing the 1st letter of the object's name.

JS: First determines if the data is readible with parser. When determined that the information in people.csv is readable, it declares a variable, 'record', and then pushes the person's information value to a new Person object (record).

Ruby: Creates the People class, then allows the :people symbol to be a getter (so the information can be seen but not edited). @people is then set to an empty array so that the value of people at that instance can be created into an object. Then the .foreach method is used on a CSV file which is located at the providede path ('data/people.csv'). It ensures that the headers are correct so that the data can be properly read. The headers are then made lowercase and turned into symbols. A block is then started with 'do' and |person| is set as a parameter. A new object is then created with the information from the instance of @people, and is then turned into a hash.

Both languages need to ensure that they can read the information stored in the file. They both need to create an object to store the data their looking for. They both then create an object with that person's information (in the acceptable instances).



 -->
```

## PEOPLE COUNT

In `lib/people-array.js`, write a function `women` that will count the number of
women in an array of people.
What are the differences between this function and the ruby funcion we did
in class?

```md
<!--
Firstly, the data set is the same. So information such as field names, the path to the file (depending on the directory's contents) and the index numbers of the relevant information.

In JS, we also have to use, what I consider, a much more syntactically-complex loop in order to figure out how many people have a value of "f" as their
gender parameter. Also, we do not use the pipes (|) in a very similar fashion at all; in Ruby the pipes are used essentially to declare a singular variable inside a block.



-->
```
