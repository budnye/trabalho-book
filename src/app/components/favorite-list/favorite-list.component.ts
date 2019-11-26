import { Component, OnInit } from "@angular/core";
import { Book } from "../../services/book";
import { MyBooksService } from "../../services/my-books.service";
import { MyFavoriteService } from "../../services/my-favorite.service";

@Component({
  selector: "app-favorite-list",
  templateUrl: "./favorite-list.component.html",
  styleUrls: ["./favorite-list.component.scss"]
})
export class FavoriteListComponent implements OnInit {
  list: Book[];

  constructor(
    private myBookService: MyBooksService,
    private myFavoriteService: MyFavoriteService
  ) {
    this.list = myFavoriteService.getList();
  }

  addToMyBooks(book: Book) {
    this.myBookService.saveBook(book);
    this.myFavoriteService.removeBook(book.id);
  }

  removeFromFavorite(book: Book) {
    this.myFavoriteService.removeBook(book.id);
  }

  ngOnInit() {}
}
