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