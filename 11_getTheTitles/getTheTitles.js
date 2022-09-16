const getTheTitles = function(books) {
    // books is an array of book objects

    return books.map(book => {
        return book.title;
    });
    

};

// Do not edit below this line
module.exports = getTheTitles;
