//================================== Activity 1 ==================================

// Task 1:

const books = {
  author: "James Gosling",
  title: "Java Programming",
  year: 1995,
  getBook() {
    return `Book Name = ${this.title}, Author=${this.author}`;
  },

  publishYear(year) {
    this.year = year;
    return `Book Name = ${this.title}, Author=${this.author}, Publish Year = ${this.year}`;
  },
};

console.log(books);

// Task 2:

console.log(`Book Name = ${books.title}, Author = ${books.author}`);

//================================== Activity 2 ==================================

// Task 3:

console.log(books.getBook);
// Task 4:

console.log(books.publishYear(2000));
//================================== Activity 3 ==================================

// Task 5:

// Task 6:

//================================== Activity 4 ==================================

// Task 7:

//================================== Activity 5 ==================================

// Task 8:

// Task 9:
