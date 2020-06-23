// addfavoriteBook(..) function
function addFavoriteBook(bookName){
    // checking for the book name that dosen't have great
    if (!bookName.includes("Great")) {
        //adding it to favoriteBooks array with push
        favoriteBooks.push(bookName);
    }
}

// printing FavoriteBooks and number of books array.
function printFavoriteBooks(){
    console.log(
        `favorite Books: ${favoriteBooks.length}`
    );
    // looping through the favoriteBooks
        for (let bookName of favoriteBooks){
            console.log(bookName);
        }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks();

/*
Three pillars of JS

1. Types / Coercion - Primitive type - undefined
                                       string
                                       number
                                       boolean
                                       object
                                       symbol
                                       null?
                                       function?
                                       array?
                      Converting Types.
                      Checking Equality.
2. Scope / Closures
3. this / Prototypes

built-in Fundamental Objects
Use new:
        Object()
        Array()
        Function()
        Date()
        RegExp()
        Error()
Don't use new:
              String()
              Number()
              Boolean()
    
The way to convert from one type to another: coercion
Converting Types
Coercion: string concatenation (number to string)

var msg1 = "There are ";
var numStudents = 16;
var msg2 = " sstudent.";
console.log(msg1 + numStudents + msg2);
// "There are 16 student"





function addAStudent(numStudents){
    return numStudents + 1;
}
addAStudent(
    Number(studentsInputElem.value)
);
// 17



Convertion of Boolean
Coercion:boolean
Falsy                   Truthy
0                       "foo"
-0                       23
null                     {a:1}
NaN                       [1,3]
false                      true
undefined                   function(){..}


Scope / Closures
Nested Scope
Closure

What Scope Does:
where the JavaScript Engine look for things
Scope: where to look for things


Function Expressions:
var clickHandler = function(){
    //
}; Anonymous Function Expressions

var keyHandler = function keyHandler(){
    //
}; Named Function Expressions


Block Scoping with let  (encapsulation)
var teacher = "Kyle";

{
let teacher = "Suzy";
console.log(teacher);  // suzy
}

console.log(teacher);  // Kyle




        CLosure
Closure is when a function "remember" the 
variables outside of it, even if you pass that 
function elsewhere.  



this keyword
A function's this references the execution context
for that call, determined entirely by how the 
function was called.
*/






















