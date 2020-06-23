class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	//Move the `addFavoriteBook(..)` and `printFavoriteBooks()` functions into the `Bookshelf` class as methods. Modify them so they use the `this` keyword to access the `favoriteBooks` array.
// Hint: `class` methods don't use the `function` keyword, just their name.
	
	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}

	// In the `printFavoriteBooks()` function, make sure there's no accidental type conversion (ie, from number to string).
//Hint: Use `String(..)` to coerce something to a string type.

		printFavoriteBooks() {
	console.log(`Favorite Books: ${ String(this.favoriteBooks.length) }`);
	for (let bookName of this.favoriteBooks) {
		console.log(bookName);
	}
}
}


//  Fill out the definition of the `loadBooks(..)` function, which should receive an instance of the `Bookshelf` class that you will pass to it.

function loadBooks(theBookshelf) {
	//  `loadBooks(..)` should call the provided `fakeAjax(..)`, using `BOOK_API` as the URL and an inline function expression as the callback.
	fakeAjax(BOOK_API,function onBooks(bookNames){

// The callback will be passed an array of book names. Loop through this array, passing each book name to the `addFavoriteBook(..)` method of the `Bookshelf` instance passed to `loadBooks(..)`. 		
for (let bookName of bookNames){
	theBookshelf.addFavoriteBook(bookName);
}
// Then call the `printFavoriteBooks()` method.
	theBookshelf.printFavoriteBooks()
	});
}

var BOOK_API = "https://some.url/api";
// Create an instance of `Bookshelf` class, and pass it as an argument to `loadBooks(..)`.
//Hint: Class instantiation: `new Whatever()`.

var myBooks = new Bookshelf();
loadBooks(myBooks);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
