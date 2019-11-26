import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../book-item/book";
import { MyBooksService } from "../../services/my-books.service";
import { MyFavoriteService } from "../../services/my-favorite.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit {
  @Input() list: Book[];
  @Input() favorite: boolean;
  private bookList: Book[];
  private favoriteList: Book[];

  constructor(
    private myBookService: MyBooksService,
    private myFavoriteService: MyFavoriteService
  ) {
    this.bookList = myBookService.getList();
    this.favoriteList = myFavoriteService.getList();
    this.list = [];
    this.favorite = false;
  }

  removeFromList(book: Book) {
    this.myBookService.removeBook(book.id);
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
  }

  removeFromFavorite(book: Book) {
    this.myFavoriteService.removeBook(book.id);
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
