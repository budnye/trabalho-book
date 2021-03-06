export class Book {
  public id: string;
  public isbn: string;
  public title: string;
  public author: string;
  public imgFile: string;
  public description: string;

  constructor(
    id: string,
    isbn: string,
    title: string,
    author: string,
    imgFile: string,
    description: string
  ) {
    this.id = id;
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.imgFile = imgFile;
    this.description = description;
  }
}
