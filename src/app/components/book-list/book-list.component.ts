import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../../services/book";
import { MyBooksService } from "../../services/my-books.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit {
  list: Book[];

  constructor(private myBookService: MyBooksService) {
    this.list = myBookService.getList();
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

  ngOnInit() {}
}
