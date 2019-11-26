import { Component, OnInit, Input } from "@angular/core";
import { Book } from "./book";
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
    console.log(this.myBookService.getList());
  }
  removeFromList(book: Book) {
    this.myBookService.removeBook(book.id);
    console.log(this.myBookService.getList());
  }
  isOnMyBooks(book: Book) {
    if (this.myBookService.getBook(book.id)) {
      return true;
    } else {
      return false;
    }
  }

  addToFavorite(book: Book) {
    this.myFavoriteService.saveBook(book);
    console.log(this.myFavoriteService.getList());
  }
  removeFromFavorite(book: Book) {
    this.myFavoriteService.removeBook(book.id);
    console.log(this.myFavoriteService.getList());
  }
  isOnFavorite(book: Book) {
    if (this.myFavoriteService.getBook(book.id)) {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit() {}
}
