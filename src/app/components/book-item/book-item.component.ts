import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../../services/book";
import { MyBooksService } from "../../services/my-books.service";
import { MyFavoriteService } from "../../services/my-favorite.service";

@Component({
  selector: "app-book-item",
  templateUrl: "./book-item.component.html",
  styleUrls: ["./book-item.component.scss"]
})
export class BookItemComponent implements OnInit {
  @Input() livro: Book;
  private bookList: Book[];
  private favoriteList: Book[];

  constructor(
    private myBookService: MyBooksService,
    private myFavoriteService: MyFavoriteService
  ) {
    this.bookList = myBookService.getList();
    this.favoriteList = myFavoriteService.getList();
  }

  addToList(book: Book) {
    this.myBookService.saveBook(book);
    this.myFavoriteService.removeBook(book.id);
  }
  removeFromList(book: Book) {
    this.myBookService.removeBook(book.id);
  }
  isOnMyBooks(book: Book) {
    return this.myBookService.getBook(book.id);
  }

  addToFavorite(book: Book) {
    this.myFavoriteService.saveBook(book);
  }
  removeFromFavorite(book: Book) {
    this.myFavoriteService.removeBook(book.id);
  }
  isOnFavorite(book: Book) {
    return this.myFavoriteService.getBook(book.id);
  }
  ngOnInit() {}
}
