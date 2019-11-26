import { Component, OnInit } from "@angular/core";
import axios from "axios";
import { Book } from "../../services/book";

@Component({
  selector: "app-book-main",
  templateUrl: "./book-main.component.html",
  styleUrls: ["./book-main.component.scss"]
})
export class BookMainComponent implements OnInit {
  nome: string;
  books: Book[];
  active: boolean;
  loader: boolean;
  imgLoaded: boolean;
  totalItems: number;
  totalPages: number;
  pageIndex: number;
  itemIndex: number;
  constructor() {
    this.limpar();
    this.books = [];
  }

  limpar() {
    this.nome = "";
    this.active = false;
    this.pageIndex = 0;
    this.itemIndex = 0;
  }
  doSearch(reset = false) {
    if (this.nome.length < 1) {
      return;
    }
    if (reset) {
      this.pageIndex = 0;
    }
    this.active = false;
    this.loader = true;
    this.books = [];
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q="${this.nome}"&startIndex=${this.itemIndex}&printType=books&maxResults=40&orderBy=relevance`
      )
      .then(response => {
        response.data.items.forEach(book => {
          const id = book.id;
          const isbn = this.getIsbn(book.volumeInfo);
          const title = book.volumeInfo.title;
          const author = this.getAuthor(book.volumeInfo.authors);
          const img = this.getImg(book.volumeInfo);
          const newBook = new Book(id, isbn, title, author, img);
          this.books.push(newBook);
        });
        this.loader = false;
        this.active = true;
        this.totalItems = response.data.totalItems;
        this.totalPages = Math.ceil(this.totalItems / 40);
      })
      .catch(error => console.log(error));
  }
  getImg(image) {
    if (image.imageLinks) {
      return image.imageLinks.thumbnail;
    } else {
      return "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
    }
  }
  getAuthor(authors) {
    let authorList = "";
    if (authors) {
      authors.forEach(author => {
        authorList = authorList + " " + author;
      });
    }
    return authorList;
  }
  getIsbn(isbn) {
    if (isbn.industryIdentifiers) {
      return isbn.industryIdentifiers[0].identifier;
    } else {
      return "sem informação";
    }
  }
  scrollToTop() {
    document.querySelector("ion-content").scrollToTop(1000);
  }
  switchPage(forward = true) {
    if (forward) {
      this.pageIndex = this.pageIndex + 1;
      this.itemIndex = this.itemIndex + 40;
    } else {
      this.pageIndex = this.pageIndex - 1;
      this.itemIndex = this.itemIndex - 40;
    }
    this.doSearch();
    this.scrollToTop();
  }
  getPage() {
    return `${this.pageIndex + 1} de ${this.totalPages}`;
  }

  ngOnInit() {}
}
