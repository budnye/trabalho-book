import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../../services/book";
import { MyBooksService } from "../../services/my-books.service";
import { ReadingService } from "../../services/reading.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit {
  list: Book[];

  constructor(
    private myBookService: MyBooksService,
    private readingService: ReadingService
  ) {
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

  addToReading(book: Book) {
    this.readingService.saveBook(book);
  }

  isReading(book: Book) {
    let rBook = this.readingService.getBook();
    if (book === rBook) {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit() {}
}
