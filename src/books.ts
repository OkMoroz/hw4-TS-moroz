interface IAuthor {
  id: number;
  name: string;
  birthYear: number;
}
interface IBook {
  id: number;
  title: string;
  authorId: number;
  language: string;
  publicationYear: number;
  pages: number;
}
interface IBookService {
  getBookInfo: (bookId: number) => IBook | undefined;
  getAuthorInfo: (authorId: number) => IAuthor | undefined;
  getBookTitle(idBook: number): string;
}
class BookService implements IBookService {
  _books: IBook[] = [
    {
      id: 1,
      title: "Book English",
      authorId: 1,
      language: "English",
      publicationYear: 2022,
      pages: 200,
    },
    {
      id: 2,
      title: "Book Ukrainian",
      authorId: 2,
      language: "Ukrainian",
      publicationYear: 2023,
      pages: 150,
    },
  ];

  _authors: IAuthor[] = [
    { id: 1, name: "Author English", birthYear: 1985 },
    { id: 2, name: "Author Ukrainian", birthYear: 1991 },
  ];

  getBookInfo(bookId: number): IBook | undefined {
    const book = this.getBookById(bookId);
    return book ? book : undefined;
  }

  getAuthorInfo(authorId: number): IAuthor | undefined {
    const author = this.getAuthorById(authorId);
    return author ? author : undefined;
  }

  getBookTitle(idBook: number): string {
    const book = this.getBookById(idBook);
    return book ? book.title : "Sorry. This book not was found";
  }

  private getBookById(bookId: number): IBook | undefined {
    return this._books.find((book) => book.id === bookId);
  }

  private getAuthorById(authorId: number): IAuthor | undefined {
    return this._authors.find((author) => author.id === authorId);
  }
}

const myBookService = new BookService();
console.log(myBookService.getBookInfo(1));
console.log(myBookService.getBookInfo(3));
console.log(myBookService.getAuthorInfo(2));
console.log(myBookService.getAuthorInfo(3));
console.log(myBookService.getBookTitle(1));
console.log(myBookService.getBookTitle(3));
